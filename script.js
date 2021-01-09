
const calc = ()=> {
let grade1 = document.getElementById('sub1').value;
let grade2 = document.getElementById('sub2').value;
let grade3 = document.getElementById('sub3').value;
let grade = "";


var totalGrades =parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)
// alert(totalGrades);

let perc = (totalGrades/30) * 100;
// alert(perc);

if(totalGrades>20)
grade = "A";    
else if(totalGrades>10)
grade = "B";
else
grade = "C";

var Result = document.getElementById('result');
Result.innerHTML = 'Your total is ' + totalGrades + 
                ' and the percentage is '+perc +
                '%, your final score is '+ grade;

}

