# Implémentation d'une blockchain en typescript

## Explication du projet: CLASSES ET ATTRIBUTS 
 
### -	BlockChain :
-	**Rôle** : Cette classe permet d’instancier une nouvelle blockchain 
-	**Attributs** :  
o	*chain* : cet Attribut représente la liste des blocks de la blockchain 
o	*pendingTransactions* : cette attribut représente la liste des transactions  en attente (qui n’ont pas encore été ajouté à un bloc) 
o	**difficulty** : cet attribut représente la difficulté de minage d’un bloc 
o	**miningReward** : cet attribut représente le gain d’un mineur après un minage réussit 
o	**BLOCK_NUMBER_TRANSACTIONS** : cet attribut représente le nombre de transactions par bloc 
o	**BASE_ACCOUNT_AMOUNT** : cet attribut représente le montant de base à la création d’un compte (Address) 
-	**Méthode** :  
o	**createGenesisBlock** : Cette méthode permet de créer le premier bloc de la BlockChain. 
o	**getLatestBlock** : Pour récupérer le dernier bloc de la blockchain 
o	**addBlock : Pour ajouter un bloc. 
o	**addTransaction : Pour ajouter une transaction. 
o	**isValidBlock :Verifie si un bloc est valide. 
o	**isValidTransaction : Verifi si une transaction est valide. 
o	**isValidChain : Verifie si la blockChain est valide. 
o	**getLast10Transactions :Récupérer les 10 dernières transactions. 
o	**Mine : Pour miner un bloc. 
o	**alterBlock : Pour altérer un bloc 
 
-	Block : 
-	Rôle : Cette classe permet d’instancier un nouveau bloc 
-	Attributs : 
o	Transactions : Il représente la liste des transactions du bloc. 
o	Proof : c’est le proof of work  
o	previousHash : Représente le hashBlock précédent. 
o	hash : Qui représente  le hashBlock. 
-	Méthode :  
o	generateHash : Pour générer le HashBlock. 
o	mineBlock : Pour miner le bloc . 
o	isValidProof : Pour valider si la preuve du travail est valide . 
o	toString : Permettant d’afficher le bloc en string. 





 
-	Transactions : 
-	Rôles : Cette classe permet d’instancier une nouvelle transaction. 
-	Attributs :  
o	from : Qui represente celui qui émet la transaction. 
o	to : Qui représente celui à qui la transaction est destinée. 
o	amount : C’est le montant de la transaction. 
o	data : Données de la transaction. 
o	hash : c’est le hash de la transaction. 
o	signature: c’est la signature de la transaction. 
-	Méthodes : 
o	generateHash : Pour générer le Hash de la transaction. 
o	sign : Pour signer une transaction. 
o	validateTransaction :Pour valider la transaction. 
o	toString : Pour afficher la transaction en string. 
 
-	Adress :      
-	Rôles : Cette classe permet d’instancier une adresse. 
-	Attributs :  
o	address : Ça représente le hash de la clé public soit l’adresse du compte. 
o	balance : Qui représente le solde du compte. 
o	keys : Qui contient la clés privé et la clé publique associé au compte. 
 
-	Méthodes : 
o	generateKeys : Qui permet de générer la clé privé et la clé public du compte. 
o	makeTransactions : Qui permet de faire une transaction d’un compte a un autre . 
o	claculateHash :Permettant de calculer le hash du compte. 
o	sign : Pour signer une transaction. 
o	toString : Pour afficher la transaction en string. 


II.	COMPILER ET LANCER LE PROGRAMME



Il est fourni avec ce rapport un Dockerfile permettant de cloner le projet sur github, de le construire et de l’exécuter.
1.	Lancer Docker sous Windows ou sous Linux (Le Dockerfile a été créé sous Windows)
2.	Copier le Dockerfile dans un répertoire de sa machine
3.	Ouvrir un terminal (de prédérence administrateur) dans le répertoire du Dockerfile
4.	Taper la commande docker build -t blockchain-typescript .
5.	Taper la commande docker run blockchain-typescript


III.	AFFICHAGE DU PROGRAMME

Le programme lance le fichier index.ts qui s’exécute dans le terminal : 
	Il crée une nouvelle blockchain
	Il affiche le bloc de genèse de la blockchain
	Il crée 6 différentes adresses
	Il crée 35 différentes transactions à partir des différentes adresses (certaines seront valides et d’autres non)
	Il Vérifie chaque transaction et ajoute les valides dans la blockchain
	Il affiche les 10 dernières transactions (en l’occurrence le dernier bloc)
	Il affiche la validité de la chaîne (qui devrait être true)
	Il altère la chaîne (modification d’une transaction)
	Il affiche de nouveau la validité de la chaîne (qui à ce stade est false)



IV.	FONCTIONNALITES CRYPTOGRAPHIQUES IMPLEMENTEES

Pour le développement de la bockchain, nous avons implémenté les différentes fonctions cryptographiques suivantes grâce au module crypto de NODEJS :
	Transaction.generateHash() : fonction permettant de générer le hash d’une transaction en hexadécimal en utilisant l’algorithme SHA256 
	Block.generateHash() : fonction permettant de générer le hash d’un bloc en hexadécimal en utilisant l’algorithme SHA256 
	Address.calculateHash() : fonction permettant de générer le hash d’une adresse (le hash de la clé publique) en hexadécimal en utilisant l’algorithme SHA256 
	Address.sign(transactionHash : string) : fonction permettant de signer le hash d’une transaction en utilisant l’algorithme SHA256
	Blockchain.isValidTransaction() : fonction permettant de vérifier la validité d’une transaction en vérifiant la signature du hash de celle-ci en utilisant l’algorithme SHA256
