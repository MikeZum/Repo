(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let s;s=setInterval((()=>{let e=(()=>{let e=(new Date("24 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),m=e.hours<10?"0"+e.hours:e.hours,i=e.minutes<10?"0"+e.minutes:e.minutes,r=e.seconds<10?"0"+e.seconds:e.seconds;e.timeRemaining>0?(t.textContent=m,n.textContent=i,o.textContent=r):(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(s))}),1e3)})()})();