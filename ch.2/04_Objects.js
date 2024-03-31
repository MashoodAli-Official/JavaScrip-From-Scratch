// 🚨 OBJECTS IN JAVASCRIPT - PART 2 

// 👇 Singleton object
const facebookUser = {};
console.log(facebookUser); // output => {}

// 👇 Non-Singleton object
const facebookUser1 = {};
console.log(facebookUser1); // output => {}
// Both of the above object examples are working the same. The only difference is the declaration method, where the first one is a singleton object and the second one is a non-singleton object.

const facebookUser2 = {};
facebookUser2.id = "12345";
facebookUser2.name = "John";
facebookUser2.loggedIn = false;
console.log(facebookUser2); // output => { id: '12345', name: 'John', loggedIn: false }

// 👇 Nested type of object 
const regularUser = {
    email: "Email@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Mashood",
            lastName: "Ali"
        }
    }
}; 
console.log(regularUser.fullName); // output => { userFullName: { firstName: 'Mashood', lastName: 'Ali' } }
console.log(regularUser.fullName.userFullName.firstName); // output => Mashood
// In nested objects, we can access the object property by using dot notation step by step to access deeply nested properties.

// 👇 Merging the objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Both merging techniques using `Object.assign` above and using the spread operator below are the same.
const obj4 = { ...obj1, ...obj2 };
console.log(obj4); // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// 👇 Object methods 
const facebookUsers = { 
    name1: "Mashood Ali",
    name2: "John",
    name3: "Para"
};
console.log(Object.keys(facebookUsers)); // output => [ 'name1', 'name2', 'name3' ]
console.log(Object.values(facebookUsers)); // output => [ 'name1', 'name2', 'name3' ]
console.log(Object.entries(facebookUsers)); // output => [ [ 'name1', 'Mashood Ali' ], [ 'name2', 'John' ], [ 'name3', 'Para' ] ]