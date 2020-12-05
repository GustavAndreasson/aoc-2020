// del 1
document.body.innerText.trim().split("\n").map(r=>parseInt(r.replace(/B|R/g,"1").replace(/F|L/g,"0"),2)).reduce((m,v)=>m>v?m:v)

// del 2
document.body.innerText.trim().split("\n").map(r=>parseInt(r.replace(/B|R/g,"1").replace(/F|L/g,"0"),2)).sort((a,b)=>a>b?1:-1).filter((v,i,a)=>v!=a[i-1]+1)[1]-1
