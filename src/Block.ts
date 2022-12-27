import * as crypto from 'crypto'
import Blockchain from './Blockchain'
import Transaction from './Transaction'

export default class Block {
	private _transactions: Transaction[]
	private _proof: number
	private _previousHash: string
	private _hash: string

	constructor(previousHash: string, transactions: Transaction[]) {
		this._previousHash = previousHash
		this._hash = this.generateHash()
		this._transactions = transactions
		this._proof = 0
	}

	public get transactions(): Transaction[] {
		return this._transactions
	}

	public get proof(): number {
		return this._proof
	}

	public get previousHash(): string {
		return this._previousHash
	}

	public get hash(): string {
		return this._hash
	}

	public generateHash(): string {
		return crypto.createHash('sha256').update(JSON.stringify(this._transactions) + this._proof + this._previousHash).digest('hex')
	}

	public mineBlock(): void {
		while (this.hash.substring(0, Blockchain.difficulty) !== Array(Blockchain.difficulty + 1).join('0')) {
			console.log('Minage de block : tentative ' + this.proof)
			this._proof++
			this._hash = this.generateHash()
		}
		console.log(`Block miné avec succès: ${this._hash}`)
	}

	public isValidProof(): boolean {
		return this._hash.substring(0, Blockchain.difficulty) === Array(Blockchain.difficulty + 1).join('0')
	}

	public toString(): string {
		return `Block: [Transactions: ${this._transactions.map(transaction => transaction.toString())}, proof: ${this._proof}, previousHash: ${this._previousHash}, hash: ${this._hash}]`
	}

}