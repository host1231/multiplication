const form = document.getElementById('form');
const question = document.getElementById('question');
const input = document.getElementById('input');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const out = document.getElementById('out');


const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


question.innerHTML = `${num1} * ${num2} = ?`;

let score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score = 0;
}
scoreEl.innerHTML = `счёт: ${score}`;


form.addEventListener('submit', ()=>{
    const userAns = +input.value;
    const correctAns = num1 * num2;
    if (userAns === correctAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
});


out.addEventListener('click', ()=>{
    score = 0;
    updateLocalStorage();
});



function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score));
}


let time = 10;

function updateTime(){
    time--;
    timeEl.innerHTML = `время: ${time}`;
    if (time == 0){
        time = 10;
        score--;
        updateLocalStorage();
        location.reload();
    }
}

setInterval(updateTime, 1000);

