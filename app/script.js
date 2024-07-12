const form = document.querySelector(".container");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the default form submission action
  // Add your form handling logic here
});

function errorHandler(MsgId,InputBoxId,)
{
    var Msg = document.getElementById(MsgId);
    var InputBox = document.getElementById(InputBoxId);
    if(InputBox.value === "")
    {
        Msg.style.display = "block";
        InputBox.style.borderColor = "red";
    }
    else
    {
        Msg.style.display = "none";
        InputBox.style.borderColor = "black";
    }
}

let IdsOfErrorMessages = ['first-name-error','last-name-error','email-error','message-error'];
let IdsOfInputs = ['first-name-input','last-name-input','email-input','message-input'];

document.getElementById("submit-btn").addEventListener("click", () =>
{
    for(let i = 0;i<IdsOfErrorMessages.length;i++)
    {
        errorHandler(IdsOfErrorMessages[i],IdsOfInputs[i]);
    }
    queryErrorHandler();
    consentErrorHandler();
})
// Check if any radio button with the name 'query' is checked
function queryErrorHandler()
{
    const isAnyRadioButtonChecked = document.querySelector('input[name="query"]:checked') !== null;
    
    if (!isAnyRadioButtonChecked) {
        document.getElementById("query-error").style.display = "block";
    }
    else
    {
        document.getElementById("query-error").style.display = "none";
    }
}

function consentErrorHandler()
{
    const ConsentChecked = document.querySelector('input[name="consent"]:checked') !==null;
    if(ConsentChecked)
    {
        document.getElementById("consent-error").style.display = "none";
    }
    else
    {    
    document.getElementById("consent-error").style.display = "block";
    }
}