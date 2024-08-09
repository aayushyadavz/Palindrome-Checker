// Selecting input, button and a div
const userInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.querySelector(".result")

// function to check palindrome text
function checkPalindrome(input) {
    // storing input, so that we can use it to show in results
    const originalInput = input  

    // if input field is empty
    if (input === "") {
        alert("Please type some text.")
        return // so that this function stops 
    }

    // to clear that result div
    result.replaceChildren()

    // checking the string is palindrome or not
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    // creating a para element and pushing the result message in this
    const resultPara = document.createElement('p')
    resultPara.className = "result"
    resultPara.innerHTML = resultMsg
    result.appendChild(resultPara) // appending this p element in result div

    // removing that hidden class so that result can appear
    result.classList.remove("hidden") 
}

// event listener on check button
checkBtn.addEventListener("click", function(){
    checkPalindrome(userInput.value) // passing user input value as parameter
    userInput.value = "" // clearing input feild after clicking btn
})

userInput.addEventListener("keypress", function(e){
    if (e.key === "Enter") { // on pressing enter key perform this task
        checkPalindrome(userInput.value)
        userInput.value = ""
    }
})