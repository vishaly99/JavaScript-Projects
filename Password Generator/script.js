const passwordlength = document.getElementById('passwordlength');

const uppercase = document.getElementById('containsuppercase');
const lowercase = document.getElementById('containslowercase');
const numbers = document.getElementById('containsnumbers');
const symbols = document.getElementById('containssymbols');
const optionInputs = document.querySelectorAll('.options');
const password=document.getElementById('password');
//const length=10;

// function generatepassword(){
//     let r = (Math.random('A_Z') + 1).toString(36).substring(7);
// console.log("random", r)
// }
// program to generate random strings

// declare all characters
//const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const characterslower = 'abcdefghijklmnopqrstuvwxyz';
const charactersnumber = '0123456789';
const charactersspecial = '@#$%^&*';

const characters = {
    'Uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'Lowercase': 'abcdefghijklmnopqrstuvwxyz',
    'Numbers': '0123456789',
    'Symbols': '@#$%^&*'
}


function generatepassword() {
    const ans = getAnswer()
    const length = passwordlength.value;
    //console.log(ans)
    const final=generateString(ans, length);
    password.innerHTML=final
}
const getAnswer = () => {
    let answer = [];
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer.push(input.value);
        }
    })
    return answer;
}

function generateString(ans, length) {

    let finalstring = '';
    let result = ' ';
    for (let index = 0; index < ans.length; index++) {
        finalstring += characters[ans[index]]
    }
    console.log("String Length:",length)
    console.log("The final string:",finalstring)
    const charactersLength =finalstring.length;
    for (let i = 0; i < length; i++) {
        result += finalstring.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("Random password:-",result)
    return result
}


// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

//console.log(generateString(10));