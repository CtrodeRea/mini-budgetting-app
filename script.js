   
 var itemArr =[];
 var editedIndex = 0;

function addItem (){
    var nameOfFood = itemName.value;
    var foodQty = itemQty.value; 
    var foodAmount = itemCost.value;
    // var style1 =  document.getElementById("show");
    // style1.style.display = "none";

  console.log(nameOfFood, foodAmount, foodQty);

if (nameOfFood !== "" && foodQty !== "" && foodAmount !== ""){
var addItemObj = {
    foodName : itemName.value, 
    qty : itemQty.value,
    cost : itemCost.value 
}
itemArr.push(addItemObj);
console.log(itemArr)

}
  displayItemArr();
}

function displayItemArr(){
    
    itemTable.innerHTML = `<tr>
    <th>S/N</th>
    <th>Item Name</th>
    <th>Item Quantity</th>
    <th>Item Cost</th>
    <th> Total Cost</th>
    <th>Edit Info</th>
  </tr>
`;let sum = 0;
    
    for (var i=0; i<itemArr.length; i++){
        var total = Number(`${parseInt(itemArr[i].qty) * parseInt(itemArr[i].cost)}`);
        itemTable.innerHTML +=`

        <tr>
        <td>${i + 1}</td>
            <td> ${itemArr[i].foodName}</td>
            <td>${itemArr[i].qty} </td>
            <td>${itemArr[i].cost} </td>
            <td> #${total}</td>
            <td><button onclick="editItem(${i})" type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop" ><i class="fa-regular fa-pen-to-square"></i> </button>
                <button class="btn btn-danger" onclick="deleteItem(${i})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
            `
            sum += total
                totalCost.innerHTML = `<h1>Total Item Cost: #${sum}</h1>`;            
        }
}
function editItem(index){
    editedIndex = index;
     editName.value = itemArr[index].foodName
       editQty.value = itemArr[index].qty
         editCost.value = itemArr[index].cost

}
function deleteItem(index) {
    itemArr.splice(index, 1)
    displayItemArr();

}
function update(){
    var updateObj ={
        foodName : editName.value,
        qty : editQty.value,
        cost : editCost.value
    }
itemArr.splice(editedIndex, 1, updateObj);
displayItemArr();
}