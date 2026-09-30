const element = document.getElementById("level");
let level = 0;

for (let current = element; current; current = current.parentElement) {
  level++;
}

alert(`The level of the element is: ${level}`);