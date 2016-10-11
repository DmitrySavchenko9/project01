//function idGenerator(){
//var id = 1;
//return function(){
//return id++;
//}
//}
//var nextId = iGeneration();
//console.log(nextId);
//console.log(nextId);
//console.log(nextId);

//Вывести greeting + name
function createGreeting(greeting){
  return fuction(name){
  console.log("${greeting}, ${name}");
  }
}
var sayHi = createGreeting("Hi");
sayHi("Bob");
var sayHello = createGreeting("Hello");
sayHello("Anna");