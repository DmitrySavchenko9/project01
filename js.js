//var allFriends = ["Bob", "Rick", "John"];

//function greetFriends(friends) {
// for (var i = 0; i < friends.length; i++) {
//   console.log("Hello", friends);
// }
//}

//function greet(friend) {
//  console.log("Hello", +friend);
//}
//greetFriends(allFriends, greet);

//Make Yjur Own Callback Function 1
function genericPoemMaker(name, gender) {
  console.log(name + "is finer then fine wine.");
  console.log("Altruistic is finer then fine wine.");
  console.log("Always is finer then fine wine.");
  console.log("A " + gender + "of unfotunate tragedies who still manages a perpetual smile.");
}
//Write the function that joins first and last names and calls callback function
function getUserInput(firstName, lastName, gender, callback) {
  var name = firstName + lastName;
  callback(name, gender);
}
getUserInput("Bob ", "John ", "man ", genericPoemMaker);