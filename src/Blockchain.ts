import * as crypto from 'crypto'
import Block from "./Block"
import Transaction from "./Transaction"

export default class Blockchain {
	private chain: Block[]
	private pendingTransactions: Transaction[]
	public static difficulty: number = 3
	public static miningReward: number = 0.1
	public static readonly BLOCK_NUMBER_TRANSACTIONS = 2
	public static readonly BASE_ACCOUNT_AMOUNT = 1500

	constructor() {
		this.chain = [this.createGenesisBlock()]
		this.pendingTransactions = []
	}

	private createGenesisBlock(): Block {
		return new Block("0", [])
	}

	public getLatestBlock(): Block {
		return this.chain[this.chain.length - 1]
	}

	public addBlock(block: Block): void {
		if(!this.isValidBlock(block, this.getLatestBlock())){
			console.error('La transaction n\'est pas valide')
			return
		}
		this.chain.push(block)
	}

	public addTransaction(transaction: Transaction): void {
		if(!this.isValidTransaction(transaction)){
			console.error('La transaction n\'est pas valide')
			return
		}
		transaction.validateTransaction()
		this.pendingTransactions.push(transaction)
		if (this.pendingTransactions.length == Blockchain.BLOCK_NUMBER_TRANSACTIONS) {
			try {
				const block = this.mine(new Block(this.getLatestBlock().hash, this.pendingTransactions))
				this.addBlock(block)
				this.pendingTransactions = []
			} catch (error) {
				console.error(error)
			}

		}
	}

	public isValidBlock(block: Block, previousBlock: Block): boolean {
		if (!block.hash) {
			console.error('Le bloc ne possède pas de hash')
			return false
		}
		if (block.hash != block.generateHash()) {
			console.error('Le hash du bloc ne correspond pas: le bloc est invalide il a surement été altéré')
			return false
		}
		if (!block.isValidProof()) {
			console.error('La preuve de travail du bloc n\'est pas valide')
			return false
		}
		if (block.previousHash != previousBlock.hash) {
			console.error('le hash du bloc précédent est invalide')
			return false
		}
		if (block.transactions.length != Blockchain.BLOCK_NUMBER_TRANSACTIONS) {
			console.error('Le bloc ne contient pas exactement 10 transactions')
			return false
		}
		for (const transaction of block.transactions) {
			if (!this.isValidTransaction(transaction)) return false
		}
		return true
	}

	public isValidTransaction(transaction: Transaction): boolean {

		if (!transaction.from || !transaction.to) {
			console.error("Transaction must include a sender and a recipient.")
			return false
		}

		if (!transaction.amount || transaction.amount <= 0) {
			console.error("Transaction must include a positive amount.")
			return false
		}

		if(transaction.from.balance < transaction.amount){
			console.error('Impossible d\'effectuer le virement')
			return false
		}

		if (!transaction.signature) {
			console.error("Transaction must include a signature.")
			return false
		}

		if (transaction.hash != transaction.generateHash()) {
			console.error("Le hash de la transaction est invalide: la transaction a surement été modifié ou altéré.")
			return false
		}

		const result = crypto.createVerify("SHA256").update(transaction.hash).verify(transaction.from.publicKey, transaction.signature, "hex")

		if (!result) {
			console.error("Invalid signature for this transaction.")
			return false
		}
		
		return true
	}

	public isValidChain(): boolean {
		for (let i = 1; i < this.chain.length; i++) {
			let currentBlock = this.chain[i]
			let previousBlock = this.chain[i - 1]
			if (!this.isValidBlock(currentBlock, previousBlock)) return false
		}
		return true
	}

	public getLast10Transactions() {
		console.log("Affichage des 10 dernières transactions (le dernier bloc de la chaîne)")
		for (const transaction of this.getLatestBlock().transactions) {
			console.log(transaction.toString())
		}
	}

	public mine(block: Block): Block {
		block.mineBlock()
		if (!block.isValidProof()) throw new Error('La preuve de travail est invalide')

		return block
	}

	public alterBlock(blockIndex: number, transactionIndex: number, from?: string, to?: string, amount?: number, data?: any): void {
		let transaction = this.chain[blockIndex].transactions[transactionIndex]
		if (transaction != null) {
			transaction.from.address = from ?? transaction.from.address
			transaction.to.address = to ?? transaction.to.address
			transaction.amount = amount ?? transaction.amount
			transaction.data = data
		}
		this.chain[blockIndex].transactions[transactionIndex] = transaction
	}

}