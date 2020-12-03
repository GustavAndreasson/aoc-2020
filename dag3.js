// del 1
document.getElementsByTagName("pre")[0].innerText.split("\n").slice(0,-1).filter((r,i)=>r[(i*3)%r.length]=="#").length

// del 2
[1,3,5,7].reduce((s,v)=>document.getElementsByTagName("pre")[0].innerText.split("\n").slice(0,-1).filter((r,i)=>r[(i*v)%r.length]=="#").length*s, 1)*document.getElementsByTagName("pre")[0].innerText.split("\n").slice(0,-1).filter((r,i)=>i%2==0&&r[(i/2)%r.length]=="#").length
