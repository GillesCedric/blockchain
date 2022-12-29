# Implémentation d'une blockchain en typescript

## Explication du projet: CLASSES ET ATTRIBUTS 
 
### - BlockChain :
- **Rôle** : Cette classe permet d’instancier une nouvelle blockchain 
- **Attributs** :  
    - *chain* : cet Attribut représente la liste des blocks de la blockchain 
    - *pendingTransactions* : cette attribut représente la liste des transactions  en attente (qui n’ont pas encore été ajouté à un bloc) 
    - *difficulty* : cet attribut représente la difficulté de minage d’un bloc 
    - *miningReward* : cet attribut représente le gain d’un mineur après un minage réussit 
    - *BLOCK_NUMBER_TRANSACTIONS* : cet attribut représente le nombre de transactions par bloc 
    - *BASE_ACCOUNT_AMOUNT* : cet attribut représente le montant de base à la création d’un compte (Address) 
- **Méthode** :  
    - *createGenesisBlock* : Cette méthode permet de créer le premier bloc de la BlockChain. 
    - *getLatestBlock* : Pour récupérer le dernier bloc de la blockchain 
    - *addBlock* : Pour ajouter un bloc. 
    - *addTransaction* : Pour ajouter une transaction. 
    - *isValidBlock* :Verifie si un bloc est valide. 
    - *isValidTransaction* : Verifi si une transaction est valide. 
    - *isValidChain* : Verifie si la blockChain est valide. 
    - *getLast10Transactions* :Récupérer les 10 dernières transactions. 
    - *Mine* : Pour miner un bloc. 
    - *alterBlock* : Pour altérer un bloc 
 
### -	Block : 
-	**Rôle** : Cette classe permet d’instancier un nouveau bloc 
-	**Attributs** : 
    -	*Transactions* : Il représente la liste des transactions du bloc. 
    -	*Proof* : c’est le proof of work  
    -	*previousHash* : Représente le hashBlock précédent. 
    -	*hash* : Qui représente  le hashBlock. 
-	Méthode :  
    -	*generateHash* : Pour générer le HashBlock. 
    -	*mineBlock* : Pour miner le bloc . 
    -	*isValidProof* : Pour valider si la preuve du travail est valide . 
    -	*toString* : Permettant d’afficher le bloc en string. 
 
### -	Transactions : 
-	**Rôles** : Cette classe permet d’instancier une nouvelle transaction. 
-	**Attributs** :  
    -	*from* : Qui represente celui qui émet la transaction. 
    -	*to* : Qui représente celui à qui la transaction est destinée. 
    -	*amount* : C’est le montant de la transaction. 
    -	*data* : Données de la transaction. 
    -	*hash* : c’est le hash de la transaction. 
    -	*signature*: c’est la signature de la transaction. 
-	**Méthodes** : 
    -	*generateHash* : Pour générer le Hash de la transaction. 
    -	*sign* : Pour signer une transaction. 
    -	*validateTransaction* :Pour valider la transaction. 
    -	*toString* : Pour afficher la transaction en string. 
 
### -	Adress :      
-	**Rôles** : Cette classe permet d’instancier une adresse. 
-	**Attributs** :  
    -	*address* : Ça représente le hash de la clé public soit l’adresse du compte. 
    -	*balance* : Qui représente le solde du compte. 
    -	*keys* : Qui contient la clés privé et la clé publique associé au compte. 
 
-	**Méthodes** : 
    -	*generateKeys* : Qui permet de générer la clé privé et la clé public du compte. 
    -	*makeTransactions* : Qui permet de faire une transaction d’un compte a un autre . 
    -	*claculateHash* :Permettant de calculer le hash du compte. 
    -	*sign* : Pour signer une transaction. 
    -	*toString* : Pour afficher la transaction en string. 


## COMPILER ET LANCER LE PROGRAMME

### Première façon  :

Ce projet est fourni avec ce rapport un Dockerfile permettant de cloner le projet sur github, de le construire et de l’exécuter.
1.	Télécharger le [Dockerfile](https://github.com/GillesCedric/blockchain/blob/main/Dockerfile) depuis le répertoire du projet
2.	Lancer Docker sous Windows ou sous Linux (Le Dockerfile a été créé sous Windows)
3.	Copier le Dockerfile dans un répertoire de sa machine
4.	Ouvrir un terminal (de prédérence administrateur) dans le répertoire du Dockerfile
5.	Taper la commande *`docker build -t blockchain-typescript .`*
6.	Taper la commande *`docker run blockchain-typescript`*

### Deuxième façon  :

1.	Cloner ou télécharger tout le projet depuis ce répertoire
2.	Ouvrir un terminal  dans le répertoire du projet
3.	Taper la commande *`npm install`* pour installer les dépendances du projet
4.	Taper la commande *`npm start ou npm run start`* pour démarrer le projet

**Préréquis** :
    Vous devez avoir NODEJS installé dans votre machine. Si vous ne l'avez pas, vous pouvez télécharger la dernière version **LTS** [ici](https://nodejs.org/en/download/)

## AFFICHAGE DU PROGRAMME

Le programme lance le fichier *index.t*s qui s’exécute dans le terminal : 
-	Il crée une nouvelle blockchain
-	Il affiche le bloc de genèse de la blockchain
-	Il crée 6 différentes adresses
-	Il crée 35 différentes transactions à partir des différentes adresses (certaines seront valides et d’autres non)
-	Il Vérifie chaque transaction et ajoute les valides dans la blockchain
-	Il affiche les 10 dernières transactions (en l’occurrence le dernier bloc)
-	Il affiche la validité de la chaîne (qui devrait être true)
-	Il altère la chaîne (modification d’une transaction)
-	Il affiche de nouveau la validité de la chaîne (qui à ce stade est false)
