// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let word = companyName.split("")
console.log(word.length)
for(let i = 0; i < word.length ;i++)
    reversedCompanyName = companyName[i]+ reversedCompanyName


console.log(reversedCompanyName);
