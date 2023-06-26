/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//STRING è un testo scritto all interno delle virgolette 

let string = "stringavirgolette"

console.log(typeof string)

//BOOLEAN e' la parte Logica ci dice se il valoreche inseriamo all interno delle parentesi tonde è vero o falso

let boolean =(10>5)

console.log(typeof boolean)

//UNDEFINED non ha nessun significato perche ci indica che alla variabile non e' stato dato nessun valore

let squat = (undefined)

console.log(typeof squat)

//Null sta invece a significare che alla variabile non e' stato assegnato anocora nessun valore e quindi e' un valore vuoto

let deadlift = (null)

console.log(typeof deadlift)

//OGGETTI son un insieme di dati chiamati raccolte di coppie chiave-valore per esempio la chiave puo' essere un nome e il valore e' jhon , ci indica se i dati inseriti sono veri o falsi

let patente={
    nome:"hugo",
    cognome:"tina",
    age:15,
    Halapatente:false,
}

console.log(patente)


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//E' un insieme di dati che vengono inseriti all'interno di un contenitore ,questi dati sono degli elementi carattarizzati da un nome e da un valore.


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const somma=(12+20)

console.log(somma)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12

console.log(typeof x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nome="serena"

console.log(typeof nome)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const variabilex =12

console.log(typeof variabilex)

const somma2= (12-4)

console.log(somma2)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "jhon";
const name2 = "Jhon";                          //ps:qui volevo dichiarare che la loro uguaglianza sia falsa//

console.log('jhon === Jhon');


var tempText = "jhon Jhon ";                   //ps:qui volevo dichiarare che la loro uguaglianza diventi true//

console.log(tempText.toLowerCase());



