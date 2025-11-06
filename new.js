// if else method

let alpha = 'i';

if(  alpha== 'a' ||alpha=="A" 
    || alpha=='e'||alpha=='E'
    || alpha=='i'||alpha=='I'
    || alpha=='o'||alpha=='O'
    || alpha=='u'|| alpha=='U'){
    console.log(alpha + ' is a vowel')
}
else{
    console.log(alpha + " is a  consonant ")
}


// switch method

let alph = 'A';

switch(alph){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':

    console.log(alph + " is a vowel")
    break;

    default:
        console.log(alph + " is a consonant")
}


// this is function

function nice(name) {

    console.log('hey my name is '+ name +' and youres ?')
    console.log('so you name is '+ name + ' right ?')
    
}
nice ('harry bhai')
nice ('ashok')


const func1 = (x)=>{
    console.log('the arrow function is output is;', x)
};
func1(56);
func1(78);
func1(90);
func1(100);
func1(1000);

// this is array some method

let animals = ["dog", "cat", "tiger","snake"]
console.log(animals)

// array index always start from 0 not from 1
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])
console.log(animals[4])


// pop method to remove last value from index
let remove = animals.pop();
console.log(remove)
console.log(animals)

// push method to addd new value in our index

let add = animals.push("cow")

console.log(add)
console.log(animals)

// join method to join something into value
let join = animals.join(" Or ")
console.log(join) 

// to string turning into string 

let hey = animals.toString();
console.log(hey)

// shift method remove first  value when to use when we have to remove first elemnt of array

let fru = ["mango", "apple", "banana"];
let del =fru.shift();
fru.unshift("papaya");
//  unshif method this is for when we have to add new valu in the array of first
 console.log(fru);
console.log(del);

// index of and inculeds new method
let nums =[10 , 20 , 30 , 40 , 50 ];
// this is for to find index of number 
console.log(nums.indexOf(50));
// this is for tp show availble value in arrays
console.log(nums.includes(40));

// new topic will be our is Object

let person = {
    name: "Jhon",
    Age :30, 
    City: "dehradun"
};

// We can access values in two ways 
// first Brackect Notation 
console.log(person["name"]);

// second Dot Notaion
console.log(person.Age);

// this is for to add new key and object
person.country= "india";
console.log(person);

// Update an exiting key
person.Age=20;
console.log(person);

// this is for delete a Property
delete person.City;
console.log(person);


// from this we made a object with for loop and it shows all key of an object
let laptop = {
    brand : "hp",
    model : "255 G9",
    processor : "ryzen 5 5625u",
    ram :"8gb",
};

for ( let key in laptop) {
console.log(key + " : " +laptop[key]);
    
}