$(document).ready(function(){
  var synth = window.speechSynthesis;

var check = document.querySelector('#quote-switch')
var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var author = document.querySelector('.author');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');
var interval = document.querySelector('#interval');
var intervalValue = document.querySelector('.interval-value')

var voices = [];

document.getElementById('submit').addEventListener("submit", function(event){
  event.preventDefault();
}, false);

function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

// inputForm.onsubmit = function(event) {
//   event.preventDefault();
//
  // var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  // for(i = 0; i < voices.length ; i++) {
  //   if(voices[i].name === selectedOption) {
  //     utterThis.voice = voices[i];
  //   }
  // }
  //
  //
  // utterThis.pitch = pitch.value;
  // utterThis.rate = rate.value;
  //
  //
  // synth.speak(utterThis);


//   utterThis.onpause = function(event) {
//       var char = event.utterance.text.charAt(event.charIndex);
//       console.log('Speech paused at character ' + event.charIndex + ' of "' +
//       event.utterance.text + '", which is "' + char + '".');
//     }
//
//     inputTxt.blur();
// }
var quotes = ["This is a quote about the brain... Not a very good one, admittedly",
              "There's a fine line between genius and insanity. I have erased this line.",
              "It takes a lot of time to be a genius. You have to sit around so much, doing nothing, really doing nothing.",
              "People who boast about their I.Q. are losers.",
              "Genius is the ability to put into effect what is on your mind.",
              "You can't change who you are, but you can change what you have in your head, you can refresh what you're thinking about, you can put some fresh air in your brain.",
              "The human brain has 100 billion neurons, each neuron connected to 10 thousand other neurons. Sitting on your shoulders is the most complicated object in the known universe.",
              "Our minds influence the key activity of the brain, which then influences everything; perception, cognition, thoughts and feelings, personal relationships; they're all a projection of you.",
              "I'm crazy, I'm nuts. Just the way my brain works. I'm not normal. I think differently.",
              "The brain is wider than the sky.",
              "The brain is like a muscle. When it is in use we feel very good. Understanding is joyous.",
              "When I look at the human brain I'm still in awe of it.",
              "Everything we do, every thought we've ever had, is produced by the human brain. But exactly how it operates remains one of the biggest unsolved mysteries, and it seems the more we probe its secrets, the more surprises we find.",
              "The human brain had a vast memory storage. It made us curious and very creative. Those were the characteristics that gave us an advantage - curiosity, creativity and memory. And that brain did something very special. It invented an idea called 'the future.'",
              "With its billions of interconnected neurons, whose interactions change from millisecond to millisecond, the human brain is an archetypal complex system.",
              "Neuroscience is by far the most exciting branch of science because the brain is the most fascinating object in the universe. Every human brain is different - the brain makes each human unique and defines who he or she is.",
              "An ultimate joint challenge for the biological and the computational sciences is the understanding of the mechanisms of the human brain, and its relationship with the human mind.",
              "I was taught that the human brain was the crowning glory of evolution so far, but I think it's a very poor scheme for survival.",
              "Bad things happen. And the human brain is especially adept at making sure that we keep track of these events. This is an adaptive mechanism important for survival.",
              "The human brain is probably one of the most complex single objects on the face of the earth; I think it is, quite honestly.",
              "The human brain has evolved the capacity to impose a narrative, complete with chronology and cause-and-effect logic, on whatever it encounters, no matter how apparently random.",
              "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
              "Now, we used to think the brain was like a computer. But now, we realize that's not true. There's no programming of the brain. There's no Windows. And we think the brain is more like a large corporation. Because think of the unconscious mind. In a corporation, you have subdivisions which operate independently of the main office."
            ];

var quoteAuthor = ["anonymous tester",
              "Oscar Levant",
              "Gertrude Stein",
              "Stephen Hawking",
              "F. Scott Fitzgerald",
              "Ernesto Bertarelli",
              "Michio Kaku",
              "Deepak Chopra",
              "Justin Bieber",
              "Emily Dickenson",
              "Carl Sagan",
              "Ben Carson",
              "Niel deGrasse Tyson",
              "David Suzuki",
              "Miguel Nicolelis",
              "Stanley B. Prusiner",
              "Tony Hoare",
              "Kurt Vonnegut",
              "David Perlmutter",
              "Bill Viola",
              "Robin Marantz Henig",
              "Albert Einstein",
              "Michio Kaku"
            ];

pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}


interval.onchange = function() {
  intervalValue.textContent = interval.value;
  quoteloop();
}


// check.onchange = function(){
//   while (check.checked === true){
//     console.log('do we get here?');
//       seTimeout(function(){


function playQuote(){
      var getRand = Math.floor(Math.random()*quotes.length);
      // console.log(getRand);
      // console.log(quotes[getRand]);
      inputTxt.innerHTML = quotes[getRand];
      author.innerHTML = quoteAuthor[getRand];
      var utterThis = new SpeechSynthesisUtterance(quotes[getRand]);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for(i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }


      utterThis.pitch = pitch.value;
      utterThis.rate = rate.value;


      synth.speak(utterThis);

      utterThis.onpause = function(event) {
          var char = event.utterance.text.charAt(event.charIndex);
          console.log('Speech paused at character ' + event.charIndex + ' of "' +
          event.utterance.text + '", which is "' + char + '".');
        }

        inputTxt.blur();
        console.log("end playQuote");
      }

      function quoteloop() {
        console.log('Change detected');
        if (check.checked === true){
          console.log("check is checked");
          console.log(interval.value);
          var quoteOn = setInterval(playQuote, interval.value*1000);
          var i=0;
          var newloop = setInterval(function(){

            if (check.checked === false){
               console.log("check is unchecked");
               clearInterval(quoteOn);
               clearInterval(newloop);
               synth.cancel();
          }}, 1000)
          // while (i==0){
          //   console.log("im in this loop");
          //   if (check.checked === false){
          //     console.log("check is unchecked");
          //     clearInterval(quoteOn);
          //     synth.cancel();
          //     i++;
          //   }
          // }
        }
        else{
          console.log("check is unchecked");
        }
      }

  check.onchange = function(){
    if(check.checked){
    playQuote();
  }
    quoteloop();
  }




})
