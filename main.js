/////////////QuerySelectors//////////////
let questionDisplayArea = document.querySelector("#questionDisplayArea");
let answerInput = document.querySelector("#answerInput");
let answerSubmit = document.querySelector("#answerSubmit");
let scoreBoard = document.querySelector("#scoreBoard");
let answerDisplayArea = document.querySelector("#answerDisplayArea");
let querySelector = $("#question100");
/////////Global Variables///////
let displayQuestion = "";
let scoringTotal = 0;
let elementClicked = false;
let removeOpacity = ""

///////////Jquery Element Creation/////////////
let container = $('<div id="container" class="container-xxl"></div>');
$("#playBoard").append(container);
let row100 = $('<div id="row100" class="row row-cols-5"></div>');
$("#container").append(row100);
let row200 = $('<div id="row200" class="row row-cols-5"></div>');
$("#container").append(row200);
let row400 = $('<div id="row400" class="row row-cols-5"></div>');
$("#container").append(row400);
let row600 = $('<div id="row600" class="row row-cols-5"></div>');
$("#container").append(row600);
let row800 = $('<div id="row800" class="row row-cols-5"></div>');
$("#container").append(row800);

//////////Main Application Code///////////
  fetch("jeopardy.json")
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      let groupedResponseData = _.groupBy(data, "value");
      let finalQuestion = groupedResponseData;
      for (let i = 0; i < 5; i++) {
     
        //$100 question row generator//
        let create100 = $(
          `<div id="question100${i}" class="col border border-dark border-1 text-bg-secondary mb-3"> $100</div>`
        );
        $("#row100").append(create100);
        $(`#question100${i}`).on("click", (event) => {
          // console.log(displayQuestion)
          answerDisplayArea.innerText = "";
          if (elementClicked === false) {
          
            removeOpacity = create100
            removeOpacity.attr('class', 'col border border-dark border-1 text-bg-secondary mb-3 opacity-75')
            displayQuestion =
              finalQuestion.$100[
                Math.round(Math.random() * finalQuestion.$100.length)
              ];
            questionDisplayArea.innerText = displayQuestion.question;
            elementClicked = true;
            console.log(displayQuestion)
          }
        });

        //$200 question row generator//
        let create200 = $(
          `<div id="question200${i}" class="col border border-dark border-1 text-bg-secondary mb-3">$200</div>`
        );
        $("#row200").append(create200);
        $(`#question200${i}`).on("click", () => {

          answerDisplayArea.innerText = "";
          if (elementClicked === false) {
            removeOpacity = create200
            removeOpacity.attr('class', 'col border border-dark border-1 text-bg-secondary mb-3 opacity-75')
            elementClicked = true;
            displayQuestion =
              finalQuestion.$200[
                Math.round(Math.random() * finalQuestion.$200.length)
              ];
            questionDisplayArea.innerText = displayQuestion.question;
            console.log(displayQuestion)
          }
        });

        //$400 question row generator//
        let create400 = $(
          `<div id="question400${i}" class="col border border-dark border-1 text-bg-secondary mb-3">$400</div>`
        );
        $("#row400").append(create400);
        $(`#question400${i}`).on("click", () => {
          answerDisplayArea.innerText = "";
          if (elementClicked === false) {
            removeOpacity = create400
            removeOpacity.attr('class', 'col border border-dark border-1 text-bg-secondary mb-3 opacity-75')
            elementClicked = true;
            displayQuestion =
              finalQuestion.$400[
                Math.round(Math.random() * finalQuestion.$400.length)
              ];
            questionDisplayArea.innerText = displayQuestion.question;
            console.log(displayQuestion)
          }
        });

        //$600 question row generator//
        let create600 = $(
          `<div id="question600${i}" class="col border border-dark border-1 text-bg-secondary mb-3">$600</div>`
        );
        $("#row600").append(create600);
        $(`#question600${i}`).on("click", () => {
          answerDisplayArea.innerText = "";
          if (elementClicked === false) {
            removeOpacity = create600
            removeOpacity.attr('class', 'col border border-dark border-1 text-bg-secondary mb-3 opacity-75')
            elementClicked = true;
            displayQuestion =
              finalQuestion.$600[
                Math.round(Math.random() * finalQuestion.$600.length)
              ];
            questionDisplayArea.innerText = displayQuestion.question;
            console.log(displayQuestion)
          }
        });

        //$800 question row generator
        let create800 = $(
          `<div id="question800${i}" class="col border border-dark border-1 text-bg-secondary mb-3">$800</div>`
        );
        $("#row800").append(create800);
        $(`#question800${i}`).on("click", () => {
          answerDisplayArea.innerText = "";
          if (elementClicked === false) {
            removeOpacity = create800
            removeOpacity.attr('class', 'col border border-dark border-1 text-bg-secondary mb-3 opacity-75')
            elementClicked = true;
            displayQuestion =
              finalQuestion.$800[
                Math.round(Math.random() * finalQuestion.$800.length)
              ];
            questionDisplayArea.innerText = displayQuestion.question;
            console.log(displayQuestion)
          }
        });
      }
    });

//Check Answer EventListener
answerSubmit.addEventListener("click", (event) => {
  elementClicked = false;
  let userAnswer = answerInput.value;
  let actualAnswer = displayQuestion.answer;
  //If the answer is a string
  if (typeof actualAnswer === "string") {
    if (
      userAnswer.toLowerCase().includes(actualAnswer.toLowerCase()) === true
    ) {
      scoringTotal =
        Number(scoringTotal) + Number(displayQuestion.value.replace("$", ""));
      scoreBoard.innerText = `Your score: $${scoringTotal}`;
      answerDisplayArea.innerText = `YOU ARE CORRECT!!!!\nYou scored: ${displayQuestion.value}\nPlease select another question.`;
      removeOpacity.attr("class", "col border border-dark border-1 text-bg-secondary mb-3")
      removeOpacity = ""
    } else {
      answerDisplayArea.innerText = `YOU ARE WRONG!!!!\nPlease select another question.`;
      removeOpacity.attr("class", "col border border-dark border-1 text-bg-secondary mb-3")
      removeOpacity = ""
    }

    //if answer is a number
  } else if (typeof actualAnswer === "number") {
    if (userAnswer.toLowerCase().includes(actualAnswer) === true) {
      scoringTotal =
        Number(scoringTotal) + Number(displayQuestion.value.replace("$", ""));
      scoreBoard.innerText = `Your score: $${scoringTotal}`;
      answerDisplayArea.innerText = `YOU ARE CORRECT!!!!\nYou scored: ${displayQuestion.value}\nPlease select another question.`;
      removeOpacity.attr("class", "col border border-dark border-1 text-bg-secondary mb-3")
      removeOpacity = ""
    } else {
      answerDisplayArea.innerText = `YOU ARE WRONG!!!!\nPlease select another question.`;
      removeOpacity.attr("class", "col border border-dark border-1 text-bg-secondary mb-3")
      removeOpacity = ""
    }
  }
  answerInput.value = [];
});




