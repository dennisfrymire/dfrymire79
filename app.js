
$(() => {
// ======================
// GLOBAL VARIABLES
// ======================

    let $randQuestion;
    let $random;
    let $randQuestionDisplay;
    let $wrongAnswers = 0;
    let $correctAnswers = 0;
    
  

// const runTimer = () => {
//     let timer = 10;
//     let interval = setInterval(function() {
//         timer--;
//         // Display 'counter' wherever you want to display it.
//         if (timer <= 0) {
//             clearInterval(interval);
            

//             $('#timer').html("<h3>Game Over</h3>"); 
//             endGameMusic();
//             $('#display-question').remove();
//             $('#answer').remove();
//             $('#button').remove();
//             $('#play-again').css('display', 'block');
//             // return;

//         }else{
//             $('#time').text(timer);
//         //   console.log("Timer --> " + timer);
//         }
//     }, 1000);
// }

// =====================
// QUESTION BANKS
// =====================

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

const kissesWithHistoryQuestions = [
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

const theProjectQuestions = [
    {Question: `What year is the furthest Sam has leapt back in time, including the novels?`, Answer: `1776`},
    {Question: `In what year was Sammy Jo Fuller born?`, Answer: `1967`},
    {Question: `What is the first name of Marilyn Monroe's bodyguard in "Goodbye Norma Jean?"`, Answer: `Dennis`},
    {Question: `In what year does the episode "Promised Land" take place?`, Answer: `1971`},
    {Question: `In what year does Tom Beckett die in Vietnam in the original timeline?`, Answer: '1970'},
    {Question: `Sam is the lead singer of what 70's glam rock band in the episode "Glitter Rock"?`, Answer: `King Thunder`},
    {Question: `What third season episode was almost the final episode aired before a letter-writing campaign saved the series?`, Answer: `Runaway`}

];

const novelsAndComicsQuestions = [
    {Question: `What year is the furthest Sam has leapt back in time, including the novels?`, Answer: `1776`},
    {Question: `In what year was Sammy Jo Fuller born?`, Answer: `1967`},
    {Question: `What is the first name of Marilyn Monroe's bodyguard in "Goodbye Norma Jean?"`, Answer: `Dennis`},
    {Question: `In what year does the episode "Promised Land" take place?`, Answer: `1971`},
    {Question: `In what year does Tom Beckett die in Vietnam in the original timeline?`, Answer: '1970'},
    {Question: `Sam is the lead singer of what 70's glam rock band in the episode "Glitter Rock"?`, Answer: `King Thunder`},
    {Question: `What third season episode was almost the final episode aired before a letter-writing campaign saved the series?`, Answer: `Runaway`}
];


// Removes Intro message and 'Why I'm Here' Button
const removeIntro = () => {
    $('#ready').remove();
    $('#why-im-here').remove();
};

// Adds the Rules and 'Activate Accelerator' button
const addRules = () => {
    $('#rules').css('display', 'block');
    $('#play-game').css('display', 'block');
};

// Removes the Rules and the start of 'Round 1 - Easy Questions'
const removeRules = () => {
    $('.rules-head').remove();
    $('.sub-head').remove();
};

// Removes 'Activate Accelerator Button' at the start of 'Round 1 - Easy Questions'
const removeAcceleratorButton = () => {
    $('#play-game').remove();
};

// Adds the answer box and button at the start of 'Round 1 - Easy Questions'
const addEasyAnswerBox = () => {
    $('#easy-answer').css('display', 'block');
    $('#easy-button').css('display', 'block');
};

// Removes the answer box for end of Round 1 - Easy Questions
const removeEasyAnswerBox = () => {
    $('#easy-answer').css('display', 'none');
    $('#easy-button').css('display', 'none');
}

// Adds 'Round 2 - Kisses with History' explanation and Round 2 Start button to DOM
const kissesWithHistory = () => {
    $('#kisses').css('display', 'block');
    $('#kisses-button').css('display', 'block');
    $wrongAnswers = 0;
    console.log($wrongAnswers);
}

// Removes Round 2 - Kisses with History' explanation and Round 2 Start button from the DOM
const removeKisses = () => {
    $('#kisses').remove();
    $('#kisses-button').remove();
}

// Adds 'Round 2 - Kisses with History' answer box and submit button
const addKissesAnswerBox = () => {
    $('#kisses-input-answer').css('display', 'block');
    $('#kisses-input-button').css('display', 'block');
};

// Checks score after end of Easy Question round, and sends player on to Round 2 - Kisses with History if wrong answers < 3
const checkArraysEasy = () => {
    removeEasyAnswerBox();
    console.log($wrongAnswers);
    if ($wrongAnswers >= 3) {
        endGameLose();
        console.log('Is this running?');
    } else if ($wrongAnswers < 3) {
        kissesWithHistory();
    }
};

const endGameLose = () => {
    $endGameLoseMessage = $('<div>');
    $endGameLoseText = $('<h2>').text(`You missed ${$wrongAnswers} questions in the last round, and have lost the game. Your total score was ${$correctAnswers}. Try again and beat your score!`);
    $endGameLoseMessage.append($endGameLoseText);
    $('#end-game').append($endGameLoseMessage);
    // const $playAgain = $('<button>').text('Try again');

}

// ==================================
// AUDIO FILES
// ==================================
const playLeapEffect = () => {
    $('audio#leap-effect')[0].play();
}

const handlinkEffect = () => {
    $('audio#handlink-effect')[0].play();
}

const endGameMusic = () => {
    $('audio#end-game-music')[0].play();
}

// =================
// ANSWER INPUTS
// =================

// =====================
// Easy Questions Input
// =====================
 
$('#easy').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#easy-answer').val();
    if ($answer === easyQuestions[$random].Answer) {
        // console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        // timer =+ 15;
        easyQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers++;
        console.log($correctAnswers);
        $answer = $('#easy-answer').val('');
        $correctMessage.fadeOut(1000);
        randEasyQGenerator();
    } else if ($answer !== easyQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        console.log($wrongAnswers);
        easyQuestions.splice($random, 1);
        console.log(easyQuestions.length);
        $answer = $('#answer').val('');
        $incorrectMessage.fadeOut(1000);
        randEasyQGenerator();
    }
    
});

// ==========================
// Kisses With History Input
// ==========================

$('#kisses-input').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#kisses-input-answer').val();
    if ($answer === kissesWithHistoryQuestions[$random].Answer) {
        // console.log($answer);
        $correctMessage = $('<h3>').text('Correct!');
        $('#display-question').append($randQuestionDisplay);
        // timer =+ 15;
        kissesWithHistoryQuestions.splice($random, 1);
        $randQuestionDisplay.remove();
        $correctMessage = $('<h3>').text('Correct!');
        $('#judge').append($correctMessage);
        $correctAnswers++;
        console.log($correctAnswers);
        $answer = $('#kisses-input-answer').val('');
        $correctMessage.fadeOut(1000);
        randKissesQGenerator();
    } else if ($answer !== kissesWithHistoryQuestions[$random].Answer) {
        $randQuestionDisplay.remove();
        $incorrectMessage = $('<h3>').text('Incorrect!').css('color', 'red');
        $('#judge').append($incorrectMessage);
        $wrongAnswers++;
        console.log($wrongAnswers);
        kissesWithHistoryQuestions.splice($random, 1);
        console.log(kissesWithHistoryQuestions.length);
        $answer = $('#kisses-input-answer').val('');
        $incorrectMessage.fadeOut(1000);
        randKissesQGenerator();
    }
    
});

////////////////////////////////////
// Random Question Generator Arrays
///////////////////////////////////

// Round 1 - Easy Questions
const randEasyQGenerator = () => {
    // Runs through array 10 times, then exits back to check score
        
        if (easyQuestions.length > 0) {
        // random variable will generate number to determine randomly selected question
        $random = Math.floor(Math.random() * easyQuestions.length);
        $randQuestion = (easyQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        // console.log($randQuestionDisplay);
    // Question is appended to the div for player to answer
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysEasy();
        }
}

const randKissesQGenerator = () => {
    if (kissesWithHistoryQuestions.length > 0) {
        // random variable will generate number to determine randomly selected question
        $random = Math.floor(Math.random() * kissesWithHistoryQuestions.length);
        $randQuestion = (kissesWithHistoryQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        console.log($randQuestionDisplay);
    // Question is appended to the div for player to answer
        $('#display-question').append($randQuestionDisplay);
        } else {
        checkArraysKisses();
        }

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

const theProject = () => {
    for (i = 0; theProjectQuestions.length > 0; i++) {
        const $random = Math.floor(Math.random() * theProjectQuestions.length);
        let $randQuestion = (theProjectQuestions[$random].Question);
        $randQuestionDisplay = $('<p>').text($randQuestion);
        $('#display-question').append($randQuestionDisplay);
    }
}



// Removes intro message and places the rules of the game onto the DOM
$('#why-im-here').on('click', removeIntro);
$('#why-im-here').on('click', addRules);
//

// Removes Rules from the DOM
$('#play-game').on('click', removeRules)

// Removes 'Begin Round 1' from DOM
$('#play-game').on('click', removeAcceleratorButton);

// Begins random question generator for 'Round 1 - Easy Questions'
$('#play-game').on('click', randEasyQGenerator);

// Adds input field and submit button for 'Round 1'
$('#play-game').on('click', addEasyAnswerBox);

// Plays Leap Effect to start the game
$('#play-game').on('click', playLeapEffect); 

// $('#play-game').on('click', runTimer);

// Adds handlink effect to button click
$('#easy-button').on('click', handlinkEffect);

// Begins game over after player has lost (currently not attached)
$('#play-again').on('click', randEasyQGenerator);

// Removes 'Round 2 - Kisses with History' explanation from the DOM
$('#kisses-button').on('click', removeKisses);

// Adds 'Round 2 - Kisses with History' input field and answer button to DOM

$('#kisses-button').on('click', addKissesAnswerBox);

// Plays leap effect to start the round
$('#kisses-button').on('click', playLeapEffect);

// Begins random question generator for 'Round 2 - Kisses with History'
$('#kisses-button').on('click', randKissesQGenerator);

});