function init() {
    let runButton = document.getElementById("submit");
    let tooltip = document.getElementsByClassName("tooltiptext");
    runButton.addEventListener('mouseover', (event) => {
        let pswd = document.forms["myForm"]["password"].value.length;
        console.log(pswd);
        if (pswd < 8) {
            moveBtn(runButton);
            tooltip[0].style.visibility = "visible";
        } else {
            runButton.style.left = null;
            runButton.style.color = null;
            tooltip[0].style.visibility = null;
        }


    })
};

function moveBtn(btn) {
    if (btn.style.left == "300px") {
        btn.style.left = "-50px";
    } else {
        btn.style.left = "300px";
    }
    btn.style.color = "red";
};

window.onload = init;