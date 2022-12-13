//ESERCIZIO : Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
/* MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
Una volta che avete terminato una milestone, fare un push e nel messaggio indicare che avete terminato la milesione numero X. */

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

//1 - Creo l'array di oggetti con le informazioni fornite

let our_team =
[
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
];

//MILESTONE 1 Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe


//2 - Creo un ciclo for per accedere ai singoli aggetti dell'array.
//  2.1 - All'interno del ciclo for creo un altro ciclo for per accedere alle informazioni dell'oggetto.
//  2.2 - Visualizzo a schermo le informazioni di ogni oggetto ciclato.


let team = document.querySelector(".team");
for (let i=0; i<our_team.length; i++ ){
    for(let key in our_team[i]){
        team.innerHTML += (`<li>${our_team[i][key]}</li>`);
    }
}



