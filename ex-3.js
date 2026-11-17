// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here
for (const student of scores) {

    if (student < minScore) {
        minScore = student
        
    }
    
};

console.log(minScore);
