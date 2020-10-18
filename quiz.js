var answer = [];
  
function check() {
    var score=0;
    var total="";
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    ///////////
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    var str1="Y";
    var str2="N";

    if (q1=="Y") {score++; total = total.concat(str1)} else {total = total.concat(str2);}
    if (q2=="Y") {score++; total = total.concat(str1)} else {total = total.concat(str2);}
    if (q3=="Y") {score++; total = total.concat(str1)} else {total = total.concat(str2);}
    /////////////
    answer.push(total);
    quiz.style.display="none";
    result.style.fontWeight="bold";
    result.style.fontSize="30px";

    result.textContent=`You are not pure at all. Your score is : ${score} An admirable score. Congrats on your hardcoreness if you got a score like this. I did not expect that. But you still have a few things left to do so go get started.`

    var x = document.createElement("IMG");
    x.setAttribute("src", "Picture.jpg");
    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    document.body.appendChild(x);
  
  const fs = require('fs')
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
const jsonString = JSON.stringify(customer)
fs.writeFile('my.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

}


function myFunction() {
    var r = document.getElementById('myText').value;
    if(r === "d") {
        for(var count = 0; count < answer.length; count++) {
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("value", answer[count]);
        document.body.appendChild(y);
        }
    }
}



