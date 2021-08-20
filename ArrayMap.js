// ArrayMap
//ตัวเลข
const number = [10, 20, 30, 40, 50];
const result = number.map( e => { //.map คือการส่งอาเรย์เข้าไป -> แล้วส่งก้อนใหม่อาเรย์ออกมา
    const a = e*2; //ตัวแปร a = e คูณ 2
    return a; //ต้องมีการ return ค่าออกมา
});

console.log(result); //แสดงค่า

//ข้อความ
const weather = ["ฝนตก", "แดดร้อน", "อากาศดี", "หมอกหนา"];
const dayWeather = weather.map((e,i) => { //i = จำนวณนับเริ่มจาก 0
    return `วันที่ ${i+1} สภาพอากาศ = ${e}`
});

console.log(dayWeather);