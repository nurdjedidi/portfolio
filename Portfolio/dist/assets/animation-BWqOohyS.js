import{_ as i,a as c,b as e,w as a,v as s,c as l,e as d}from"./index-DY6bDXw5.js";const r={class:"explorer"},n={class:"cube-btn"},t={class:"controls"},o={class:"scene"},v={ref:"cube",class:"cube"};const m=i({name:"Animation",data:()=>({isChecked:!1}),methods:{startAnimation(){const i=this.$refs.cube;if(this.isChecked&&i)i.style.animationPlayState="running";else{this.$refs.cube.style.animationPlayState="paused"}},changeColor(){const i=document.querySelectorAll(".face"),c=`rgba(${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, 0.251)`;i.forEach((i=>{i.style.background=c}));const e=document.querySelectorAll(".middle-face"),a=`rgba(${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, 0.3)`;e.forEach((i=>{i.style.background=a}));const s=document.querySelectorAll(".inner-face"),l=`rgba(${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, 0.3)`;s.forEach((i=>{i.style.background=l}));const d=document.querySelectorAll(".innermost-face"),r=`rgba(${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, 0.1)`;d.forEach((i=>{i.style.background=r}))}}},[["render",function(i,m,f,h,u,b){return d(),c("section",null,[e("article",r,[m[6]||(m[6]=e("h2",null,"Animation",-1)),m[7]||(m[7]=e("p",null,"Below is a nice animation that I've made with css keyframes :",-1)),e("article",n,[e("div",t,[a(e("input",{id:"checkbox",type:"checkbox","onUpdate:modelValue":m[0]||(m[0]=i=>u.isChecked=i)},null,512),[[s,u.isChecked]]),e("label",{class:"switch",for:"checkbox",onClick:m[1]||(m[1]=(...i)=>b.startAnimation&&b.startAnimation(...i))},m[3]||(m[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"slider"},[e("path",{d:"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"})],-1)])),e("button",{class:"glowbutton",onClick:m[2]||(m[2]=(...i)=>b.changeColor&&b.changeColor(...i))},m[4]||(m[4]=[l('<div class="wrapper"><div class="circle circle-12"></div><div class="circle circle-11"></div><div class="circle circle-10"></div><div class="circle circle-9"></div><div class="circle circle-8"></div><div class="circle circle-7"></div><div class="circle circle-6"></div><div class="circle circle-5"></div><div class="circle circle-4"></div><div class="circle circle-3"></div><div class="circle circle-2"></div><div class="circle circle-1"></div></div>',1)]))])]),e("div",o,[e("div",v,m[5]||(m[5]=[l('<div class="face front"></div><div class="face back"></div><div class="face right"></div><div class="face left"></div><div class="face top"></div><div class="face bottom"></div><div class="middle-cube"><div class="middle-face middle-front"></div><div class="middle-face middle-back"></div><div class="middle-face middle-right"></div><div class="middle-face middle-left"></div><div class="middle-face middle-top"></div><div class="middle-face middle-bottom"></div><div class="inner-cube"><div class="inner-face inner-front"></div><div class="inner-face inner-back"></div><div class="inner-face inner-right"></div><div class="inner-face inner-left"></div><div class="inner-face inner-top"></div><div class="inner-face inner-bottom"></div><div class="innermost-cube"><div class="innermost-face innermost-front"></div><div class="innermost-face innermost-back"></div><div class="innermost-face innermost-right"></div><div class="innermost-face innermost-left"></div><div class="innermost-face innermost-top"></div><div class="innermost-face innermost-bottom"></div></div></div></div>',7)]),512)])])])}]]);export{m as default};