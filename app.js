
$(() => {

    let $randQuestion;
    let $random;
    let $randQuestionDisplay;
  

const runTimer = () => {
    let timer = 30;
    let interval = setInterval(function() {
        timer--;
        // Display 'counter' wherever you want to display it.
        if (timer <= 0) {
            clearInterval(interval);
            $('#timer').html("<h3>Count down complete</h3>");  
            return;
        }else{
            $('#time').text(timer);
        //   console.log("Timer --> " + timer);
        }
    }, 1000);
}


const easyQuestions = [
    {Question: `What is the name of the parallel hybrid computer that runs Project Quantum Leap?`, Answer: `Ziggy`},
    {Question: `What is Al's last name?`, Answer: `Calavicci`},
    {Question: `In what year did 'Quantum Leap' debut on NBC?`, Answer: `1989`},
    {Question: `Who played Dr. Sam Beckett?`, Answer: `Scott Bakula`},
    {Question: `Who played the Project Observer, Al?`, Answer: `Dean Stockwell`},
    {Question: `In what year did the final episode air?`, Answer: `1993`},
    {Question: `Which U.S. president did Sam encounter as a young boy in 1950s New York?`, Answer: `Donald Trump`},
    {Question: `In "How the Tess Was Won", Sam accidentally helps Buddy Holly come up with the lyrics for what song?`, Answer: `Peggy Sue`},
    
];

const mediumQuestions = [
    {Question: `What is the name of the intellectually-disabled young man Sam leaps into in Season 2 (first name only)?`, Answer: `Jimmy`},
    {Question: `In what year does "Catch a Falling Star" take place?`, Answer: `1979`},
    {Question: `What was Al's nickname as a young naval cadet?`, Answer: `Bingo`},
    {Question: `What was the name of Captain Galaxy's sidekick?`, Answer: `Future Boy`},
    {Question: `What year does Al leap into in the episode "The Leap Back"?`, Answer: `1945`},
    {Question: `In what Illinois city does Sam rescue rock 'n roll music in 1959?`, Answer: 'Peoria'},
    {Question: `In what year does the episode "M.I.A." take place?`, Answer: '1969'},
    {Question: `What was the year of Sam's first leap back into time as Captain Tom Stratton?`, Answer: `1956`},
    {Question: `Prior to the conclusion of "Mirror Image", how many times had Al been married?`, Answer: `5`},
    {Question: `In the new timeline created at the end of "Mirror Image", how many daughters did Al and Beth have?`, Answer: `4`},
    {Question: `In what year was Sam born?`, Answer: `1953`},
    {Question: `In what year did Sam step into the accelerator and first travel back in time?`, Answer: '1995'},
    {Question: `In what year does the future sequence of "The Leap Back" take place?`, Answer: '1999'},
];

const hardQuestions = [
    {Question: `What year is the furthest Sam has leapt back in time, including the novels?`, Answer: `1776`},
    {Question: `In what year was Sammy Jo Fuller born?`, Answer: `1967`},
    {Question: `What is the first name of Marilyn Monroe's bodyguard in "Goodbye Norma Jean?"`, Answer: `Dennis`},
    {Question: `In what year does the episode "Promised Land" take place?`, Answer: `1971`},
    {Question: `In what year does Tom Beckett die in Vietnam in the original timeline?`, Answer: '1970'},
    {Question: `Sam is the lead singer of what 70's glam rock band in the episode "Glitter Rock"?`, Answer: `King Thunder`},
    {Question: `What third season episode was almost the final episode aired before a letter-writing campaign saved the series?`, Answer: `Runaway`}
];

$('form').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#answer').val();
    if ($answer === easyQuestions[$random].Answer) {
        console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        // alert("Correct!");
        // timer =+ 15;
        easyQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        console.log($correctMessage);
        // $(timer)++
        $answer = $('#answer').val('');
        $correctMessage.fadeOut(1000);
        randEasyQGenerator();
    } else if ($answer !== easyQuestions[$random].Answer) {
        console.log($answer);
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!') 
        $('#judge').append($incorrectMessage);
        $answer = $('#answer').val('');
        $incorrectMessage.fadeOut(1000);
        randEasyQGenerator();
        
    }
    
});

const randEasyQGenerator = () => {
    // while loop will run through easy questions until they have all been answered,or score/timer drops to 0. Code for timer/score to be inserted.
        
        // while (easyQuestions.length > 0) {
        console.log('test');
        // random variable will generate number to determine randomly selected question
        $random = Math.floor(Math.random() * easyQuestions.length);
        $randQuestion = (easyQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        console.log($randQuestionDisplay);

    // Question is appended to the div for player to answer

        $('#display-question').append($randQuestionDisplay);
       
    // }
}
    
// checks for correct or incorrect answer. Code to be add/subject points or score to be added

        // $("#button").on('click', checkAnswer);
        // $checkAnswer;
        // console.log($answer);
        // if ($answer === easyQuestions[$random].Answer) {
        //     alert("Correct!");
        //     easyQuestions.splice($random, 1);
        //     randEasyQGenerator();
        // } else {
        //     alert("Incorrect!");
        // // Eliminate the question from the array so it is not asked again.

        // }   easyQuestions.splice($random, 1);
        //     randEasyQGenerator();

const randMediumQGenerator = () => {
    // while (mediumQuestions.length > 0 && timer > 0) {
    const random = Math.floor(Math.random() * mediumQuestions.length);
    let randQuestion = prompt(mediumQuestions[random].Question);
        if (randQuestion === mediumQuestions[random].Answer) {
            alert("Correct!");
            mediumQuestions.splice(random, 1);
            randMediumQGenerator();
        } else {
            alert("Incorrect!");
        }   
        mediumQuestions.splice(random, 1);
            
        randMediumQGenerator();
    // }
}

const randHardQGenerator = () => {
    while (hardQuestions.length > 0 && timer > 0) {
        const random = Math.floor(Math.random() * hardQuestions.length);
        let hardQuestion = prompt(hardQuestions[random].Question);
        if (hardQuestion === (hardQuestions[random].Answer)) {
            alert("Correct!");
            hardQuestions.splice(random, 1);
            randHardQGenerator();
        } else {
            alert("Incorrect!");
        }   
        hardQuestions.splice(random, 1);
        randHardQGenerator();
    }
}



$('#play-game').on('click', randEasyQGenerator);
$('#play-game').on('click', runTimer);


});