const firebaseConfig = {
    apiKey: "AIzaSyDB2AJJw3qQrKx8bh5SmAUUmgp9P0ZCJ1s",
    authDomain: "programming-classes.firebaseapp.com",
    databaseURL: "https://programming-classes.firebaseio.com",
    projectId: "programming-classes",
    storageBucket: "programming-classes.appspot.com",
    messagingSenderId: "689225661490",
    appId: "1:689225661490:web:c884c123522b331a7e902b",
    measurementId: "G-SGQYSTPVXD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.database();

// const userId =  22;

const form = document.querySelector(".main")
const result = document.querySelector(".result")

const [innerForm1, innerForm2] = document.querySelectorAll(".main form")

const genderInput = document.querySelectorAll(".gender");
const q1Input = document.querySelectorAll(".ques1");
const q2Input = document.querySelectorAll(".ques2");
 
const clearForm = () => {
  form.reset()
  innerForm1.reset()
  innerForm2.reset()
}

clearForm()

form.addEventListener('submit', event => {
  
  event.preventDefault()

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;
  const Qualf = document.getElementById("Qualf").value;
  
  let gender, q1Ans, q2Ans;

  for( let i=0; i<3 ; i++ ) {
    if ( genderInput[i].checked ) {
      gender = genderInput[i].value;
      break
    }
  }

  for( let i=0; i<2 ; i++ ) {
    if ( q1Input[i].checked ) {
      q1Ans = q1Input[i].value;
      break
    }
  }

  for( let i=0; i<2 ; i++ ) {
    if ( q2Input[i].checked ) {
      q2Ans = q2Input[i].value;
      break
    }
  }

  const payload = {
    name, email, mobile, dob, gender, Qualf,
    ques1: q1Ans,
    ques2: q2Ans
  }


  db
  .ref(`data/testing/`)
  .push(payload)
  .then( resp => {
    result.innerHTML = `<p>Registration Successful!</p>`
    form.reset();
  })
  .catch(err => console.error(err))

  clearForm()

})