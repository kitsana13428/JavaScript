// Async & Await

const connect = true //เช็คว่าเชื่อมต่อหรือไม่
const url1 = "cop1.raw/file.json"
const url2 = "cop2.raw/file.json"
const url3 = "cop3.raw/file.json"

    function downloading(url){
        return new Promise(function(resolve, reject){
            console.log(`กำลังดาวน์โหลดไฟล์ ${url}`)
            setTimeout(() => { // settime เพื่อหน่วงเวลา
                if(connect){ //ถ้าเชื่อมต่อได้ ให้ทำงาน resolve 
                    resolve(`โหลด ${url} เสร็จสมบูรณ์`)
                }else{ 
                    reject("เกิดข้อผิดพลาด")
                }
            },2000) //หน่วงเวลา 2 วิ
        })
    }

// เริ่มใช้งาน 

    async function show(){ //ใช้งาน async ผ่านฟังก์ชั่น
        console.log(await downloading(url1)) //ทำตามลำดับ
        console.log(await downloading(url2))
        console.log(await downloading(url3))
    }

    show();