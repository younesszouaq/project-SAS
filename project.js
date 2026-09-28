const prompt = require('prompt-sync')();

let candidats = [];

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
candidats.push(condidats);
console.log("Candidat ajouté avec succès !");

} 
 

function ajouterPlusieursCandidats(){
    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));
    for (let i = 0; i < nombre; i++) {
        console.log(`Candidat ${i + 1}`);
        ajouterCandidat();
    }
}

function afficherListeCandidats() {
    
    for(let i = 0 ; i < candidats.length ; i++){
     console.log("===================================");
     console.log(`cin : ${candidats[i].cin}`)
     console.log(`nom : ${candidats[i].nom}`)
     console.log(`prenom : ${candidats[i].prenom}`)
     console.log(`age : ${candidats[i].age}`)
     console.log(`partipolitique : ${candidats[i].partipolitique}`)
     console.log("===================================");
    }

}
   
function voterPourCandidat(){
    
    let cinelecteur = prompt("entrez votre cin :")
    for(let i = 0 ; i < candidats.length ; i++){
    for(let j = 0 ; j < candidats[i].electeures.length ; j++){

    if(candidats[i].electeures[j] === cinelecteur){
            console.log("vous avez deja vote !")
          
          return;  
    }
    }
    }

    let cincandidat = prompt("entrez la cin de candidat : ");
    
    for(let i = 0 ; i < candidats.length ; i++){
     if(candidats[i].cin === cincandidat){
        candidats[i].electeures.push(cinelecteur);
        
        console.log("vote engister avec succes ! ")
        return;

     }

    }
    console.log("candidat introuvable ! ")
}
  
function modifierCandidat(){
    afficherListeCandidats()

    let cin = prompt("donner la cin du candidat : ")
    let trouve = false; 
    for(let i = 0 ; i < candidats.length ; i++){
       
        if(candidats[i].cin === cin){
            trouve = true

            console.log("1- modifier le parti politique.  ")
            console.log("2- modifier l'age.  ")

            let choix = Number(prompt("voter choix :"));
            if(choix === 1){

                let nouveauparti = prompt("nouveau politique : ")
                candidats[i].partipolitique = nouveauparti;
                console.log("parti politique modifie : ")


            }else if (choix === 2){
                let nouvelage = Number(prompt("nouvel age : "))

                candidats[i].age = nouvelage;
                console.log("age modifie.")

            }else {
                console.log("choix incorrect. ")
                break;
            }
        
        }

        if(trouve === false){
        console.log("candidat introuvale.")
        }
    }
}
  

function supprimerCandidat(){
    
    let cin = prompt("donner la cin du candidat a supprimer : ")
    let trouve = false;
    for(let i = 0 ; i < candidats.length ; i++){

        if (candidats[i].cin === cin){
            candidats.splice(i, 1);
            console.log("candidat suprime avec succes.")

            trouve = true;
            break;
        }
    }
     
    if (trouve === false){
        console.log("candidat introuvable.")
    }

}


function rechercherCandidat(){

    let nomRecherche = prompt("donner le nom du candidat :")
    let trouve = false;

    for(let i = 0 ; i < candidats.length ; i++){

        if(candidats[i].nom === nomRecherche){
            console.log("===============================");
            console.log("cin : " + candidats[i].cin);
            console.log("nom : " + candidats[i].nom);
            console.log("prenom : " + candidats[i].prenom);
            console.log("parti : " + candidats[i].partipolitique);
            console.log("age : " + candidats[i].age);
            console.log("Nombre de votes : " + candidats[i].electeures.length);

            trouve = true;
        }
    }

    if(trouve === false){
        console.log("aucun candidat trouve.")
    }
}



function statistiques(){

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
`);


let choix;
do {

    choix = prompt('Votre choix : ');

    switch (choix) {
    
        case '1':
            ajouterCandidat();
            break;
        case '2':
            ajouterPlusieursCandidats();
            break;
        case '3':
            afficherListeCandidats();
            break;
        case '4':
            voterPourCandidat();
            break;
        case '5':
            modifierCandidat();
            break;
        case '6':
            supprimerCandidat();
            break;
        case '7':
            rechercherCandidat();
            break;
        case '8':
            afficherStatistiques();
            break;
        case '9':
            console.log('Au revoir !');
            break;
           
        default:
            console.log('Choix invalide, réessayez.');
    }
 
} while (choix !== '9');








