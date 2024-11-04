// var k =[1,2,3,4,5]
// console.log(k)
// document.write(k)

// let school="vivekavardhini"
// console.log(school)

//  school="primary"
// console.log(school)

// const a="gopi"
// console.log(a)

// a="bopi"
// console.log(a)

// test=10<20
// document.write(test)

// let sample=null;
// console.log(sample)

// let kar
// console.log(kar)

// const world={
//  sunny:"actress",
//  bunny:"actor"
// }
// console.log(world)
// document.write(world)

// console.log(typeof world)

// var a = 50;
// var b = 70;

// document.write("result ", a + b, "<br>");
// document.write("result ", a - b, "<br>");
// document.write("result ", a * b, "<br>");
// document.write("result ", a / b, "<br>");
// document.write("result ", a++, "<br>");
// document.write("result ", b--, "<br>");

// var mve="pushpa"
// var kev="na-peru-surya-na-illu-india"
// let hero="arjun"


// if (mve=="puspa"){
//     document.write(hero," last film is ",mve)
// }
// else if(kev=="na-peru-surya-na-illu india"){
// document.write(hero," last film is ",kev)}
// else{
//     document.write("evvara  mer antha")
// }

// var x=50
// var y=60
// var z=70
// var a=80

// if (x>y){
//     document.write("blue color")
// }
// else if (y!=z){
//     document.write("red color")
// }
// else if (a>y){
//     document.write("orange color")
// }
// else if (a<y){
//     document.write("yellow color")
// }
// else{
//     document.write("error")
// }

// a=50
// b=60
// c=a>b? ("true ra vashi"):("lekkalu ravu  ra ")
// document.write(c)

// var j=alert("deyyalu  comming")
// var k=prompt("nakem bayam ledhu")
// var l=confirm("are you devote of anjaneya")


// var wineshop=confirm("are you 18+")
// let name=prompt("please enter your name")
// if (wineshop){
//     document.write("hello mr ",name," please buy")
// }else{
//     document.write("sorry mr ",name," your under age")
// }

// switch(true){
//     case 10>20:
//     document.write("red")
//     break;
//      case 20<10:
//         document.write("yellow")
//         break;
//     case 20==20:
//         document.write("black")
//         break;
// }

// var a=prompt("enter your director")
// var b=["agadu","aganthavasi","anandham"]
// var c=["like","dragon","sky"]

// if (a === "srinu"){
//     document.write("your director name "," srinu ", b ," his movies ")
// }else{
//     document.write("failed")
// }

// function add(a, b) {
//     return a + b;
// }
// document.write(add(5, 3));

// function muttu(a, b) {
//     return a - b;
// }
// document.write(muttu(5, 3));


// x=10
// y=20
// console.log("sum of ",x,"and","sum of",y,"is",x+y)

// var a =10;
// var b=20;

// a+=b
// document.write(a)
// // console.log(`sum of ${a} and sum of ${b}:${a+b}`)

// var name=prompt("enter your name")
// var marks =prompt("enter  your marks")
// var grade;

// if (marks<=90){
//     grade="A"
// }
// else if (marks<=80){
//     grade="B"
// }
// else if (marks<=70){
//     grade="c"
// }
// else if (marks<=50){
//     grade="d"
// }
// else if (marks<=30){
//     grade="e"
// }
// else if (marks<=30){
//     grade="fail"
// }else{
//      "sachipora"
// }

// alert("Welcome to Book My Show");
// alert("Are you above 18?");

// let teluguMovies = ["athadu", "okkadu", "pokiri"];
// let tamilMovies = ["96", "ps1", "ravan"];

// let selectedLanguage = prompt("Which movies would you like to see Type 'telugu' or 'tamil'.");

// let movieList = selectedLanguage.toLowerCase() === "telugu" ? teluguMovies : tamilMovies;
// alert("Available movies: " + movieList.join(", "));

// let selectedMovie = prompt("Enter the movie name you want to book");

// if (movieList.includes(selectedMovie.toLowerCase())) {
//     document.write("Your booking for '" + selectedMovie + "' is confirmed!");
// } else {
//     document.write("Sorry, the movie '" + selectedMovie + "' is not available.");
// }

// alert("well come to indian railways");
// alert ("this booking only for passengers");

// var name=("pelase enter your name");
// let north=["delhi","punjab","uttar-pradesh"];
// let south=["kerala","karnataka","telangana"];
// // let east=["assam","mizoram","nagaland"];
// // let west=("train is cancelled due to riots")

// let wheretogo = prompt("enter where you want to go ");

// let trains=wheretogo.toLowerCase()==="north"? north:south;
// alert("ticekts are availble:"+trains.join(","));

// let location=prompt("enter the exact location ")

// if (trains.includes(wheretogo.toLowerCase())){
//     document.write("your booking for",+location+"is confirmed");
// } else {
//     document.write("sorry the selected ",+location+"not avalible");
// }

// alert("Welcome to Indian Railways");
// alert("This booking is only for passengers");

// let name = prompt("Please enter your name");
// let north = ["delhi", "punjab", "uttar-pradesh"];
// let south = ["kerala", "karnataka", "telangana"];

// let wheretogo = prompt("Enter the region you want to go: 'north' or 'south'").toLowerCase();
// let trains = wheretogo === "north" ? north : south;

// alert("Tickets are available for the following locations: " + trains.join(", "));

// let place = prompt("Enter the exact location");

// if (trains.includes(place.toLowerCase())) {
//     document.write("Your booking for " + place + " is confirmed!");
// } else {
//     document.write("Sorry, the location '" + place + "' is not available.");
// }

// alert("Welcome to Ma Inti Bhojanam");
// alert("We cook veg and non-veg separately");

// let veg = ["veg biryani", "panner curry", "rotis"];
// let nonveg = ["spicy biryani", "tandoori", "kebab"];

// let eat = prompt("What type of food would you like to eat: 'veg' or 'nonveg'?").toLowerCase();

// let order = eat === "veg" ? veg : nonveg;
// alert("Your available food items are: " + order.join(", "));

// let items = prompt("Enter the item you want to order");

// if (order.includes(items.toLowerCase())) {
//     document.write("Your order for " + items + " is confirmed!");
// } else {
//     document.write("Sorry, the item '" + items + "' is not available.");
// }

// var sai=0;
// for(let kar=1;kar<=10;kar++){
//     sai=sai+kar
// }
// document.write(sai)

// let name = prompt("Enter your name");

// for (let i = 0; i < 10; i++) {
//     document.write(name + "<br>");
// }

// let chant=prompt("enter slogan")
// for (let i =0; i<10;i++){
//     document.write(chant+"<br>")
// }

// var sum=0;
// var n=+prompt("enter number")
// for (let counter=1;counter<=10;counter++){
//     sum = sum+counter
// }
// document.write(sum)

