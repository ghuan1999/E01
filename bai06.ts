import {question} from 'readline-sync';

let a: number=Number(question("Nhap a: "));
let tram: number=Math.floor(a/100);
let chuc: number=Math.floor((a-tram*100)/10);
let donVi: number= a%10;
console.log("Đơn vị: ", donVi);
console.log("Chuc: ", chuc);
console.log("Trăm: ", tram);