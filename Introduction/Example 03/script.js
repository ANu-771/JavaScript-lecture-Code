function changeName() {
    document.getElementById("studentName").innerHTML ="Morrigan";
}

function changeStatus() {
    document.getElementById("studentStatus").innerHTML = "Status: completed semester 1";
}

function showDate() {
    let today = new Date().toDateString();
    document.getElementById("todayDate").innerHTML = "Date: " + today;
}

function changeTheme() {
    document.body.style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)";
        
}


console.log("student card demo sucessfully..!");
