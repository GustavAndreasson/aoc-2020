// del 1
document.body.innerText.trim().split("\n").map(r=>parseInt(r.substr(0,7).replaceAll("B","1").replaceAll("F","0"),2)*8+parseInt(r.substr(7,3).replaceAll("R","1").replaceAll("L","0"),2)).reduce((m,v)=>m>v?m:v)

// del 2
document.body.innerText.trim().split("\n").map(r=>parseInt(r.substr(0,7).replaceAll("B","1").replaceAll("F","0"),2)*8+parseInt(r.substr(7,3).replaceAll("R","1").replaceAll("L","0"),2)).sort((a,b)=>a>b?1:-1).filter((v,i,a)=>v!=a[i-1]+1)[1]
