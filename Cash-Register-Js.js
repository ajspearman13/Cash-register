if (typeof window === 'object') {
    // Check if document is finally loaded
       document.addEventListener("DOMContentLoaded", function () {
           
       });
const bananas = { name: "bananas", price : 35,  amount : 18}
const apples = { name: "apples", price : 95, amount : 8}   
const grapes = {name: "grapes", price : 15,  amount : 118}  
const peaches = { name: "peaches", price : 75,  amount : 27}                   
    const fruits = [bananas, apples, grapes, peaches]
           
const beef = { name: "beef", price : 115,  amount : 18}
const chicken = { name: "chicken",  price : 95, amount : 8}   
const pork = { name: "pork", price : 15, amount : 118}  
const goat = { name: "goat", price : 75, amount : 27}
    const meats = [beef,chicken, pork, goat]
           
const shirts = {name: "shirts", price : 35,  amount : 18}
const shoes = {name: "shoes", price : 400, amount : 8}   
const pants = {name: "pants", price : 15, amount : 118}  
const hats = {name: "hats", price : 75, amount : 27}  
     const clothes = [shirts, shoes, pants, hats]
    const items = [shirts, shoes, pants, hats, goat, pork, chicken, beef, peaches, grapes, apples, bananas]
     
const itemInput = document.getElementById("itemInput")

const numberOfItems =  document.getElementById("numberOfItems")    


const hr = document.createElement("hr")
const ol = document.getElementById("ol")
 
const totalPrice = document.getElementById("totalPrice")

const nameArr = items.map(x => x.name)
const arr = []
const removeArr = []
const removeSum =removeArr.reduce((accumulator, eachNumInArr) => accumulator + eachNumInArr, 0)

    function AddToCart(){       
     if (nameArr.includes(itemInput.value)) {
      const li = document.createElement("li") 
    
      //const liPlusButton = li.appendChild(removeItemButton)  
      const num =((numberOfItems.value * eval(itemInput.value).price))
      
      const numNode = document.createTextNode(num +".00")
     
    
      arr.push(num)
      const sum = arr.reduce((accumulator, eachNumInArr) => accumulator + eachNumInArr, 0)
      const textnode4 = document.createTextNode(sum + removeArr.reduce((accumulator, eachNumInArr) => accumulator + eachNumInArr, 0) +".00")
    

      eval(itemInput.value).amount = eval(itemInput.value).amount - numberOfItems.value
        
      if (eval(itemInput.value).amount < 0) { alert("Not enough  " + eval(itemInput.value).name + " available")
         }
        else {
            
                  li.id= arr.length *10 
                 li.innerHTML = `${numberOfItems.value} ${itemInput.value}  ${num}.00 <button class="button"  id=${arr.length} type="button">X</button>`

                 ol.appendChild(li)
             
                 itemInput.value=""; 
                 numberOfItems.value="";
                  
                 (sum == num) ? totalPrice.appendChild(numNode) : totalPrice.replaceChild(textnode4,  totalPrice.childNodes[0])
                 console.log(arr)
                 console.log(removeArr)
                 console.log( removeSum)
        }  

     }   
     else { alert("NOPE  ") 
     }

     const buttonP = document.getElementsByClassName("button")[arr.length-1]   
     buttonP.addEventListener("click", removeItemButton )
        function removeItemButton (){
               
            const LiId = document.getElementById(buttonP.id * 10)
            LiId.remove()                                ///find why the remove array changes
        
             const removePriceNum = (arr[buttonP.id-1]) * -1
             removeArr.push(removePriceNum)
            const removeSum =removeArr.reduce((accumulator, eachNumInArr) => accumulator + eachNumInArr, 0)
            const sum = arr.reduce((accumulator, eachNumInArr) => accumulator + eachNumInArr, 0)
            const removeTextNode = document.createTextNode((removeSum + sum) +".00")
            totalPrice.replaceChild(removeTextNode,  totalPrice.childNodes[0])
        
            console.log(arr)
            console.log(sum)
            console.log( removeArr)
         
    }
    
        


    } 
    

             
                
     
        
    



}