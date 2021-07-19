document.write("ทดสอบ");

// alert("แจ้งเตือน");

let name; 
name = "kitsana";
console.log(name); //เอาตัวแปร name มาแสดงในคอนโซล

//const vat = 7; -> const ทำให้ 7 เป็นค่าคงที่ไม่สามารถเปลี่ยนค่าได้
///////////////////
//แปลงค่าตัวอัษรเป้นเลข
let age = parseInt("20");
console.log(age);
console.log(typeof(age));
////////////////////
//Array
let number = Array(1,2,3,4,5,6,7); //ข้อมูลในอาเรย์
console.log(number);
console.log("ตัวที่ 4 = ", number[3]); //เลือกเฉพาะ
//////////////////
//if else
let balance = 5000;
let withDraw = 1000;
console.log("เงินบัญชี = ",balance);
console.log("ถอนเงิน = ",withDraw);
if(withDraw<=balance){ //ถ้ายอดถอน น้อยกว่า หรือ เท่ากับ เงินบัญชี ถึงจะทำงาน
    balance-=withDraw; //บัญชี - ยอดถอน
    console.log("ยอดคงเหลือ = ",balance); //แสดงเงินบัญชีที่ถูกเปลี่ยนค่าไป
}else{
    console.log("ยอดเงินคุณไม่พอ"); //ถ้าไม่ตรงกับเงื่อนไขด้านบน
}
/////////////////
//if elseif หลายเงื่อนไข

let score = 10;

if(score>=10){
    console.log("คะแนนเต็ม");
}else if(score>=5){
    console.log("คะแนนมากกว่าครึ่ง");
}else{
    console.log("คะแนนน้อยกว่าครึ่ง");
}
/////////////////
//if ซ้อน if 
let a1 = 15;

if(a1<=15){
    if(a1==15){
        console.log("ม.3");
    }else if(a1==14){
        console.log("ม.2");
    }else if(a1==13){
        console.log("ม.1");
    }else{
        console.log("น้อยกว่า ม.ต้น");
    }
}else{
    console.log("มากกว่า ม.ต้น");
}