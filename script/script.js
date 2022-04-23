// try {
//     var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     var recognition = new SpeechRecognition();
// } catch (e) {
//     console.error(e);
//     $('.no-browser-support').show();
//     $('.app').hide();
// }


// var noteTextarea = $('#textareaa');
// var instructions = $('#recording-instructions');
// var notesList = $('ul#notes');

// var noteContent = '';

// // Get all notes from previous sessions and display them.
// // var notes = getAllNotes();
// // renderNotes(notes);



// /*-----------------------------
//       Voice Recognition 
// ------------------------------*/

// // If false, the recording will stop after a few seconds of silence.
// // When true, the silence period is longer (about 15 seconds),
// // allowing us to keep recording even when the user pauses. 
// recognition.continuous = true;

// // This block is called every time the Speech APi captures a line. 
// recognition.onresult = function(event) {

//     // event is a SpeechRecognitionEvent object.
//     // It holds all the lines we have captured so far. 
//     // We only need the current one.
//     var current = event.resultIndex;

//     // Get a transcript of what was said.
//     var transcript = event.results[current][0].transcript;

//     // Add the current transcript to the contents of our Note.
//     // There is a weird bug on mobile, where everything is repeated twice.
//     // There is no official solution so far so we have to handle an edge case.
//     var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

//     if (!mobileRepeatBug) {
//         noteContent += transcript;
//         noteTextarea.val(noteContent);
//     }
// };

// recognition.onstart = function() {
//     instructions.text('Voice recognition activated. Try speaking into the microphone.');
// }

// recognition.onspeechend = function() {
//     instructions.text('You were quiet for a while so voice recognition turned itself off.');
// }

// recognition.onerror = function(event) {
//     if (event.error == 'no-speech') {
//         instructions.text('No speech was detected. Try again.');
//     };
// }

// // working of button

// $('#start-record-btn').on('click', function(e) {
//     if (noteContent.length) {
//         noteContent += ' ';
//     }
//     recognition.start();
// });

// // insert the text inside the text area with the noteContent variable.
// noteTextarea.on('input', function() {
//     noteContent = $(this).val();
// });

// // var formmm = document.getElementById("#frm");

// function sweetal(){
//     let timerInterval
// Swal.fire({
//   title: 'Listening',
//   html: 'Speak out in <b></b> milliseconds.',
//   timer: 10000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading()
//     const b = Swal.getHtmlContainer().querySelector('b')
//     timerInterval = setInterval(() => {
//       b.textContent = Swal.getTimerLeft()
//     }, 100)
//   },
//   willClose: () => {
//     clearInterval(timerInterval)
//   }
// }).then((result) => {

//     // for dismiss of alert
//   recognition.stop();


//   let str = document.getElementById("textareaa").value;

//   if(str !== ""){
//   moveObject();
//   console.log(str)
//   }

  

//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log('I was closed by the timer')
//   }
// })
// }


// function validate(e) {
//   let str = document.getElementById("textareaa").value;

//   if(str !== ""){
//     window.location.href = "trial.html";
//   }
//   }

// var input = document.getElementById("textareaa");
// input.addEventListener("keydown", function (e) {
// if (e.key === "Enter") {  
// validate(e);
// }
// });

// // function eraseText() {
// //   document.getElementById("textareaa").value = "";
// // }

// // function moveObject(){
// //   var move = document.getElementById("division");
// //   move.style.top = "50px";
// // }

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result



recognition.onresult = function(event) {
   var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;

    console.log(transcript);
    

     if(transcript !== ""){

      
           
           document.getElementById("textareaa").value = transcript;
           document.getElementById("hell").click();
  }

  swal.close();
};
              
// if ( window.history.replaceState ) {
//   window.history.replaceState( null, null, window.location.href );
// }
function swal12(){
  Swal.fire(
    'Listening ...',
    'We will search for the results soon',
    'question'
  )
  recognition.start();
}

function sweetal(){

  recognition.start();

  let timerInterval;
Swal.fire({
  title: 'Listening ....',
  html: ' We will search for the results soon ',
  // timer: 10000,
  // timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */

  recognition.stop();

  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}