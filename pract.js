let h1=document.querySelector("h1");
h1.addEventListener("mouseout", ()=>{
    console.log(`mouse was here at ${h1.innerText}`);
})

// let input=document.querySelector("input");
// input.addEventListener("keypress", ()=>{
//     console.log(`this, ${input.value} key was pressed`);
// })

let elem=document.querySelector("div#scroll-box");
let out=document.querySelector("p#output");

// elem.addEventListener("scroll", ()=>{
//     out.textContent="Scroll event fired";

//     setTimeout(()=>{
//         out.textContent="Waiting on event to get fired!"
//     }, 5000);
// });

// let btn= document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     btn.style.background="green";
// });

let inp= document.querySelector("input");
let btn=document.querySelector("button#submit");
let ul=document.querySelector("ul");

if(!ul){
    ul=document.createElement("ul");
    document.body.appendChild(ul);
}


btn.addEventListener("click", ()=>{
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
});

let bn=document.querySelector("button#remove");
bn.addEventListener("click", ()=>{
    if(ul.lastChild){
        ul.removeChild(ul.lastChild);
    }
})

