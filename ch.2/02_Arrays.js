const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Aquaman", "Flash"];

marvelHeroes.push(...dcHeroes); // Adds the elements of dcHeros array to marvelHeros array.
console.log(marvelHeroes); // Output => ['Thor', 'Ironman', 'Spiderman', 'Superman', 'Aquaman', 'Flash']

console.log(marvelHeroes[1]); // Output => Ironman

const allHeroes = marvelHeroes.concat(dcHeroes); // Concatenates marvelHeroes and dcHeroes arrays.
console.log(allHeroes);

console.log(allHeroes.flat(Infinity)); // Flattens nested arrays recursively.
// Output => ['Thor', 'Ironman', 'Spiderman', 'Superman', 'Aquaman', 'Flash', 'Superman', 'Aquaman', 'Flash']

console.log(Array.from("Mashood Ali")); // Creates a new array from a string.
// Output => ['M', 'a', 's', 'h', 'o', 'o', 'd', ' ', 'A', 'l', 'i']

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Creates a new array from the given arguments.
// Output => [100, 200, 300] - converts all variables into a single array.
