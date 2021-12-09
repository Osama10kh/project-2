//get element by id
const form = document.getElementById('form');
const div = document.getElementById('commentsfield');
const ul = document.getElementById('comment');
const deletButton = document.getElementById('deletButton');
const userName = document.getElementById('name');
const feedback = document.getElementById('feedback');
const anonymous = document.getElementById('anonymous')


const addFeedbackBtn = document.querySelector('.add-feedback-btn');
const feedbackContainer = document.querySelector('.feedback-cont');

const xButton = document.querySelector('.x-btn');

function display() {
  feedbackContainer.style.display = 'block';
  addFeedbackBtn.style.display = 'none';
}


function xBtn() {
  feedbackContainer.style.display = 'none';
  addFeedbackBtn.style.display = 'block';
}



// array for feedbackes to save them all inside it
const userFeedback = [];
const userIdentify = [];


// function to creat li element
const createLi = function (text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}


// add event to append the comment on the list
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // local storage
  userFeedback.push(feedback.value);
  userIdentify.push(userName.value);

  localStorage.setItem('user feedback', JSON.stringify(userFeedback));



  if (anonymous.checked) {
    createLi(`anonymous : ${feedback.value}`);
    localStorage.setItem('user name', 'anonymous');

  } else if (userName.value === "") {
    createLi(`no name : ${feedback.value}`);
    localStorage.setItem('user name', 'no name');

  } else {
    createLi(`${userName.value} : ${feedback.value}`);
    localStorage.setItem('user name', JSON.stringify(userIdentify));
  }
})

// get the data from local storage
const feedBackData = JSON.parse(localStorage.getItem('user feedback'));
const userNameData = JSON.parse(localStorage.getItem('user name'));


//loop over data



// clear all data
deletButton.addEventListener('click', function () {
  localStorage.clear();
  ul.innerHTML = '';
})






