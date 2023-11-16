// 1. The user is prompted for froyo flavors upon entering the website "vanilla, strawberry, coffee, etc.."
const customerOrder = prompt("Please enter the flavors you want, separated by commas.")

// 2. The user's input string is split into an array of strings
const stringArray = customerOrder.split(",");

//3. A loop is used to iterate through the array of flavors.
const order = {}

function countFlavors(order) {
  for (let i = 0; i < stringArray.length; i++) {
    const index = stringArray[i]
    if (order[customerOrder[i]] === undefined) {
      order[customerOrder[i]] = 1
    } else {
      order[customerOrder[i]]
    }
  } return order;
}

//4. An object is used to keep count of how many orders there are of each flavor.

//5. The program correctly counts the number of each flavor in the user's input.
