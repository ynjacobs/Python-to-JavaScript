// apples = 14
// print(apples)

// print(f"I have {apples} apples.")

const apples = 14;

console.log({apples});
console.log('I have', apples, 'apples');


// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant': "The world's largest land mammal.",
//   'school': 'A place of learning.',
//   'ice cream': 'A delicious milk-based dessert.',
// }

const materials = ['wood', 'metal', 'stone'];

const words = {
    elephant: "The world's largest land mammal.",
    school: 'A place of learning.',
    iceCream: 'A delicious milk-based dessert.'
}

console.log({words});




// num = 16
// if num > 10:
//   print(f"{num} is greater than 10.")
// elif num == 10:
//   print(f"{num} is exactly 10.")
// else:
//   print(f"{num} must be less than 10.")

const num = 16;

if (num > 10) {
    console.log('',num, 'is greater than 10.');
} else if (num === 10){
    console.log('', num, 'is exactly 10');
} else{
    console.log('', num, 'must be less than 10.')
}




// for x in range(0,10):
//   print("Doing the same thing over and over.")

for (x = 0; x < 10; x++) {
    console.log('Doing the same thing over and over');
    console.log({x});
    
}



// base = 5
// for num in range(0,20):
//   print(num + base)

let base = 5;

for (let num = 0; num < 20; console.log(num + base), num++);


// total = 0
// for num in range(0,100):
//   total += num

// print(total)

let total = 0;

for (let num = 0; num < 100; num++){
    
    total += num;
}

console.log(total) 


// for height in range(3,15):
//   if height > 9:
//     print("You can get on the rollercoaster!")
//   else:
//     print("You are too short to ride this rollercoaster.")

let toPrint;
for (let height = 3; height < 15; height++){

   toPrint = height > 9? "You can get on the rollercoaster!" : "You are too short to ride this rollercoaster." ;
console.log(toPrint);
} 








// containers = ['purse', 'wallet', 'backback']
// for container in containers:
//   print(container)

const containers = ['purse', 'wallet', 'backback'];

for (container in containers) {
    console.log(containers[container]);
    
}

// def hello_world():
//   return "Hello world!"

// hello_world()

function helloWorld () {
    return "Hello World";
}

console.log(helloWorld())

// def add(first_num, second_num):
//   return first_num + second_num

// amount = add(5, 7)
// print(amount)

function add (firstNum, secondNum) {

    return firstNum + secondNum;

}

let amount = add(5, 7);
console.log(amount);
