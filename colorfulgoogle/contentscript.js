// console.log("working")
var x = document.querySelector("body");
var random = Math.random();
x.addEventListener("mousemove",(e)=>{
    // console.log("moved");
    // console.log(e.screenX,e.screenY);
    let xcodd= (e.screenX>255) ? e.screenX/3 : e.screenX;
    let ycodd= (e.screenY>255) ? e.screenY/3 : e.screenY;   
    let randmcodd= (random<0.5) ? e.screenX : e.screenY;   
    document.body.style.backgroundColor =`rgb(${randmcodd},${xcodd},${ycodd})`;
})
