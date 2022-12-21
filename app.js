const form = document.getElementById("code")
answer = form.elements['answer']
if (answer == "hello") {
    const msg = form.elements['small'];
	msg.innerText = "correct";
}