let addButton = document.querySelector("#addButton")
addButton.addEventListener("click", addItem);


let addedItem = document.querySelector("#item")

let list= document.querySelector("#list");


// test for the hadler---------------------------
// addButton.addEventListener("click",function(){
//     console.log("you just clicked me");
// })

 
//  let addItem = () => {console.log(addedItem.value)}


addedItem.addEventListener("keyup", (k) =>{
    
    
    console.log(k.code)
    if (k.code === "Enter"){addItem();}
})

 function addItem(){
     console.log(addedItem.value)
     let newItem = addedItem.value
     if (newItem.length > 0){
            let item = document.createElement("li")
            item.textContent = newItem;
            let itemButton = document.createElement("button");
            itemButton.textContent = "Delete";
            itemButton.addEventListener("click",deleteItem)
            item.appendChild(itemButton);
            list.appendChild(item);
            addedItem.value= " ";

     
 }
 }


 function  deleteItem(){
     this.parentNode.remove()
 }