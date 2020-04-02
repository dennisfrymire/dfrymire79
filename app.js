
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

const removeAcceleratorButton = () => {
    $('#play-game').fadeOut(1000);
};

const removeIntro = () => {
    $('#ready').remove();
    $('#why-im-here').remove();
};

const addRules = () => {
    $('#rules').css('display', 'block');
    $('#play-game').css('display', 'block');
};

const addAnswerBox = () => {
    $('#answer').css('display', 'block');
    $('#button').css('display', 'block');
};

const removeAnswerBox = () => {
    $('#answer').css('display', 'none');
    $('#button').css('display', 'none');
}

const removeRules = () => {
    $('.rules-head').remove();
    $('.sub-head').remove();
};

const kissesWithHistory = () => {
    $('#kisses').css('display', 'block');
    $('#kisses-button').css('display', 'block');
    $wrongAnswers = 0;
    console.log($wrongAnswers);
}

const endGameLose = () => {
    $endGameLoseMessage = $('<div>');
    $endGameLoseText = $('<h2>').text(`You missed ${$wrongAnswers} questions in the last round, and have lost the game. Your total score was ${$correctAnswers}. Try again and beat your score!`);
    $endGameLoseMessage.append($endGameLoseText);
    $('#end-game').append($endGameLoseMessage);
    // const $playAgain = $('<button>').text('Try again');

}

const checkArraysEasy = () => {
    console.log('Is checkArraysEasy running?')
    removeAnswerBox();
    console.log($wrongAnswers);
    if ($wrongAnswers >= 3) {
        endGameLose();
        console.log('Is this running?');
    } else if ($wrongAnswers < 3) {
        kissesWithHistory();
    }
};



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
 
$('#easy').on('submit', (evt) => {
    evt.preventDefault();
    let $answer = $('#answer').val();
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
        $answer = $('#answer').val('');
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

const randEasyQGenerator = () => {
    // while loop will run through easy questions until they have all been answered,or score/timer drops to 0. Code for timer/score to be inserted.
        
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




$('#why-im-here').on('click', addRules);
$('#why-im-here').on('click', removeIntro);
$('#play-game').on('click', addAnswerBox);
$('#play-game').on('click', randEasyQGenerator);
$('#play-game').on('click', removeAcceleratorButton);
$('#play-game').on('click', playLeapEffect); 
$('#play-game').on('click', removeRules)
// $('#play-game').on('click', runTimer);
$('#button').on('click', handlinkEffect);
$('#play-again').on('click', randEasyQGenerator);
$('#kisses').on('click', addAnswerBox);
$('#kisses').on('click', playLeapEffect);
$('#kisses').on('click', randKissesQGenerator);



});