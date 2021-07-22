//document.write("ทดสอบ");

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
///////////////
//หาเลข คู่ คี่
let x = 1;

if(x%2 == 0){
    console.log("เลขคู่");
}else{
    console.log("เลขคี่");
}
/////////////////
//while loop

let count = 1; //จำนวนนับรอบ
while(count <=3){ //จำนวนรอบลูป = 3
    console.log("สวัสดี"); 
    count++; //ลูปจนกว่าจะครบรอบ
}
//////////////
//for loop
for(let c1=1;c1<=5;c1++){ //ลูปจนกว่าจะครบรอบที่กำหนด = 5
    console.log("ดีครับ");
}
//////////////
//เรียกใช้ function
function f1(){
    console.log("เรียกใช้ฟังก์ชั่น");
}

f1();
//////////////
//function รับค่า
function plusN(x){ //รับค่าเข้ามาใส่ใน x
    console.log("ค่าที่ส่งมา = ",x); //แสดงค่าที่่ส่งมา
}
plusN(1); //ค่าที่ส่งเข้าไปใน func
////////////////
//func รับค่า และ ส่งค่ากลับมา
function summation(x,y){ //รับค่าเข้ามา
    return x+y; //ส่งค่า และการกระทำ ออกไป
}
let sum = summation(10,10); //ส่งค่าไปฟังก์ชั่น
console.log("ผลรวม = ",sum);
////////////////
//แสดงข้อมูล อาเรย์ด้วยลูป
let color = Array("แดง", "ส้ม", "ขาว", "เหลือง"); //ข้อมูลในอาเรย์
let Countcolor = color.length; //สร้างตัวแปรให้ค่าเท่ากับ จำนวนในอาเรย์

for(let i=0;i<=Countcolor;i++){ //ลูปอาเรย์
    console.log("ลำดับที่ = ",i,"สี = ",color[i]);
}
////////////////
//รวมอาเรย์
let n1 = [1,2,3,4];
let n2 = [5,6,7];

n1=n1.concat(n2); //รวมค่าในอาเรย์
console.log(n1);
//////////////
//เรียงลำดับอาเรย์
let points = [10,-1,5,6,20,3];

console.log("ก่อนเรียงลำดับ = ",points);

points.sort(function(a,b){
    return a-b;
});

console.log("หลังเรียงลำดับ = ",points);
////////////////
//javaScript object
let user = { //ข้อมูลในออฟเจก
    name:"cop", 
    age:25, 
    email:"cop@gmail.com",
    displayUser:function(){ //สร้างฟังก์ชั่น
        return "ชื่อพนักงาน = "+ this.name + " อายุ = "+ this.age + " อีเมล์ = "+ this.email;
    }
};

console.log("ชื่อพนักงาน = ",user.name);//เรียกมาแสดงผล
console.log("อายุ = ",user.age);

console.log(user.displayUser()); //เรียกฟังก์ชั่นมาใช้งาน
///////////////////
//comfirm
function deleteData(){
    let result = confirm("คุณต้องการลบใช่ไหม?");
    if(result){
        alert("ลบข้อมูลแล้ว");
        console.log("ลบข้อมูลแล้ว");
    }else{
        alert("ยกเลิกลบข้อมูลแล้ว");
        console.log("ยกเลิกลบข้อมูลแล้ว");
    }
}
///////////////