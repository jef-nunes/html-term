const term = document
.getElementById("term")

const term_input = document
.getElementById("term-in");

const term_output = document
.getElementById("term-out");

const bt_test = document
.getElementById("bt-test")

function test_input()
{
    const user_input = term_input.value;
    const new_span = document.createElement('span');
    new_span.textContent = user_input;
    term_output.appendChild(new_span);
}

bt_test.addEventListener("click", ()=>{
    test_input();
})
