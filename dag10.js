// del 1
let f=n=>document.body.innerText.trim().split("\n").map(r=>parseInt(r)).sort((a,b)=>a-b).map((n,i,a)=>n-(a[i-1]||0)).filter(a=>a==n).length
f(1)*(f(3)+1)

// del 2
("0\n"+document.body.innerText.trim()).split("\n").map(r=>parseInt(r)).sort((a,b)=>a-b).map((n,i,a)=>a.slice(i+1,i+4).filter(v=>v<(a[i]||0)+4).length).reduce((r,v,i,ar)=>r*(ar[i-1]==1?v==2?2:v==3?ar[i+1]==2?4:7:1:1))
