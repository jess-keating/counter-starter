let shoppingListItems = ["milk", "eggs", "bread"];

//Commented out the initial code since we now have the updateItems function.
// // We get the reference to the list element in the HTML
// const listElement = document.getElementById("shopping-list-items");

// for (const shoppingItem of shoppingListItems) {
//     console.log(shoppingItem);
//     // We create a list element for each shopping item
//     const itemElement = document.createElement("li")

//     // Add the inner test to the list element
//     itemElement.innerText = shoppingItem;

//     // We append the list element to the list, add the list element to the ul
//     listElement.appendChild(itemElement);
// }

const addItem = () => {
    // Get the value of the input field separate to the item variable
    let input = document.getElementById("new-item-text");
    let item = input.value;
    shoppingListItems = [...shoppingListItems, item];
    input.value = "";
    updateItems();
};
    // let item = document.getElementById("new-item-text").value;
    // shoppingListItems = [...shoppingListItems, item];
    // updateItems();
    // // Clear the input field after adding the item
    // //document.getElementById("new-item-text").value = ""; //not good practice to call the same element multiple times in a function
//};

const updateItems = () => {
//First we get the list element
let listElement = document.getElementById("shopping-list-items");
//Then we clear it of any existing items
listElement.innerHTML = "";
//Then we loop through the shopping list items and add them to the list
for (const shoppingItem of shoppingListItems) {
    let itemElement = document.createElement("li");
    itemElement.innerText = shoppingItem;
    listElement.appendChild(itemElement);
    }
};

// Call updateItems to display the initial shopping list items
updateItems();

// Function to clear the shopping list
const clearList = () => {
    shoppingListItems = [];
    updateItems();
}
