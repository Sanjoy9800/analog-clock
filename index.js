const hr=document.getElementById('hour');
const mi=document.getElementById('min');   
const se=document.getElementById('sec');
const sound = new Audio('sound.mp3');

const disTime=()=>{
  let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRotation=30*hh + mm/2;
  let mRotation=6*mm;
  let sRotation=6*ss;

  hr.style.transform= `rotate(${hRotation}deg)`;
  mi.style.transform= `rotate(${mRotation}deg)`;
  se.style.transform= `rotate(${sRotation}deg)`;


  
 
  sound.currentTime = 0; 
  sound.play();

//  let sound=new Audio('sound.mp3');
//  sound.play();
  

}


setInterval(disTime,1000)


