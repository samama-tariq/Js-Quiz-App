var questions = [
    {
          qs: "In which planet do we live ?\n(a) Earth\n\ (b) Mars\n(c) Mercury",
          answer: "a"
    },
    {
         qs: "What are we?\n(a) Alien\n\ (b) Animal\n(c) Human",
         answer: "c"
    },
    {
         qs: "How many senses we have?\n(a) five\n\ (b) six\n(c) seven",
         answer: "a"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].qs);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);