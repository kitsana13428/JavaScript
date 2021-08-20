//Array Reduce

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//array.reduce ((ค่าที่ถูกประมวลผล, e) => {}, ค่าเริ่มต้น) 

const summation = data.reduce((value,e) => {
    const total = e + value //value = 0
    return total 
}, 0); //0 = value

console.log(summation); //ผลลัพธ์คือ ลูปเอามาบวกกัน = 45