//Promise

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
            },2000) //หน่วงเวลา 3 วิ
        })
    }

    //การเรียกใช้งาน ปกติ
/* 
    downloading(url1).then(result => { //เรียกใช้งานฟังก์ชั่น
        console.log(result);
    }).catch(err => { //ถ้าผิดพลาดให้ทำงาน catch
        console.log(err);
    }).finally(() =>{
        console.log("จบการทำงาน")
    })
*/

    //เรียกใช้งานหลายๆตัว 
    downloading(url1).then(function(result){ //เรียกใช้งาน url1
        console.log(result) //แสดงผล
        return downloading(url2) //ส่งค่าออกไป เรียกใช้งาน url2
    }).then(function(result){ //ทำงาน url2
        console.log(result)
        return downloading(url3) //ส่งค่า url3
    }).then(function(result){ //ทำงาน url3
        console.log(result)
    }).finally(() =>{ //จบการทำงาน
        console.log("จบการทำงาน") 
    })