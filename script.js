let btn = document.querySelector(".btn");
let istatus = document.querySelector("h4");
var check = 0;

btn.addEventListener("click", () => {
    var confirmation = prompt("Are you sure you want to remove the friend? Type 'yes' to confirm.");

    if (confirmation && confirmation.toLowerCase() === 'yes') {
        if (check == 0) {
            btn.innerHTML = "Remove friend";
            btn.style.backgroundColor = "lightgrey";
            btn.style.color = "black";
            istatus.innerHTML = "Friends";
            istatus.style.color = "green";
            check = 1;
            alert("You are friends");
        } else {
            istatus.innerHTML = "Stranger";
            istatus.style.color = "red";
            btn.style.backgroundColor = "cadetblue";
            btn.innerHTML = "Add friend";
            btn.style.color = "#fff";
            check = 0;
             setTimeout(() =>{
                alert("Friend is removed");
             }, 200);
        }
    } else {
        alert("Action canceled. Friend not removed.");
    }
});
