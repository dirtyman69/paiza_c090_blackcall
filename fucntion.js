process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const num = lines[0].split("-");
    const word1 = num[0].split("");
    const word2 = num[1].split("");
    const word3 = num[2].split("");
    const array = word1.concat(word2,word3)
    const arrayNum = array.map(Number);
    let sum = Number(0);
    
    function loop(n){
        if(n == 0){
            sum += Number(24);
        } else {
            sum += (Number(n) + Number(2)) * 2;
        }
    }
    
    for(let i = 0; i < array.length; i++){
        loop(array[i]);
    }

  console.log(sum);
});
