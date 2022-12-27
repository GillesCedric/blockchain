import * as crypto from 'crypto'
import Address from "./Address"

export default class Transaction {
	private _from: Address
	private _to: Address
	private _amount: number
	private _data?: any
	private _hash: string
	private _signature: string | undefined

	constructor(from: Address, to: Address, amount: number, data?: any) {
		this._from = from
		this._to = to
		this._amount = amount
		this._data = data
		this._hash = this.generateHash()
	}

	public get from(): Address {
		return this._from
	}

	public set from(from: Address) {
		this._from = from
	}

	public get to(): Address {
		return this._to
	}

	public set to(to: Address) {
		this._to = to
	}

	public get amount(): number {
		return this._amount
	}

	public set amount(amount: number) {
		this._amount = amount
	}

	public get data(): any {
		return this._data
	}

	public set data(data: any) {
		this._data = data
	}

	public get hash(): string {
		return this._hash
	}

	public get signature(): string {
		return this._signature ?? ''
	}

	public generateHash(): string {
		return crypto.createHash('sha256').update(JSON.stringify(this.from.address + this._to.address + this.amount) + JSON.stringify(this._data)).digest('hex')
	}

	public sign(sender: Address): Transaction {
		if (!this._hash) throw new Error('Impossible de signer la transaction avant d\'avoir calculé son hash')
		this._signature = sender.sign(this._hash)
		return this
	}

	public validateTransaction(): void {
		this._from.balance -= this._amount
		this._to.balance += this._amount
	}

	public toString(): string {
		return `Transaction: [from: ${this._from.address}, to: ${this._to.address}, amount: ${this._amount}, data: ${JSON.stringify(this._data)}, hash: ${this._hash}, signature: ${this._signature}]`
	}

}