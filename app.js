let userInput;


//add books functionality
document.getElementsByClassName("add-item__button")[0].onclick = () => {

    userInput = document.getElementsByClassName("add-item__input")[0].value;

    if (userInput) {
        document.getElementsByClassName("item-list-container")[0].innerHTML += addItemHTML(userInput);
    }

    document.getElementsByClassName("add-item__input")[0].value = "";
}

//helper functions:

//creates the HTML for each list item, contains the read mode item and the hidden edit mode item
function addItemHTML(input) {
    var html = `<div class="list-items">     
                    <div class="item_read">
                        <div class="item__title"><h2>${input}</h2></div>
                        <div class="item__buttons">
                            <button onclick="showEditMode(event)" class="item__edit-item">edit</button>
                            <button onclick="deleteItem(event)" class="item__delete-item">del</button>
                        </div>        
                    </div>
    
                    <div class="item_edit" style="display:none">
                        <input class="item__input" placeholder="${input}" />
                        <div class="item__buttons">
                            <button onclick="save(event)" class="item__save-item">save</button>
                            <button onclick="showReadMode(event)" class="item__-item">cancel</button>
                        </div>    
                    </div>
                </div>`
    //removes whitespace
    var htmlNoWhitespace = html.replace(/\n/g, "").replace(/[\t ]+\</g, "<").replace(/\>[\t ]+\</g, "><").replace(/\>[\t ]+$/g, ">")
    return htmlNoWhitespace;
}


function showEditMode(e) {
    e.target.parentNode.parentNode.style.display = "none";
    e.target.parentNode.parentNode.parentNode.childNodes[1].style.display = "block";
}
function showReadMode(e) {
    e.target.parentNode.parentNode.parentNode.childNodes[0].style.display = "block";
    e.target.parentNode.parentNode.style.display = "none";
}
function save(e) {
    console.log(e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0])
    title = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0];
    userEdit = e.target.parentNode.parentNode.childNodes[0].value; //grabs the value of the user input
    if (userEdit) {
        title.innerHTML = userEdit; //to change the value of the read node
        showReadMode(e);
    }
}
function deleteItem(e) {
    var parentContainer = e.target.parentNode.parentNode.parentNode;
    var deleteListItemDivs = parentContainer.childNodes[0];

    parentContainer.removeChild(deleteListItemDivs);
}
