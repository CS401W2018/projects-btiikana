/* Get Form Values using their IDs */
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const agree = document.getElementById("agree").value;

/* Alerts when Values are empty or wrong */
    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }

    if (!email) {
        alert("Your email is required.");
        return;
    }

    if (!agree) {
        alert("Please agree if you're 18 and above.")
    }

/* Consolidate Values */
    const data = {
        first: first,
        last: last,
        email: email,
        agree: agree
    }

/* Submit with Ajax */
const xhr = new XMLHttpRequest();
xhr.open("GET", "submit.json", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("message").innerHTML = response.message;
        document.getElementById("signup-form").innerHTML = "";
    } else if (xhr.readyState === 4) {
        alert('Error submitting form.');
    }
};
xhr.send(JSON.stringify(data));

/* Log Values to Console */
    console.log(data);
});