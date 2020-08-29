// While - Loop
let colors = ['yellow', 'blue', 'green', 'red'];

while (colors < 5) {
    colors++;
};

console.log(colors);


// For - Loop

for (i = 4; i <= colors.length; i++) {
    console.log(colors);    
};


// forEach - array method

colors.forEach(element => console.log(element));


// Convert for loop to forEach

const colorItems = [];

colors.forEach(function (item) {
    colorItems.push(item);
    console.log(item);
});


// Beantwoorden van de vragen.

/*Hoeveel regels neemt mijn for loop en mijn while loop in beslag ?*/
    // Totaal 10 regels voor de oude manier.

/*Hoeveel regels neemt mijn forEach method in beslag ?*/
    // Totaal 5 regels voor beide loops, nieuwe manier!

/*Welke voordelen heeft het gebruiken van een array method nog meer t.o.v.een for of een while loop ?
Welke methode vind je bijvoorbeeld makkelijker leesbaar ? Waarom ?*/
    // 1 regel code heeft hetzelfde resultaat als 5 regels code,
    // dus de nieuwe manier zal mijn standaard worden :D Het is minder type, leesbaar, gestructureerd.

/*Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties.
Probeer eens uit te zoeken(gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop:
Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor.
Ben je nu aan het itereren ?*/
    // Ja.

    // Oude manier - loop door objects
const colorz = {
    red: 1,
    green: 2,
    blue: 3
}

for (var property in colorz) {
    if (colorz.hasOwnProperty(property)) {
        console.log(property)
    };
}; // red green blue.

    // 3 nieuwe manieren: Object.keys, Object.values en Object.entries.
    // Hierna kan je er door loopen als een normale array.

    // Object.keys:
const keys = Object.keys(colorz)
    console.log(keys); // ['red', 'green', 'blue']
    
    // Object.values:
const values = Object.values(colorz)
    console.log(values); // [1, 2, 3]

    // Object.entries:
const entries = Object.entries(colorz)
console.log(entries); // [['red', 1], ['green', 2], ['blue', 3]]


// -------------------------------------------------------------------

// 1. Mijn for loop is 3 regels, mijn while loop is 5 regels
// 2. ForEach method is (met een arrow function), 1 regel.
// 3. Een array method heeft een aantal voordelen:
// --> je kunt niet meer verstrikt raken in een infinite loop.
// --> je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// --> je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
// --> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

// const myColors = {
//     colorWall: "blue",
//     colorFruit: "orange",
//     colorCar: "red",
//     colorHair: "white",
//     colorGras: "green",
//   };
  
//   for (x in myColors) {
//     console.log(myColors[x]);
//   }
  
  // Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
  // Array Methods zijn NIET beschikbaar op een object.