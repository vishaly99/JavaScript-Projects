const questions = [
    {
        'que': "Which of the following i a markup language",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': "Which of the following i a markup language 2",
        'a': 'HTML2',
        'b': 'CSS2',
        'c': 'Javascript2',
        'd': 'PHP2',
        'correct': 'b'
    },
    {
        'que': "Which of the following i a markup language 3",
        'a': 'HTML3',
        'b': 'CSS3',
        'c': 'Javascript3',
        'd': 'PHP3',
        'correct': 'c'
    }
]

let index=0;
let total=questions.length,right=0,wrong=0;
const queBox=document.getElementById('quesBox');
const optionInputs=document.querySelectorAll('.options')
const loadquestion=()=>{
    if(index==total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    queBox.innerText=`${index+1}). ${data.que}`
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
function submitQuiz(){
    const data = questions[index]
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getAnswer=()=>{
    let answer="";
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }
    })
    return answer;
}
const reset=()=>{
    optionInputs.forEach((input)=>{
        if(input.checked){
            input.checked=false
        }
    });
}
const endQuiz=()=>{
    // document.getElementById("boxlast").innerHTML=`<h3>Thank you</h3>
    // <h2>${right}/${total} are correct</h2>`
    //console.log(right)
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
        </div>
    `
}

loadquestion(index)