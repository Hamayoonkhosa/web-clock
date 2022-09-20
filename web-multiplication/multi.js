const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionEl = document.getElementById("questions");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
questionEl.innerText = `what is ${num1} multiply By ${num2}?`
let score = JSON.parse(localStorage.getItem("Score"))

scoreEl.innerText = `Score${score}`

const correctAns = num1*num2



formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
        
    }   
 
})

function updateLocalStorage(){
    localStorage.setItem("Score",JSON.stringify(score))
    
}



