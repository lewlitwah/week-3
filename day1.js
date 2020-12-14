//defining a function

function sayHello(){
  console.log("Hello")
}
//calling or invoking a function
sayHello();

//function with parameters
function sayGoodbye(name){
  console.log("Goodbye "+name);
}
sayGoodbye("joshua");
sayGoodbye("wah");

// function with return statement
function calculateSum(num1,num2){
  return num1+num2;
}
console.log(calculateSum(2,3));
console.log(calculateSum(5,9));

//function with multiple return statement

function calculateAreaAndVolume(length,width,height){
  return [length*width, length*width*height];
}

console.log(calculateAreaAndVolume(2,3,4));
console.log(calculateAreaAndVolume(4,5,6));

function minMaxAvg(num1,num2,num3){
  //1) i assume num1 is min and num1 is max..
  var min;
  var max;
  // you start with adding the avg 's formula
  var avg = (num1+num2+num3)/3;
  // foemula for min
  if (num1 > num2){
   if (num1 > num3){
      max = num1;
  } else{
    max = num3;
  }
  } 
  else {
    if (num2 > num3){
      max = num2;
    }
    else {
      max = num3
    }
  }
  return [min, max, avg]
}

console.log(minMaxAvg(2,3,4))
console.log(minMaxAvg(4,0,2))
console.log(minMaxAvg(-1,3,-4))



//Array

var scores = [80,90,88,70,60,78];

console.log(scores[0]);
console.log(scores[1]);

// Iterating on array

for (var i = 0; i < scores.length; i++){
  console.log(scores[i]);
}
console.log(scores.length);

scores.push(90)
console.log(scores.length);
console.log(scores);

function minMaxAvg(arr){
  var min;arr[0]
  var max;arr[0]
  var avg; (arr)/6
  var sum = 0
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  avg = sum / arr.length;
  
  for (var i = 0; i < arr.length; i++){
    if (min > arr[i]){
      min = arr[i];
    }
  }
  
  for (var i = 0; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }
  }
  
  return [min,max,avg];
}
console.log(minMaxAvg([3,1,9,0,-3,2]));
console.log(minMaxAvg([20,10,32,100,9,-40,80,10]));
console.log(minMaxAvg([111,101,121]));

            
