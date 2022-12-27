import Address from "./Address"
import Blockchain from "./Blockchain"

const blockchain = new Blockchain()

console.log(blockchain.getLatestBlock())

const addressA = new Address()
const addressB = new Address()

try {
	const transaction1 = addressA.makeTransaction(addressB, 300)
	const transaction2 = addressB.makeTransaction(addressA, 1150)
	blockchain.addTransaction(transaction1)
	blockchain.addTransaction(transaction2)

	console.log(blockchain.isValidTransaction(transaction1))
	console.log(blockchain.isValidTransaction(transaction1))

	console.log(blockchain.getLast10Transactions())

	console.log(blockchain.isValidChain())
	blockchain.alterBlock(1, 1, undefined, undefined, 800)
	console.log(blockchain.isValidChain())
} catch (error) {
	console.error(error)
}



