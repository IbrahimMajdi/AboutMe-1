'use strict';

//Q1 
var first=prompt('Q1: Have I traveled abroad?');
switch(first.toLowerCase()){
    case 'yes':case 'y':alert('correct');break;
    case 'no': case 'n': alert('Wrong');
}
console.log('Q1 = '+first);


//Q2
var second=prompt('Q2: do I like the soccer ?');
switch(second.toLowerCase()){
    case 'yes':
    case 'y': alert('correct');break;
    case 'no': 
    case 'n': alert('Wrong');
}
console.log('Q2 = '+second);


//Q3
var third=prompt('Q3: Do I have beautiful voice?');
switch(third.toLowerCase()){
    case 'yes':case 'y':alert('Wrong');break;
    case 'no': case 'n': alert('correct');
}
console.log('Q3 = '+third);


//Q4
var fourth=prompt('Q4:Do I like movies ?');
switch(fourth.toLowerCase()){
    case 'yes':case 'y':alert('correct');break;
    case 'no': case 'n': alert('Wrong');
}
console.log('Q4 = '+fourth);


//Q5
var fifth=prompt('Q5: Do I like to smoking ?');
switch(fifth.toLowerCase()){
    case 'yes':case 'y':alert('Wrong');break;
    case 'no': case 'n': alert('correct');
}
console.log('Q5 = '+fifth);


//Q6
var num;
var i=1;   
while (num !== 5 && i<5){
            num = prompt("Guss how many members of my family?")
            console.log(`i${i}`);
            console.log('num'+num);
            if (num > 5){
                alert('high');// it is better to make it more specific {too, slitly}
            } else if (num < 5){
                alert('low'); 
            } else if (num=5){
                alert('That is correct');
            } else {
                alert('You have to type numbrs');
            }
            i++;
        }
    
        
//Q7
var checkAnswer;
var j=1;
while(!checkAnswer && j<7){
    console.log(`j=${j}`);
    console.log(`Answer=${correctAnswer}`);
    var correctAnswer=prompt('Q7: what kind of fruit i like?')     
    var answers=['apple','orange','banana','strawberry','berry'];
        checkAnswer = answers.includes(correctAnswer);
    if (checkAnswer){
        alert('that is correct');
    }else{
        alert('wrong');
    }
    j++;
}
alert('the right answers are :'+answers);

//--------
/*
var answers=['apple','orange','banana','strawberry','berry'];
for(var y=1;y<7;y++){
    var correctAnswer=prompt('Q7: what kind of fruit i like?');
    for(var x=0; x <= answers.length ; x++){
        if (correctAnswer==answers[x]) {
            alert('correct');
        }else{
            alert('not exist')
        }
        }

}

 

switch(correctAnswer){
    case 'apple': alert('correct');break;
    case 'apple': alert('correct');break;
    case 'apple': alert('correct');break;
    case 'apple': alert('correct');break;
    default: alert('not correct');

}
    
*/

