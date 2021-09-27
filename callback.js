
function calculate(x,y,callback){ //เอา callback มาร่วมใช้งานด้วย
    console.log ("กำลังคำนวณ....") //แสดงข้อความ กำลังรอการทำงาน
    setTimeout(() => { // settime ให้หน่วงเวลา แล้วค่อยทำตามเงื่อนไข
        const sum = x+y
        callback (sum) // เอาค่า sum โยนใส่ไปใน callback -> result  
    },3000) //ทำให้หน่วงเวลา 3 วินาที
}

calculate(100,20,function(result){ //เรียกใช้งานฟังก์ชั่น และใช้งาน callback
    console.log(`ผลบวก = ${result}`)
})


