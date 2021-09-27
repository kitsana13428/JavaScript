//Promise

const connect = false //เช็คว่าเชื่อมต่อหรือไม่
const url1 = "cop.raw/file.json"

    function downloading(url){
        return new Promise(function(resolve, reject){
            console.log(`กำลังดาวน์โหลดไฟล์ ${url}`)
            setTimeout(() => { // settime เพื่อหน่วงเวลา
                if(connect){ //ถ้าเชื่อมต่อได้ ให้ทำงาน resolve 
                    resolve(`โหลด ${url} เสร็จสมบูรณ์`)
                }else{ 
                    reject("เกิดข้อผิดพลาด")
                }
            },3000) //หน่วงเวลา 3 วิ
        })
    }

    downloading(url1).then(result => { //เรียกใช้งานฟังก์ชั่น
        console.log(result);
    }).catch(result => { //ถ้าผิดพลาดให้ทำงาน catch
        console.log(result);
    })