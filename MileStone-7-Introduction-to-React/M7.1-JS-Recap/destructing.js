// array destructing
const friends = ["rahim", "karim", "bablu"];
[f1, f2, f3] = friends; // f1, f2, f3 contain the friends array elements in order , we can use as variable ;
console.log(f1, f2, f3);

// object destructing ;

const people = {
  name: "jahid",
  age: 22,
  location: "bangladesh",
  friend: friends,
};

const { name, age, location, friend } = people;
// here we can use name, age, location and friend like variable ;
// the thing is, you need to destruct the object with this property name;
