// 1. The user is prompted for froyo flavors upon entering the website "vanilla, strawberry, coffee, etc.."
const customerOrder = prompt("Enter flavors separated by commas:");

// 2. The user's input string is split into an array of strings
const flavors = customerOrder.split(',');

//3. A loop is used to iterate through the array of flavors.
const flavorCounts = {};

for (const flavor of flavors) {
  const trimmedFlavor = flavor.trim(); // Removes leading/trailing spaces
  flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
}

//4. An object is used to keep count of how many orders there are of each flavor.
for (const flavor in flavorCounts) {
  console.log(`${flavor}: ${flavorCounts[flavor]} orders`);
}
