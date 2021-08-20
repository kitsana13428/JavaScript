// Array filter
//Filter คือการกรองเงื่อนที่เป็น True แล้วส่งข้อมูลเป็นค่าอาเรย์ออกไป
const data = [10, 20, 30, 40, 50, 60, 70, 100];
const result = data.filter(e => e>39); //เลขใดที่มากกว่า 39

console.log(result);

/////////////////
//EX.2
//อาเรย์ที่เป็นออฟเจกต์

const employee = [//ข้อมูลพนักงาน
    {name:"คอป", age:25, salary:35000, department:"โปรแกรมเมอร์"},
    {name:"สมชาย", age:24, salary:25000, department:"การตลาด"},
    {name:"สมหญิง", age:40, salary:40000, department:"ผู้จัดการ"},
    {name:"อำนาจ", age:22, salary:15000, department:"บัญชี"}
];

//กรองคนที่ เงิน > 15000 และ อายุ > 23
const result2 = employee.filter (a =>a.salary>15000).filter(a => a.age>23);
console.log(result2);