const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');

    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    questionElement.innerHTML = ''
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    const img  = document.createElement('img');
    img.setAttribute('src',question.questions);
    img.id = 'images';
    questionElement.appendChild(img);

    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            startButton.classList.remove('hide')
            score.innerText = 0;
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        container.style.color = '#fff';
        container.style.background = 'transparent';
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        container.style.color = '#fff';
        container.style.background = 'transparent';
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"./img/1.jpg",
        answers:[
            {text:'Jeff Bezos',correct:false},
            {text:'Lord Voldemort',correct:false},
            {text:'Johnny Sins',correct:true},
            {text:'Mike Tyson',correct:false}
        ]
    },
    {
        questions:"./img/2.jpg",
        answers:[
            {text:'Sumith Tennakoon',correct:false},
            {text:'Nelson Mandela',correct:true},
            {text:'Martin Luther King, Jr.',correct:false},
            {text:'Sunil Tennakoon',correct:false},
        ]
    },
    {
        questions:"./img/3.jpg",
        answers:[
            {text:'Mia Kalifa',correct:true},
            {text:'Elsa Jean',correct:false},
            {text:'Leah Gotti',correct:false},
            {text:'Angela White',correct:false}
        ]
    },
    {
        questions:"./img/4.jpg",
        answers:[
            {text:'Sergey Brin',correct:false},
            {text:'Larry Page',correct:true},
            {text:'Sundar Pichai',correct:false},
            {text:'Eric Schmidt',correct:false}
        ]
    },
    {
        questions:"./img/5.jpg",
        answers:[
            {text:'Simon Sinek',correct:false},
            {text:'Tony Robbins',correct:false},
            {text:'Gary Vaynerchuk',correct:true},
            {text:'Grant Cardone',correct:false}
        ]
    },
    {
        questions:"./img/6.jpg",
        answers:[
            {text:'Bill Clinton',correct:false},
            {text:'Ronald Reagan',correct:true},
            {text:'Jimmy Carter',correct:false},
            {text:'Richard Nixon',correct:false}
        ]
    },
    {
        questions:"./img/7.jpg",
        answers:[
            {text:'Walt Disney',correct:false},
            {text:'Hengry Ford',correct:true},
            {text:'Thomas Edison',correct:false},
            {text:'Nikola Tesla',correct:false}
        ]
    },
    {
        questions:"./img/8.jpg",
        answers:[
            {text:'Kylie Jenner',correct:false},
            {text:'Kourtney Kardashian',correct:false},
            {text:'Khloé Kardashian',correct:false},
            {text:'Kim Kardashian',correct:true}
        ]
    },
    {
        questions:"./img/9.jpg",
        answers:[
            {text:'Drake',correct:false},
            {text:'Travis Scott',correct:false},
            {text:'Jay-Z',correct:false},
            {text:'Kanye West',correct:true}
        ]
    },
    {
        questions:"./img/10.jpg",
        answers:[
            {text:'Jack Ma',correct:true},
            {text:'Ma Huateng',correct:false},
            {text:'Daniel Zhang',correct:false},
            {text:'Xi Jinping',correct:false}
        ]
    },
    {
        questions:"./img/11.jpg",
        answers:[
            {text:'Larry Ellison',correct:false},
            {text:'Tim Cook',correct:false},
            {text:'Steve Jobs',correct:true},
            {text:'Masayoshi Son',correct:false}
        ]
    },
    {
        questions:"./img/12.jpg",
        answers:[
            {text:'Richard Branson',correct:false},
            {text:'Donald Trump',correct:true},
            {text:'Joe Biden',correct:false},
            {text:'Mike Pence',correct:false}
        ]
    },
    {
        questions:"./img/13.jpg",
        answers:[
            {text:'Kamala Harris',correct:true},
            {text:'Hillary Rodham Clinton',correct:false},
            {text:'Nancy Pelosi',correct:false},
            {text:'Melania Trump',correct:false}
        ]
    },
    {
        questions:"./img/14.jpg",
        answers:[
            {text:'J. P. Morgan',correct:false},
            {text:'John D. Rockefeller',correct:true},
            {text:'Andrew Carnegie',correct:false},
            {text:'Cornelius Vanderbilt',correct:false}
        ]
    },
    {
        questions:"./img/15.jpg",
        answers:[
            {text:'Howard Hughes',correct:false},
            {text:'Alexander Graham Bell',correct:false},
            {text:'J. P. Morgan',correct:true},
            {text:'Jay Gould',correct:false}
        ]
    },
    {
        questions:"./img/16.jpg",
        answers:[
            {text:'Jay Leno',correct:false},
            {text:'Trevor Noah',correct:false},
            {text:'Stephen Colbert',correct:false},
            {text:'Jimmy Fallon',correct:true}
        ]
    },
    {
        questions:"./img/17.jpg",
        answers:[
            {text:'Alex Jones',correct:false},
            {text:'Joe Rogan',correct:true},
            {text:'Ben Shapiro',correct:false},
            {text:'Bill Burr',correct:false}
        ]
    },
    {
        questions:"./img/18.jpg",
        answers:[
            {text:'Albert Einstein',correct:false},
            {text:'Isaac Newton',correct:true},
            {text:'Galileo Galilei',correct:false},
            {text:'Johannes Kepler',correct:false}
        ]
    },
    {
        questions:"./img/19.jpg",
        answers:[
            {text:'Manjula Sir',correct:true},
            {text:'Kapila Sir',correct:false},
            {text:'Nilan Sir',correct:false},
            {text:'Ashan Sir',correct:false}
        ]
    },
    {
        questions:"./img/20.jpg",
        answers:[
            {text:'Armadillos',correct:false},
            {text:'Holland Lop',correct:false},
            {text:'Azmi',correct:true},
            {text:'Rabbit',correct:true}
        ]
    },
]