const hobbies = ["Gardening", "Football"]; // a pointer to the array is stored
const bestTeam = "Cambridge United"; // the value itself is stored

hobbies.push("Coding"); // the address of the array doesn't change

// hobbies = ["art", "french"];  NOT ALLOWED

console.log(hobbies);

// Primitive Values: numbers, strings, undefined, null
// Reference Values (Objects: Arrays, Objects, Functions)

const person = { age: 48 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  //   return p.age - 18; //overcome reference value issue
}

console.log(getAdultYears({ ...person })); //use spread to overcome reference value issue
console.log(person);
