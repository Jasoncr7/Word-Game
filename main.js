const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const button = document.querySelector('.btn');
const score = document.querySelector('.score');
const main = document.querySelector('.main');
let scoring = 0;

let questionArray = ["What is 2 + 2", "How Long Is A Fortnight?", "What Would You Use To Unclog A Toilet?", "What Does CPR Stand For?", "What Does A Barometer Measure?", "Where Does Solar Energy Come From?", "What Five Letter Word Becomes Shorter When You ADD Two Letters?", "What Insects Can Chew Through Wood And Destroy Your Home?", "How Many Days Are In February During A Leap Year?", "What Is The Singular Word For “Sheep?", "What Is Paper Made From?", "How many days are in a week", "60 + 30", "How many days are in a year", "What is the estimated human population of the earth", "Who is the CEO of Facebook", "Meaning of WWW", "Which team is better than arsenal", "What is the name of the virus causing the current pandemic", "Who is the creator of this game", "Which country won the last world cup", "What is the full Meaning of WHO", "Which club will win the Premier League", "How much is oxygen"];
console.log(questionArray);
let minutes = new Date().getMinutes();
console.log(minutes)

button.addEventListener('click', (event) =>{
    let random = Math.floor(Math.random() * 24);
    question.textContent = questionArray[random];

    setTimeout(() => answer.value = '', 0700);
    if(minutes + 3  == new Date().getMinutes()){
        main.style.display = 'none';
        score.style.display = 'block';
    }
    
});
answer.addEventListener('input', (eve) =>{
    lowerCase = answer.value.toLowerCase();
    if(question.textContent == "What is 2 + 2" && lowerCase == 4){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "How many days are in a week" && lowerCase == 7){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "How Long Is A Fortnight" && lowerCase == "two weeks"){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Would You Use To Unclog A Toilet?" && lowerCase == 'plumber'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Does CPR Stand For?" && lowerCase == 'cardiopulmonary resuscitation'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Does A Barometer Measure?" && lowerCase == 'atmospheric pressure'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Where Does Solar Energy Come From?" && lowerCase == 'sun'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Five Letter Word Becomes Shorter When You ADD Two Letters?" && lowerCase == 'shorter'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Insects Can Chew Through Wood And Destroy Your Home?" && lowerCase == 'termites'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Is The Singular Word For “Sheep?" && lowerCase == 'sheep'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What Is Paper Made From?" && lowerCase == 'wood'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "60 + 30" && lowerCase == '90'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "How many days are in a year" && lowerCase == '365'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What is the estimated human population of the earth" && lowerCase == '8 billion'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Who is the CEO of Facebook" && lowerCase == 'mark zuckerberg'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Meaning of WWW" && lowerCase == 'world wide web'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Which team is better than arsenal" && lowerCase == 'every team'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What is the name of the virus causing the current pandemic" && lowerCase == 'coronavirus'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Who is the creator of this game" && lowerCase == 'jason nwaeze'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Which country won the last world cup" && lowerCase == 'france'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "What is the full Meaning of WHO" && lowerCase == 'world health organization'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "Which club will win the Premier League" && lowerCase == 'liverpool'){
        scoring++;
        score.textContent = scoring;
    }
    if(question.textContent == "How much is oxygen" && lowerCase == 'free'){
        scoring++;
        score.textContent = scoring;
    }
})

//The question array is the list if questions you can add a question to it.
// When you add a question just add the corresponding if statement that is in the answer event listener
//then change the random to multiply by the number of questions there are now.

//If you still don't understand read the code.
