var timer = document.getElementById('timer')

function clock() {
    var date = new Date()
    var hours = date.getHours()
    var minute = date.getMinutes()
    var seconds = date.getSeconds()

    timer.innerHTML = `${hours}: ${minute}:${seconds}`
    timer.style.color = 'green'
    if(hours >=13 && minute > 17){
        timer.style.color = 'red'
}

}
clock()
setInterval(clock,1000)

var QuestionBank = [
    {
        question:'Q1. who is the CEO of Appclick?',
        options:['Seyi Adeleke','Osimhen','Seyi law','Stanley'],
        answer:'Seyi Adeleke'
    },
    {
        question:'Q2. who is the president of Nigeria?',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q3. On average how far away is the moon from the earth in miles?',
        options: ['1000','238,000','200,000','10,000'],
        answer:'238,000'
    },
    {
        question:'Q4. What is the most sold flavour of Walker’s crisps?',
        options: ['Cheese only','Red pepper flavour','Strawberry and Vanilla','Cheese and Onion'],
        answer:'Cheese and Onion'
    },
    {
        question:'Q5. When was the movie the Titanic released?',
        options: ['1992','1997','2000','1902'],
        answer:'1997'
    },
    {
        question:'Q6. What element is denoted by the chemical symbol Sn in the periodic table?',
        options: ['Copper','Zinc','Tin','Sodium'],
        answer:'Tin'
    },
    {
        question:'Q7. What was the most popular girls name in the UK in 2021?',
        options: ['Jumoke','Candy','Michelle','Olivia'],
        answer:'Olivia'
    },
    {
        question:'Q8. How many times has England won the mens football World Cup?',
        options: ['Twice (1999)','Once (1966)','Once (1996)','Thrice (2000)'],
        answer:'Once (1966)'
    }
]
    var question = document.getElementById('question')
    var option0 = document.getElementById('option0')
    var option1 = document.getElementById('option1')
    var option2 = document.getElementById('option2')
    var option3 = document.getElementById('option3')
    var btn = document.getElementById('btn')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.querySelector("#btn3")
    var stat = document.querySelector('.stat')
    var SubmitRes = document.querySelector('#SubmitRes')
    var scoreBoard = document.querySelector('#scoreboard')
    var main = document.querySelector('#main')
    var back = document.querySelector('.back')
    var answer = document.getElementById('answer')
    var scores = document.getElementById('scores')
    const span = document.querySelectorAll('span')
    var i = 0
    var score = 0

    function DisplayQuestion() {
        for(var num=0; num < span.length; num++){
            span[num].style.background ='gray'
          }
      
        question.innerHTML = QuestionBank[i].question
        option0.innerHTML =  QuestionBank[i].options[0]
        option1.innerHTML =  QuestionBank[i].options[1]
        option2.innerHTML =  QuestionBank[i].options[2]
        option3.innerHTML =  QuestionBank[i].options[3]
        stat.innerHTML = `Question ${i+1} of ${QuestionBank.length}`
        
       
    }
    
    
    DisplayQuestion() 
    

    


    // next button code
    btn.addEventListener('click', function(){
        if (i < QuestionBank.length -1){
            i++
            DisplayQuestion()
        }
        else{
            scoreBoard.style.display = 'block'
            main.style.display = 'none'
        }
        
    }
)

   

    // prev button code
btn2.addEventListener('click', function() {
    if (i < QuestionBank.length) {
        i--;
        DisplayQuestion();
    }
});

// checkAnswer event listener
btn3.addEventListener('click', function(){
    if (i + 1 === QuestionBank.length) {
        alert("Congrats You have Successfully answered the question");
    } else {
          alert("Olodo Finish the Whole Question!!!")
    }
}
)

// BackToQuiz event listener
back.addEventListener('click',function(){
    window.location.reload()
})


// function checkAnswer() {
//     if (i + 1 === QuestionBank.length) {
//         alert("Congrats You have Successfully answered the question");
//     } else {
//           alert("Olodo Finish the Whole Question!!!")
//     }
// }

// btn3.addEventListener('click', checkAnswer);

function calculateScore(userClickedAnswer) {
    if (userClickedAnswer.innerHTML === QuestionBank[i].answer) {
        score = score+1
        document.getElementById(userClickedAnswer.id).style.backgroundColor="green"
        scores.innerHTML= `Your score is : ${score} / ${QuestionBank.length}`
    }
    else{
        document.getElementById(userClickedAnswer.id).style.backgroundColor="red"
        score = score-0.5
    }
    setTimeout(function(){
        if (i < QuestionBank.length -1){
            i++
            DisplayQuestion()
        }
        else{
            scoreBoard.style.display = 'block'
            main.style.display = 'none',
            question.style.display = [0]
        }
        
    },1000)
    
}

function checkAnswer(){
        scoreBoard.style.display = 'none'
        answer.style.display = 'block'

    for (var num = 0; num < QuestionBank.length; num++) {
        var createdList = document.createElement('li')
        createdList.innerHTML = QuestionBank[num].answer
        // console.log(QuestionBank[num].answer);

        document.querySelector("#listmyli").appendChild(createdList)
    }
}

function BackToPrev(){
    window.location.href = "index.html"
}