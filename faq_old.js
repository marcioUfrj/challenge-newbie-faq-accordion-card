/* VARIABLES */
let elemQuestionHeader1 = document.getElementById("q-header-1");
let elemQuestionHeader2 = document.getElementById("q-header-2");
let elemQuestionHeader3 = document.getElementById("q-header-3");
let elemQuestionHeader4 = document.getElementById("q-header-4");
let elemQuestionHeader5 = document.getElementById("q-header-5");

/* EVENT LISTENER */
elemQuestionHeader1.addEventListener("click", checkQuestion1);
elemQuestionHeader2.addEventListener("click", checkQuestion2);
elemQuestionHeader3.addEventListener("click", checkQuestion3);
elemQuestionHeader4.addEventListener("click", checkQuestion4);
elemQuestionHeader5.addEventListener("click", checkQuestion5);

/* FUNCTIONS DEFINITIONS */
function checkQuestion1() {
  const [elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer] = setQuestion(1);
  checkVisibility(elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer);
}

function checkQuestion2() {
  const [elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer] = setQuestion(2);
  checkVisibility(elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer);
}

function checkQuestion3() {
  const [elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer] = setQuestion(3);
  checkVisibility(elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer);
}

function checkQuestion4() {
  const [elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer] = setQuestion(4);
  checkVisibility(elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer);
}

function checkQuestion5() {
  const [elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer] = setQuestion(5);
  checkVisibility(elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer);
}

function setQuestion(i) {
  let elemQuestionItem = document.getElementById("q-item-" + i);
  let elemQuestionTitle = document.getElementById("q-title-" + i);
  let elemQuestionIcon = document.getElementById("q-icon-" + i);
  let elemQuestionAnswer = document.getElementById("q-answer-" + i);
  return [elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer];
}

function checkVisibility(elemQuestionItem, elemQuestionTitle, elemQuestionIcon, elemQuestionAnswer) {
  if ( elemQuestionAnswer.hasAttribute("hidden") == true ) {
    elemQuestionItem.classList.add("answer-visible");
    elemQuestionTitle.classList.add("answer-visible");
    elemQuestionIcon.classList.add("answer-visible");
    elemQuestionAnswer.removeAttribute("hidden");
  }
  else {
    elemQuestionItem.classList.remove("answer-visible");
    elemQuestionTitle.classList.remove("answer-visible");
    elemQuestionIcon.classList.remove("answer-visible");
    elemQuestionAnswer.setAttribute("hidden", true);
  }
}