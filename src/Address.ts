import * as crypto from 'crypto'
import Blockchain from './Blockchain'
import Transaction from './Transaction'

export default class Address {
	private _address: string
	private _balance: number
	private _keys: {
		privateKey: string
		publicKey: string

	}

	constructor() {
		this._keys = this.generateKeys()
		this._address = this.calculateHash()
		this._balance = Blockchain.BASE_ACCOUNT_AMOUNT
	}

	public get address(): string {
		return this._address
	}

	public set address(address: string) {
		this._address = address
	}

	public get publicKey(): string {
		return this._keys.publicKey
	}

	public get balance(): number {
		return this._balance
	}

	public set balance(amount: number) {
		this._balance = this.balance
	}

	private generateKeys = () => {
		return crypto.generateKeyPairSync('rsa', {
			modulusLength: 4096,
			publicKeyEncoding: {
				type: 'spki',
				format: 'pem'
			},
			privateKeyEncoding: {
				type: 'pkcs8',
				format: 'pem'
			}
		})
	}

	public makeTransaction(to: Address, amount: number, data?: any): Transaction { 
		return new Transaction(this, to, amount, data).sign(this)
	}

	private calculateHash(): string {
		return crypto.createHash('sha256').update(this._keys.publicKey).digest('hex')
	}

	public sign(transactionHash: string): string {
		return crypto.createSign('sha256').update(transactionHash).sign(this._keys.privateKey, 'hex')
	}

	public toString(): string {
		return `Address: [Address: ${this._address}, balance: ${this._balance}]`
	}

}