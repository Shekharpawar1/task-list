const form = document.querySelector("#form");
const textInput = document.querySelector("#txt");
const submitBtn = document.querySelector("#btn");
const ul = document.querySelector("#list");
const clearBtn = document.querySelector("#btn2");
const filter = document.querySelector("#filter-task")


form.addEventListener("submit", function (e) {
    //create an element
    const li = document.createElement("li");
    //adding classname to link
    li.className = "list-item";
    //creating the text node in link
    li.appendChild(document.createTextNode(textInput.value));

    const link = document.createElement("a")
    link.className = "delete-item secondary-item";

    link.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(link);
    ul.appendChild(li);
    //this reset the value of the input field to none ;

    textInput.value = " "

    e.preventDefault();
    link.addEventListener("click", function (e) {
        if (e.target.parentElement.classList.contains("delete-item")) {
            e.target.parentElement.parentElement.remove();
        }
    });
    


   


});
clearBtn.addEventListener("click", function () {
    const ul = document.querySelector("#list");
    ul.textContent = " "
});






    
    



// l