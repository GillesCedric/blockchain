import Address from "./Address"
import Blockchain from "./Blockchain"
import Transaction from "./Transaction"

//création de la blockchain
const blockchain = new Blockchain()

//Affichage du dernier bloc de la blockchain (le bloc génésis pour l'instant)
console.log(blockchain.getLatestBlock())

//Création des adresses
const addressA = new Address()
const addressB = new Address()
const addressC = new Address()
const addressD = new Address()
const addressE = new Address()
const addressF = new Address()

//création des transactions
try {
	const transactions: Transaction[] = [
		new Transaction(addressA, addressB, 200, "transaction de test 1"),
		new Transaction(addressB, addressC, 300, "transaction de test 2"),
		new Transaction(addressC, addressD, 150, "transaction de test 3"),
		new Transaction(addressD, addressE, 450, "transaction de test 4"),
		new Transaction(addressE, addressF, 120, "transaction de test 5"),
		new Transaction(addressA, addressC, 30, "transaction de test 6"),
		new Transaction(addressC, addressE, 15, "transaction de test 7"),
		new Transaction(addressE, addressA, 110, "transaction de test 8"),
		new Transaction(addressF, addressB, 210, "transaction de test 9"),
		new Transaction(addressA, addressD, 60, "transaction de test 10"),
		new Transaction(addressA, addressE, 30, "transaction de test 11"),
		new Transaction(addressE, addressB, 80, "transaction de test 12"),
		new Transaction(addressF, addressC, 400, "transaction de test 13"),
		new Transaction(addressA, addressE, 410, "transaction de test 14"),
		new Transaction(addressB, addressA, 320, "transaction de test 15"),
		new Transaction(addressC, addressB, 330, "transaction de test 16"),
		new Transaction(addressD, addressC, 90, "transaction de test 17"),
		new Transaction(addressE, addressA, 75, "transaction de test 18"),
		new Transaction(addressF, addressB, 60, "transaction de test 19"),
		new Transaction(addressA, addressD, 145, "transaction de test 20"),
		new Transaction(addressA, addressB, 154, "transaction de test 21"),
		new Transaction(addressB, addressC, 125, "transaction de test 22"),
		new Transaction(addressC, addressD, 160, "transaction de test 23"),
		new Transaction(addressD, addressE, 80, "transaction de test 24"),
		new Transaction(addressE, addressF, 95, "transaction de test 25"),
		new Transaction(addressA, addressC, 115, "transaction de test 26"),
		new Transaction(addressC, addressE, 130, "transaction de test 27"),
		new Transaction(addressE, addressA, 520, "transaction de test 28"),
		new Transaction(addressF, addressB, 390, "transaction de test 29"),
		new Transaction(addressA, addressD, 200, "transaction de test 30"),
		new Transaction(addressC, addressD, 13000, "transaction de test 31"),
		new Transaction(addressE, addressB, 9800, "transaction de test 32"),
		new Transaction(addressF, addressA, 30000, "transaction de test 33"),
		new Transaction(addressA, addressB, 8500, "transaction de test 34"),
		new Transaction(addressF, addressE, 3200, "transaction de test 35"),
	]

	//vérification et ajout des transactions dans la blockchain
	for (const transaction of transactions) {
		//vérification de la validité des transactions
		console.log(blockchain.isValidTransaction(transaction))

		//ajout des transactions dans la blockchain
		blockchain.addTransaction(transaction)
	}

	//affichage des 10 dernières transactions de la blockchain
	console.log(blockchain.getLast10Transactions())

	//affichage de la validité de la blockchain
	console.log(blockchain.isValidChain())

	//altération de la blockchain
	blockchain.alterBlock(1, 1, undefined, undefined, 800)

	//affichage de la validité de la blockchain
	console.log(blockchain.isValidChain())
} catch (error) {
	console.error(error)
}



