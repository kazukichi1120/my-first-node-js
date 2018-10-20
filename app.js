'use strict';
const number = process.argv[2] || 0;//||はなにも代入されなかった場合は０が代入される
//2はLinuxで代入された値の順番　ex.node(0) app.js(1) 10(2) つまり２番目
let sum = 0;//最初はconstで書いてのちに値が変わることがわかったらletに変える
for (let i = 1; i <= number; i++){//1+2+3+・・・というような関数
    sum = sum + i;
}
console.log(sum);