var myform = document.getElementById("myform")
var myinput = document.getElementById("item")
var mylist = document.getElementById("mylist")

myform.addEventListener("submit",
    function(event){
        event.preventDefault()
        createItem(myinput.value)
    }
)

function createItem(inputItems){
    var items= `<li>${inputItems}
    <button onclick="deleteElement(this)">Delete</button></li>`
    mylist.insertAdjacentHTML("beforeEnd",items)
    myinput.value=""
    myinput.focus()
}

function deleteElement(ElementToDelete){

    ElementToDelete.parentElement.remove()
    
    }