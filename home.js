let he=document.getElementById("varun");
// he.innertext=he.innertext+"varun";
let btn=document.querySelector("#btn");
btn.onclick=()=>{
    console.log("varun");
    he.innerText = "black";
}
let hereos=['varun','arun','vedic','gupta'];
hereos.splice(1,0,'verma');
console.log(hereos);
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
