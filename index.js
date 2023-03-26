const crypto = require('crypto');

let tc = process.argv[2]

let number1 = Number(process.argv[3]);

let number2 = Number(process.argv[4]);

let answer;

if(tc === 'add'){
    answer = number1 + number2;
}
else if(tc === 'sub'){
    answer = number1 - number2;
}
else if(tc === 'mult'){
    answer = number1 * number2;
}
else if(tc === 'divide'){
    answer = number1/number2;
}
else if(tc === 'sin'){
    answer = Math.sin(number1);
}
else if(tc === 'cos'){
    answer = Math.cos(number1);
}
else if(tc === 'tan'){
    answer = Math.tan(number1);
}
else if(tc === 'random'){
    let length =  number1;
    answer = crypto.randomBytes(length).toString('heans');
}
else if(tc !== 'add' || tc !== 'sub' || tc !== 'mult' || tc !== 'divide' || ope !== 'sin' || tc !== 'cos' || tc !== 'tan' || tc !== 'random'){
    answer = 'Invalid ope !'
}

console.log(answer);