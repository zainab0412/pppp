document.getElementById("registration Form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phone number").value;

    if (name === "" || email === "" || Number === "") {
        alert("Please fill in all fields.");
    } 
});
