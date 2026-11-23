const email = document.getElementById("email").value;

if (!/[a-z1-9]+@[a-z1-9]+\.[a-z1-9]{2,}/.test(email)) {
    alert("Invalid email: change it in index.html");
}