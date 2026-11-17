// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
companyName = companyName.split("");
console.log(companyName);
for(let i = 0; i<companyName.length; i++){
    companyName = "Number "+ i +" character is " +companyName[i]
    console.log(companyName)
}

