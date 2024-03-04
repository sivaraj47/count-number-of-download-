let counts = document.getElementById("count");
let nofd = 0;

counts.addEventListener("click",()=>{
  nofd++;
  document.getElementById("showcount").innerHTML=nofd;
});
