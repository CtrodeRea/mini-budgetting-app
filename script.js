   
 var foodArr =[];
 var editedIndex = 0;

function addFood (){
    // var nameOfFood = document.getElementById("foodName");
    var nameOfFood = foodName.value;
    var foodQty1 = document.getElementById("foodQty").value;
    // var foodAmount = document.getElementById("foodPrice"); 
    var foodAmount = foodPrice.value;
    // var style1 =  document.getElementById("show");
    // style1.style.display = "none";

//   console.log(nameOfFood, foodAmount, foodQty);
if (nameOfFood !== "" && foodQty !== "" && foodAmount !== ""){
let addItemObj = {
    food1 : foodName.value, 
    qty1 : foodQty.value,
    price1 : foodPrice.value 
}
foodArr.push(addItemObj);
// console.log(foodArr)

}
  displayFoodArr();
}
 

function displayFoodArr(){
    show.innerHTML = "";
    let sum = 0;
    for (var i=0; i<foodArr.length; i++){
        var total = Number(`${parseInt(foodArr[i].qty1) * parseInt(foodArr[i].price1)}`);
        show.innerHTML +=`
        <tr>
        <td>${i + 1}</td>
            <td> ${foodArr[i].food1}</td>
            <td>${foodArr[i].qty1} </td>
            <td>${foodArr[i].price1} </td>
            <td> #${total}</td>
            <td><button onclick="editItem(${i})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                <button onclick="deleteItem(${i})">Delete</button>
                </td>
            </tr>
            `
            sum += total
                totalPrice.innerHTML = `Total Price: #${sum}`;            
        }
}
function editItem(index){
    editedIndex = index;
}
function deleteItem(index) {
    foodArr.splice(index, 1)
    displayFoodArr();

}
function update(){
    var updateObj ={
        food1 : editedName.value,
        qty1 : editedQty.value,
        price1 : editedPrice.value
    }
foodArr.splice(editedIndex, 1, updateObj);
displayFoodArr();
}