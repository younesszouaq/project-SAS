const prompt = require('prompt-sync')();

let candidats = [];

function ajouterCandidat() {
    let cin = prompt("entrez un cin")
    let nom = prompt("entrez un nom")
    let prenom = prompt("entre un prenom")
    let partipolitique = prompt("entre un partipolitique")
    let age =Number(prompt("entre un age"))


    let condida = {
        cin : cin,
        nom : nom,
        prenom : prenom,
        partipolitique : partipolitique,
        age : age, 
        electeure : []

    }




} 

console.log(`
=======================================
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










