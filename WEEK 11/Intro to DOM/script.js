//Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//The DOM is not part of the JavaScript language, but it is a convention for how to interact with HTML and XML documents. It is implemented by web browsers, and it allows JavaScript to manipulate the content and structure of web pages.

//selecting elements

function changecolor() {
    let element = document.getElementById("btn");
    element.style.backgroundColor = "blue";

    const elements = document.getElementsByTagName("p")[2];
    elements.style.color = "red";
}

//get element by class name
function changeText() {
    const age = document.getElementsByClassName("myClass")[0];
    const name = age.value;
    alert(`${name}`)
}

//Manupulating elements in DOM
// manupulating elements
function changeTittle() {
    document.getElementById("title").textContent = "welcome"; //change text only

}

//manupulating html
function changeTittle() {
    document.getElementById("title").innerHTML = "<i>Welcome</i>" //change html
}

//manupulating text

// manupulating attributes
function changeimage() {
    document.getElementById("img").src = "assets/portrait-gorgeous.jpg";
}

//manupulating styles
function changeTittle() {
    let el = document.getElementById("title");

    el.style.color = "red"; // change text colora
    el.style.fontSize = "45px"
}

// create elemets
function createlemets() {
    let p = document.createElement("p"); // create a new paragraph element
    p.textContent = "This is a new paragraph."; // set the text content of the paragraph
    p.id = "new-paragraph"; // set the id attribute of the paragraph
    document.body.appendChild(p); // add the paragraph to the end of the body
}

// remove elemets
function removeElement() {
    let element = document.getElementById("new-paragraph");
    if (element) {
        element.remove(); // remove the element from the DOM
    }
}

// jquery
function CreateelementsbyJq() {
    let p = $("<p>This is a new paragraph created by jQuery.</p>"); // create a new paragraph element using jQuery
    $("body").append(p); // add the paragraph to the end of the body using jQuery

    let title = $("#title2"); // select the element with id "title2" using jQuery
    title.css("color", "blue"); // change the text color to blue using jQuery
    title.text("Im change bro....."); // change the font size to 30px using jQuery
    title.html("<i>Im change bro.....</i>"); // change the html content using jQuery


}


$("#btn5").click(function () {
    alert("Button clicked!"); // show an alert when the button is clicked
});

// event listeners
document.getElementById("btn6").addEventListener("click", function () {
    alert("huuuuraeyyyyyyyyyyyy!"); // show an alert when the button is clicked

});

document.getElementById("btn6").addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow"; // change background color on mouseover    
});

document.addEventListener("keydown", function (e) {
    console.log(e.key); // log the key that was pressed
    alert(`You pressed the ${e.key} key!`); // show an alert with the key that was pressed
});

// form events
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submit

    let input = document.getElementById("name").value.trim();

    if (input === "") {
        alert("Please enter your name!");
    } else {
        alert("Form submitted!");
        // you can submit manually if needed:
        // this.submit();
    }
});

// input events
// document.getElementById("form").addEventListener("submit", function (e) {
//     let input = document.getElementById("name").value;
//     if (input === "") {
//         alert("Please enter your name!"); // show an alert if the input is empty
//     }
// });
