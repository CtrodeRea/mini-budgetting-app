
 let budgetList = [];


 function addBudgetItem() {
   const budgetItemInput = document.getElementById("budgetItemInput");
   const priceInput = document.getElementById("priceInput");

   const budgetItem = budgetItemInput.value.trim();
   const price = parseFloat(priceInput.value.trim());

  
   if (budgetItem === "" || isNaN(price) || price <= 0) {
     alert("Invalid budget item or price. Please enter valid values.");
     return;
   }

  
   const newItem = { budgetItem, price };

  
   budgetList.push(newItem);

  
   budgetItemInput.value = "";
   priceInput.value = "";

  
   displayBudgetList();
 }


 function displayBudgetList() {
   const budgetListElement = document.getElementById("budgetList");
   budgetListElement.innerHTML = "";

   budgetList.forEach((item, index) => {
     const listItem = document.createElement("li");
     listItem.innerHTML = `
       <span>${item.budgetItem} - #${item.price}</span>
       <button onclick="editBudgetItem(${index})">Edit</button>
       <button onclick="deleteBudgetItem(${index})">Delete</button>
     `;

     budgetListElement.appendChild(listItem);
   });
 }


 function editBudgetItem(index) {
   const budgetItem = prompt("Enter the updated budget item:");
   const price = parseFloat(prompt("Enter the updated price:"));

 
   if (isNaN(price) || price <= 0) {
     alert("Invalid price. Please enter a valid positive number.");
     return;
   }

  
   budgetList[index].budgetItem = budgetItem;
   budgetList[index].price = price;

 
   displayBudgetList();
 }

 
 function deleteBudgetItem(index) {
   budgetList.splice(index, 1);

 
   displayBudgetList();
 }