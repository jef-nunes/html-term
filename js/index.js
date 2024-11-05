const term = document
.getElementById("term")

const term_input = document
.getElementById("term-in");

const term_output = document
.getElementById("term-out");

const bt_test = document
.getElementById("bt-test")

const TEST_INPUT = 0
const USER_INPUT = 1

function gen_ouput(mode, test_input_text="", is_error=false, is_alert=false)
{
    const user_input = term_input.value;
    const div = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span1.textContent = "testing@html-term:"
    span1.classList.add("term-green");
    if(is_error){
        span2.classList.add("term-dark-red");
    }
    else if(is_alert){
        span2.classList.add("term-yellow")
    }
    else{
    span2.classList.add("term-white");
    }
    div.appendChild(span1);
    div.appendChild(span2);
    term_output.appendChild(div);
    switch (mode)
    {
        case TEST_INPUT:
            span2.textContent = ` $ ${test_input_text}`;
            break;
            
            case USER_INPUT:
                span2.textContent = ` $ ${user_input}`;
        default:
            break;
    }
}

gen_ouput(TEST_INPUT, "Default text")
gen_ouput(TEST_INPUT, "Alert text", false, true)
gen_ouput(TEST_INPUT, "Error text", true)

bt_test.addEventListener("click", ()=>{
    gen_ouput(USER_INPUT);
})
