// Select the first <h1> element in the document and assign it to the 'heading' variable.
const heading = document.querySelector("h1");
// const input = document.querySelector("input");
const input = document.querySelector("#new_item");

// Log the 'heading' variable to the console.
console.log(heading);

// Log the inner HTML content of the first <h1> element in the document to the console.
console.log(document.getElementsByTagName("h1")[0].innerHTML);

// Create a new <ul> element and assign it to the 'list' variable.
const list = document.createElement("ul");

// Append the newly created <ul> element to the end of the document body.
document.body.appendChild(list);

// Append the 'list' element as a child of the 'heading' element.
heading.append(list);

// Insert the 'list' element after the 'heading' element in the document structure.
heading.after(list);

// Insert the 'list' element immediately after the 'heading' element in the document structure using the 'insertAdjacentElement' method with the 'afterend' position.
heading.insertAdjacentElement("afterend", list);

const groceries = ["milk", "eggs", "sugar", "chocolate"];
input.addEventListener("input", addItemToGroceries);
populateItems();



// groceries.shift("milk");
// groceries.splice(groceries.indexOf("milk"), 1);
// groceries.splice(0, 1);

// Loop through the 'groceries' array and create a new <li> element for each item in the array.

groceries.forEach(function(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
});

// This is another was of the loop that does the same thing as the one above
/* for(const item of groceries){
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
} */

/* list.firstElementChild.remove();
groceries.shift(); */


//function to create the grocery list
function createGroceryList(){
    const list = document.createElement("ul");
    heading.insertAdjacentElement("afterend", list);
    return list;
}

function deleteOldGroceryLists(){
    const ulTags = document.querySelectorAll("ul");
    for (const ul of ulTags){
        ul.remove();
    }
}

function populateItems(){
    const list = createGroceryList(); 

    for(const item of groceries){
        let listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    }
}

//create a new function to add a new element to the list
function addItemToGroceries(item){
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}

//delete the item from the list

function deleteItemFromGroceries(){
    groceries.shift();
    populateItems();

}





