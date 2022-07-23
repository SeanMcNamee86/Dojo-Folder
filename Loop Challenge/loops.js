//Loop Challenges by Sean McNamee
//function calls have been commented out. 
// To see output remove comment markers.


var a;

function Odds(){
    for(var i = 1; i <= 10; i++ ){
        console.log(2*i - 1);
    }
}

//Odds();

function Multipleof3(){
    for(i = 33; i >= 1; i--){
        console.log(3*i);
    }
}

//Multipleof3();

function sequence(){
    for( i = 4; i > -4; i-=1.5 )
    console.log(i);
}

//sequence();

function sigma(){
    var temp = 0;
    for( i = 1; i< 101;i++){
        temp += i;
    }
        console.log(temp);  
}

//sigma();

function getFactorial(a){
    var product = 1;
    for(i = a; i >= 1; i--){
        product *= i;
    } 
    console.log(product);
}

//getFactorial(12);





