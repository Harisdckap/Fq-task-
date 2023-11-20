"use strict"


let questions = document.querySelectorAll(".question");

questions.forEach((con) => {
//   console.log(con);
  let btn = con.querySelector(".question-btn")

  btn.addEventListener("click", function () {
    questions.forEach((con_1) => {
      // console.log(con_1);
      // console.log(con);
      if (con_1 == con) {
        con.classList.toggle("para")
      }
      else {
        con_1.classList.remove("para")
      }
    })
  })
})





















//way 2

// let bts=document.querySelectorAll("button")
// let hideContent=document.querySelectorAll(".Ans")

// bts.forEach((button,index)=>{
//   // console.log(button);//three buttons
//   // console.log(index);//three indexs
//       button.addEventListener("click",()=>{
//         hideContent.forEach((val,newind)=>{
          
//           // console.log(hideContent);//para graph
//             if(index==newind)
//             {
//                val.classList.toggle("para")
//                button.classList.toggle("para")
//             } 
//             else{
//                val.classList.remove("para")
//           }
//         })
  
//       })
// })


























































// let div=document.createElement("div");

// div.setAttribute("id","Data")
// let div1=document.getElementById("Data")

// let hr=document.createElement("hr");
// div.append(hr)
  


// let button = document.querySelectorAll("button")
// let button1=document.getElementById("btn-1")
// let conts1=document.getElementById("content-1")
// let conts2=document.getElementById("content-2")
// let conts3=document.getElementById("content-3")


// console.log(button);


// button.forEach((btn)=>{
//               btn.addEventListener("click",()=>{
//                  if(button[0]==btn){
//                 conts1.classList.remove("con_1")
//                 button[0].innerText="-"
                
//               }
//                else if(button[1]==btn){
//                 conts2.classList.remove("con_1")
//                 button[1].innerText="-"
//               }
//              else  if(button[2]==btn){
//                 conts3.classList.remove("con_1")
//                 button[2].innerText="-"
//               }
      
//               })
// })

// button.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if(btn.parentElement.lastChild.innerHTML == div.innerHTML){
//       btn.parentElement.lastChild.remove()
//       btn.innerHTML = "+"
//     }
//     else {
//       if (btn == btn) {
      
//         div.lastChild.remove()
//         div.append(hr, p[0])
//         btn.parentElement.append(div)
//         btn.innerHTML= "-"
//         button[1].innerHTML = "+";
//         button[2].innerHTML = "+";
//       }
     
//     }
//   })
// })



       

// function add(x){
// console.log(x);
//   if(x.parentElement.lastChild.innerHTML == div.innerHTML){
//       x.parentElement.lastChild.remove()
//       console.log(div.innerHTML);
//       x.innerHTML="+"
//   }

//   else{
  
//    if(button[0]==x){
//       div.lastChild.remove()
//       div.append(hr,p[0])
//       x.parentElement.append(div)
//       x.innerHTML="-"
//       button[1].innerHTML="+"
//       button[2].innerHTML="+"
//     }



//    else if(button[1]==x){
//     div.lastChild.remove()
//     div.append(hr,p[1])
//       x.parentElement.append(div)
//       x.innerHTML="-"
//       button[0].innerHTML="+"
//       button[2].innerHTML="+"
//     }
    
//     else{
//       div.lastChild.remove()
//       div.append(hr,p[2])
//       x.parentElement.append(div)
//       x.innerHTML="-"
//       button[1].innerHTML="+"
//       button[0].innerHTML="+"
//     }
//   }


// }
