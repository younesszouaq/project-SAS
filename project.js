const prompt = require('prompt-sync')()

let candidats = [
    {
        cin: "AB123456",
        nom: "Akhannouch",
        prenom: "Aziz",
        partipolitique: "RNI",
        age: 65,
        electeures: ["AA111111", "BB222222", "CC333333"]
    },
    {
        cin: "CD234567",
        nom: "Baitas",
        prenom: "Mustapha",
        partipolitique: "RNI",
        age: 49,
        electeures: ["DD444444", "EE555555"]
    },
    {
        cin: "EF345678",
        nom: "Talbi Alami",
        prenom: "Rachid",
        partipolitique: "RNI",
        age: 66,
        electeures: ["FF666666", "GG777777", "HH888888", "II999999"]
    },
    {
        cin: "GH456789",
        nom: "El Midaoui",
        prenom: "Mohamed",
        partipolitique: "PI",
        age: 66,
        electeures: ["JJ101010"]
    }
]

function ajouterCandidat() {
    let cin = prompt("entre un cin : ")
    let nom = prompt("entre un nom : ")
    let prenom = prompt("entre un prenom : ")
    let partipolitique = prompt("entre un partipolitique : ")
    let age =Number(prompt("entre un age : "))


    let condidats = {
        cin : cin,
        nom : nom,
        prenom : prenom,
        partipolitique : partipolitique,
        age : age, 
        electeures : []

    }


    candidats.push(condidats)
    console.log("Candidat ajouté avec succès !")

} 
 
function ajouterPlusieursCandidats(){
    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "))
    for (let i = 0; i < nombre; i++) {
        console.log(`Candidat ${i + 1}`)
        ajouterCandidat()
    }
}

function afficherListeCandidats() {

    console.log(`Choisir une vue : 
1 - Afficher tous les candidats 
2 - Trier par nombre de votes  
3 - Filtrer par parti politique`)

    let choix = prompt("Entrer votre chois : ")

    let liste = []

    for (let i = 0; i < candidats.length; i++) {
        liste.push(candidats[i])
    }
    if (choix == 2) {

        for (let i = 0; i < liste.length - 1; i++) {

            for (let j = 0; j < liste.length - 1 - i; j++) {

                if (liste[j].electeures.length < liste[j + 1].electeures.length) {

                    let temp = liste[j]
                    liste[j] = liste[j + 1]
                    liste[j + 1] = temp
                }
            }
        }
    }

    if (choix == 3) {

        let parti = prompt("Entrer le parti politique :")

        let listeFiltre = []

        for (let i = 0; i < liste.length; i++) {

            if (liste[i].partipolitique.toLowerCase() == parti.toLowerCase()) {
                listeFiltre.push(liste[i])
            }
        }

        liste = listeFiltre
    }

    for (let i = 0; i < liste.length; i++) {

        console.log("===================================")
        console.log(`cin : ${liste[i].cin}`)
        console.log(`nom : ${liste[i].nom}`)
        console.log(`prenom : ${liste[i].prenom}`)
        console.log(`age : ${liste[i].age}`)
        console.log(`partipolitique : ${liste[i].partipolitique}`)
        console.log(`nombre de votes : ${liste[i].electeures.length}`)
        console.log("===================================")
    }
}


function voterPourCandidat(){
    
    let cinelecteur = prompt("entrez votre cin :")
    for(let i = 0 ; i < candidats.length ; i++){
        for(let j = 0 ; j < candidats[i].electeures.length ; j++){

            if(candidats[i].electeures[j] === cinelecteur){
                    console.log("vous avez deja vote !")
                return
            }
        }
    }

    let cincandidat = prompt("entrez la cin de candidat : ")
    
    for(let i = 0 ; i < candidats.length ; i++){
     if(candidats[i].cin === cincandidat){
        candidats[i].electeures.push(cinelecteur)
        
        console.log("vote engister avec succes ! ")
        return

     }

    }
    console.log("candidat introuvable ! ")
}
  
function modifierCandidat(){

    afficherListeCandidats()

    let cin = prompt("donner la cin du candidat : ")

    for(let i = 0; i < candidats.length; i++){

        if(candidats[i].cin === cin){


            console.log("1- modifier le parti politique.")
            console.log("2- modifier l'age.")

            let choix = Number(prompt("votre choix :"))

            if(choix === 1){

                let nouveauparti = prompt("nouveau politique : ")

                candidats[i].partipolitique = nouveauparti

                console.log("parti politique modifie.")

            }else if(choix === 2){

                let nouvelage = Number(prompt("nouvel age : "))

                candidats[i].age = nouvelage

                console.log("age modifie.")

            }else {

                console.log("choix incorrect.")
            }

            return 
        }
    }

    
    console.log("candidat introuvable.")
}

  

function supprimerCandidat(){
    
    let cin = prompt("donner la cin du candidat a supprimer : ")
    

    for(let i = 0 ; i < candidats.length ; i++){

        if (candidats[i].cin === cin){
            candidats.splice(i, 1)
            console.log("candidat suprime avec succes.")

            return

        }
    }
     
    console.log("candidat introuvable.")
}


function rechercherCandidat(){

    let nomRecherche = prompt("donner le nom du candidat :")

    for(let i = 0 ; i < candidats.length ; i++){

        if(candidats[i].nom === nomRecherche){
            console.log("===============================")
            console.log("cin : " + candidats[i].cin)
            console.log("nom : " + candidats[i].nom)
            console.log("prenom : " + candidats[i].prenom)
            console.log("parti : " + candidats[i].partipolitique)
            console.log("age : " + candidats[i].age)
            console.log("Nombre de votes : " + candidats[i].electeures.length)
            
            return 

        }
    }

    console.log("aucun candidat trouve.")
}



function afficherStatistiques(){

    
    console.log("Nombre total de candidats : " + candidats.length)

    
    let totalVotes = 0

    for(let i = 0 ; i < candidats.length ; i++){
        totalVotes = totalVotes + candidats[i].electeures.length
    }

    console.log("Nombre total de votes : " + totalVotes)


    
    for (let i = 0; i < candidats.length - 1; i++) {
        for (let j = 0; j < candidats.length - 1 - i; j++) {

            if (candidats[j].electeures.length < candidats[j + 1].electeures.length) {
                let temp = candidats[j]
                candidats[j] = candidats[j + 1]
                candidats[j + 1] = temp
            }

        }
    }

    console.log("===================================")
    console.log("TOP 3 DES CANDIDATS")

    let nombre = 3 

    if ( nombre > candidats.length ) {
        nombre = candidats.length
    }


    for(let i = 0 ; i < nombre ; i++){

        console.log("===============================")
        console.log("cin : " + candidats[i].cin)
        console.log("nom : " + candidats[i].nom)
        console.log("prenom : " + candidats[i].prenom)
        console.log("parti : " + candidats[i].partipolitique)
        console.log("age : " + candidats[i].age)
        console.log("Nombre de votes : " + candidats[i].electeures.length)

    }

}


    

console.log(`
========================================
 GESTION DES ÉLECTIONS - MENU PRINCIPAL
========================================
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
9. Quitter
`)


let choix
do {

    choix = prompt('Votre choix : ')

    switch (choix) {
    
        case '1':
            ajouterCandidat()
            break
        case '2':
            ajouterPlusieursCandidats()
            break
        case '3':
            afficherListeCandidats()
            break
        case '4':
            voterPourCandidat()
            break
        case '5':
            modifierCandidat()
            break
        case '6':
            supprimerCandidat()
            break
        case '7':
            rechercherCandidat()
            break
        case '8':
            afficherStatistiques()
            break
        case '9':
            console.log('Au revoir !')
            break
           
        default:
            console.log('Choix invalide, réessayez.')
    }
 
} while (choix !== '9')





































