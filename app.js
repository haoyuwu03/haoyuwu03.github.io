const form = document.getElementById("code");
form.addEventListener("submit", function(event){
    answer = form.elements['answer']
    if (answer == "hello") {
        const msg = form.elements['small'];
        msg.innerText = "correct";
    }
});
