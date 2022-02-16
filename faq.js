const questionContainer = document.getElementById('question-container');
const questions = questionContainer.getElementsByClassName('question-item');

for (var i = 0; i < questions.length; i++) {
  let header = questions[i].getElementsByClassName('question-header');
  header[0].addEventListener('click', function() {
    let [currentItem, currentTitle, currentIcon, currentAnswer] = getQuestionElements();

    let showQuestion = true;
    if (this.getElementsByClassName('question-title')[0] == currentTitle[0]) {
      showQuestion = false;
    }   

    if (currentItem.length > 0 && currentTitle.length > 0 && currentIcon.length > 0 && currentAnswer.length > 0) {
      currentItem[0].className = currentItem[0].className.replace(" answer-visible", "");
      currentTitle[0].className = currentTitle[0].className.replace(" answer-visible", "");
      currentIcon[0].className = currentIcon[0].className.replace(" answer-visible", "");
      currentAnswer[0].className = currentAnswer[0].className.replace(" answer-visible", "");
    }

    if (showQuestion) {
      this.getElementsByClassName('question-title')[0].className += " answer-visible";
      this.getElementsByClassName('question-icon')[0].className += " answer-visible";
      this.parentNode.className += " answer-visible";
      this.parentNode.getElementsByClassName('question-answer')[0].className += " answer-visible";
    }
      
  })
}

function getQuestionElements() {
  const currentItem = document.getElementsByClassName('question-item answer-visible');
  const currentTitle = document.getElementsByClassName('question-title answer-visible');
  const currentIcon = document.getElementsByClassName('question-icon answer-visible');
  const currentAnswer = document.getElementsByClassName('question-answer answer-visible');
  return [currentItem, currentTitle, currentIcon, currentAnswer];
}