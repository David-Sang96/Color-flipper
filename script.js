"use strict";

const container = document.querySelector(".container");
const text = document.querySelector("h2");
const buttons = document.querySelectorAll(".btn");

const colors = ["#FE0000","#9EDDFF","#79AC78","#DA0C81"];
const bgColors = ["#8C3333","#6499E9","#618264","#940B92"]

buttons.forEach(btn => btn.addEventListener("click",()=>{
 switch (btn.dataset.name){
  case "red":
  text.style.color = colors[0];
  container.style.backgroundColor = bgColors[0];
  break;
  case "blue":
    text.style.color = colors[1];
    container.style.backgroundColor = bgColors[1]
  break;
  case "green":
    text.style.color = colors[2];
    container.style.backgroundColor = bgColors[2]
  break;
  case "pink":
    text.style.color = colors[3];
    container.style.backgroundColor = bgColors[3]
 }
}))

