import Address from "./Address"
import Blockchain from "./Blockchain"
import Transaction from "./Transaction"

//création de la blockchain
const blockchain = new Blockchain()

//Affichage du dernier bloc de la blockchain (le bloc génésis pour l'instant)
console.log("\nBloc de génèse\n")
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
		addressA.makeTransaction(addressB, 200, "transaction de test 1"),
		addressB.makeTransaction(addressC, 300, "transaction de test 2"),
		addressC.makeTransaction(addressD, 150, "transaction de test 3"),
		addressD.makeTransaction(addressE, 450, "transaction de test 4"),
		addressE.makeTransaction(addressF, 120, "transaction de test 5"),
		addressA.makeTransaction(addressC, 30, "transaction de test 6"),
		addressC.makeTransaction(addressE, 15, "transaction de test 7"),
		addressE.makeTransaction(addressA, 110, "transaction de test 8"),
		addressF.makeTransaction(addressB, 210, "transaction de test 9"),
		addressA.makeTransaction(addressD, 60, "transaction de test 10"),
		addressA.makeTransaction(addressE, 30, "transaction de test 11"),
		addressE.makeTransaction(addressB, 80, "transaction de test 12"),
		addressF.makeTransaction(addressC, 400, "transaction de test 13"),
		addressA.makeTransaction(addressE, 410, "transaction de test 14"),
		addressB.makeTransaction(addressA, 320, "transaction de test 15"),
		addressC.makeTransaction(addressB, 330, "transaction de test 16"),
		addressD.makeTransaction(addressC, 90, "transaction de test 17"),
		addressE.makeTransaction(addressA, 75, "transaction de test 18"),
		addressF.makeTransaction(addressB, 60, "transaction de test 19"),
		addressA.makeTransaction(addressD, 145, "transaction de test 20"),
		addressA.makeTransaction(addressB, 154, "transaction de test 21"),
		addressB.makeTransaction(addressC, 125, "transaction de test 22"),
		addressC.makeTransaction(addressD, 160, "transaction de test 23"),
		addressD.makeTransaction(addressE, 80, "transaction de test 24"),
		addressE.makeTransaction(addressF, 95, "transaction de test 25"),
		addressA.makeTransaction(addressC, 115, "transaction de test 26"),
		addressC.makeTransaction(addressE, 130, "transaction de test 27"),
		addressE.makeTransaction(addressA, 520, "transaction de test 28"),
		addressF.makeTransaction(addressB, 390, "transaction de test 29"),
		addressA.makeTransaction(addressD, 200, "transaction de test 30"),
		addressC.makeTransaction(addressD, 13000, "transaction de test 31"),
		addressE.makeTransaction(addressB, 9800, "transaction de test 32"),
		addressF.makeTransaction(addressA, 30000, "transaction de test 33"),
		addressA.makeTransaction(addressB, 8500, "transaction de test 34"),
		addressF.makeTransaction(addressE, 3200, "transaction de test 35"),
	]

	//vérification et ajout des transactions dans la blockchain
	let i = 1
	for (const transaction of transactions) {
		//vérification de la validité des transactions
		console.log("\nTransaction "+i+"\n")
		console.log(blockchain.isValidTransaction(transaction))

		//ajout des transactions dans la blockchain
		blockchain.addTransaction(transaction)
		i++
	}

	//affichage des 10 dernières transactions de la blockchain
	console.log(blockchain.getLast10Transactions())

	//affichage de la validité de la blockchain
	console.log("\nValidité de la chaîne :\n")
	console.log(blockchain.isValidChain())

	//altération de la blockchain
	blockchain.alterBlock(1, 1, undefined, undefined, 800)

	//affichage de la validité de la blockchain
	console.log("\nValidité de la chaîne :\n")
	console.log(blockchain.isValidChain())
} catch (error) {
	console.error(error)
}



