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

function afficherListeCandidats(){
   
    for (let i = 0; i < candidats.length; i++) {
        console.log(candidats[i]);
}

}

function voterPourCandidat() {
   let cinElecteur = prompt("entre un cin : ");
   for(let i = 0; i < candidats.length; i++) {
    
    if (candidats[i].electeures.includes(cinElecteur)){
        console.log("Vous avez déjà voté !");
    return;
}
}
   let cinCandidat = prompt("entre la CIN du candidat : ");

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








