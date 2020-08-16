var submitCounter = 0;

function submitHere() {
    let a = document.querySelector("#inputid1").Value;

    const b = document.querySelector("#inputid1")

        .querySelector("#referenceid")
        .cloneNode(true);
    b.removeAttribute("id");
    b.style.visibility = "visible";
    b.children[0].innerHTML = username;

    const submitbox = document.querySelector("#submitbox")


    submitbox.insertBefore(b, submitbox.firstChild);

    document.querySelector("#inputid1").value = "";

}

function submitHere(){
    submitCounter++;

    let btnElement=document.querySelector("#btnid")
    btnElement.innerHTML="submit" + submitCounter;
}

function cancel(btnElement) {
    btnElement.parentElement.remove()
}