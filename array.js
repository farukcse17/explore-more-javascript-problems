const country = 'Bangladesh';
const age = 21;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}

// Output
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// 
console.log(typeof friends); // it's not a valid way to check array element type
console.log(Array.isArray(friends));
console.log(typeof add);

// ------------------------------
console.log(friends.includes(17));
console.log(friends.includes(100));
console.log(friends.indexOf(13));

if(friends.indexOf(252) !== -1){

}

// concat 
const newFriends = [1, 3, 5, 8, 10];
const allFriends = friends.concat(newFriends);
console.log(allFriends);