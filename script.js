const element = document.getElementById("level");
let level = 0;

for (let current = element; current; current = current.parentElement) {
  level++;
}

console.log(`The level of the element is: ${level}`);