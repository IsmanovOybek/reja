
// F task

const get = function (e) {
    const b = e.split("")
    const c = new Set(b)
    return c.size < b.length

}

console.log(get("hello"))










// E task

// const getReverse = function (e) {
//     return e.split('').reverse().join("")

// }
// console.log(getReverse("hello"))







//d task

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     vaqt() {
//         return new Date().toLocaleTimeString().slice(0, 5);
//     }

//     qoldiq() {
//         console.log(`Hozir: ${this.vaqt()} da ${this.non} ta non, ${this.lagmon} ta lagmon, ${this.cola} ta cola mavjud.`);
//     }

//     sotish(lagmonSoni, nonSoni, colaSoni) {
//         if (this.lagmon >= lagmonSoni && this.non >= nonSoni && this.cola >= colaSoni) {
//             this.lagmon -= lagmonSoni;
//             this.non -= nonSoni;
//             this.cola -= colaSoni;
//             console.log(`Soat ${this.vaqt()} da ${lagmonSoni} ta lag'mon, ${nonSoni} ta non, ${colaSoni} ta cola sotildi.`);
//         } else {
//             console.log(`Soat ${this.vaqt()} da xatolik: Yetarli mahsulot yo'q!`);
//         }
//     }

//     qabul(lagmonSoni, nonSoni, colaSoni) {
//         this.lagmon += lagmonSoni;
//         this.non += nonSoni;
//         this.cola += colaSoni;
//         console.log(`Soat ${this.vaqt()} da ${lagmonSoni} ta lag'mon, ${nonSoni} ta non, ${colaSoni} ta cola qabul qilindi.`);
//     }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish(3, 1, 1);
// shop.qabul(7, 9, 4);
// shop.qoldiq();
// shop.sotish(1, 1, 1);


























// c task
// function checkground(a, b) {
//     const c = [...a].every(ch => b.includes(ch));
//     return c;
// }
// const g = checkground("salom", "smlao")
// console.log(g)





//B Task

// function countDigits(a) {

//     const list = a.split('').filter(el => el >= "0" && el <= "9")
//     return list.length
// };
// console.log(countDigits("3fvgb2grvr5dgfj2dn69"));



// A task

// const countLetter = function (a, b) {
//     let count = 0
//     for (let i = 0; i < b.length; i++) {
//         if (b[i] === a) {
//             count++
//         }
//     } return count
// }

// console.log(countLetter('a', "assalomualekum"));









// console.log("jak ma maslahati");
// const list = [
//     "yaxwi talaba boling",//odan 20
//     "togri bowliq tanlab va kopro hato qiling", //20-20
//     "uzizni iwlarizni boshlang",//30-40
//     "uziz kucli bolgan sohada iwlani qiling",//40-50
//     "yowlaga investitsiya qoling",//50-60
//     "endi dam oling,foydasi yo" //60~
// ];
// //calbak qismi


// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("raqam kiriting", null);
//     else if (a <= 20) callback(null, list[0])
//     else if (a > 20 && a <= 30) callback(null, list[1])
//     else if (a > 30 && a <= 40) callback(null, list[2])
//     else if (a > 40 && a <= 50) callback(null, list[3])
//     else if (a > 50 && a <= 60) callback(null, list[4])
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);

//     }
// }
// console.log("pass 0");

// maslahatBering(75, (err, data) => {
//     if (err) console.log("error:", err);
//     console.log("javob:", data);
// });
// console.log('pass 1');

///--------------------------------------------------------------------------------------------------------------------
// console.log("jak ma maslahati");
// const list = [
//     "yaxwi talaba boling",//odan 20
//     "togri bowliq tanlab va kopro hato qiling", //20-20
//     "uzizni iwlarizni boshlang",//30-40
//     "uziz kucli bolgan sohada iwlani qiling",//40-50
//     "yowlaga investitsiya qoling",//50-60
//     "endi dam oling,foydasi yo" //60~
// ];
// //ASYNC function qismi
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("raqam kiriting");
//     else if (a <= 20) return list[0]
//     else if (a > 20 && a <= 30) return list[1]
//     else if (a > 30 && a <= 40) return list[2]
//     else if (a > 40 && a <= 50) return list[3]
//     else if (a > 50 && a <= 60) return list[4]
//     else {
//         return list[5]
//         // setTimeout(function () {
//         //     callback(null, list[5]);
//         // }, 5000);

//     }
// }
// //call via then /catch
// console.log("pass 0");

// maslahatBering(78)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("error:", err);

//     })
// console.log('pass 1');


// //call via asyn / await
// async function run() {
//     let javob = await maslahatBering(20)
//     console.log(javob);
//     javob = await maslahatBering(31)
//     console.log(javob);
//     javob = await maslahatBering(41)
//     console.log(javob);
// }
// run()

//--------------------------------------------------------------------------------------------------------------------------------
// console.log("jak ma maslahati");
// const list = [
//     "yaxwi talaba boling",//odan 20
//     "togri bowliq tanlab va kopro hato qiling", //20-20
//     "uzizni iwlarizni boshlang",//30-40
//     "uziz kucli bolgan sohada iwlani qiling",//40-50
//     "yowlaga investitsiya qoling",//50-60
//     "endi dam oling,foydasi yo" //60~
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("raqam kiriting");
//     else if (a <= 20) return list[0]
//     else if (a > 20 && a <= 30) return list[1]
//     else if (a > 30 && a <= 40) return list[2]
//     else if (a > 40 && a <= 50) return list[3]
//     else if (a > 50 && a <= 60) return list[4]
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5])
//             }, 5000)
//         })

//     }
// }

// // call via asyn /await
// async function run() {
//     let javob = await maslahatBering(20)
//     console.log(javob);
//     javob = await maslahatBering(61)
//     console.log(javob);
//     javob = await maslahatBering(41)
//     console.log(javob);
// }
// run()



// const promise = new Promise(function (resolve, reject) {
//     let yosh = 12
//     if (yosh >= 18) {
//         resolve("voyaga yetgansiz")
//     } else {
//         reject("hali gudaksz")
//     }
// })
// promise.then((data) => {
//     console.log(data);

// }
// ).catch((err) => {
//     console.log(err);

//})
//--------------------------------------------------------------------------------------------------------------------------------
// console.log("jak ma maslahati");
// const list = [
//     "yaxwi talaba boling",//odan 20
//     "togri bowliq tanlab va kopro hato qiling", //20-20
//     "uzizni iwlarizni boshlang",//30-40
//     "uziz kucli bolgan sohada iwlani qiling",//40-50
//     "yowlaga investitsiya qoling",//50-60
//     "endi dam oling,foydasi yo" //60~
// ];
// //callback
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("raqam kiriting", null);
//     else if (a <= 20) callback(null, list[0])
//     else if (a > 20 && a <= 30) callback(null, list[1])
//     else if (a > 30 && a <= 40) callback(null, list[2])
//     else if (a > 40 && a <= 50) callback(null, list[3])
//     else if (a > 50 && a <= 60) callback(null, list[4])
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 5000);

//     }
// }
// console.log("pass 0");

// maslahatBering(75, (err, data) => {
//     if (err) console.log("error:", err);
//     console.log("javob:", data);
// });
// console.log('pass 1');

// console.log("===== EXECUTE =====");

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//     if (b === 0) {
//         callback("Mahraj nolga teng bololmaydi", null);
//     } else {
//         callback(null, a % b);
//     }
// }

// // CALL
// qoldiqliBolish(10, 3, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("data:", data);
//     }
// });
