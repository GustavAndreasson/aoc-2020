//del 1
document.body.innerText.trim().split("\n")[1].split(",").filter(v=>v!="x").map(v=>parseInt(v)).map(v=>[v,v-(parseInt(document.body.innerText.trim().split("\n")[0])%v)]).reduce((r,v)=>v[1]<r[1]?v:r,[0,99999]).reduce((r,v)=>r*v)

//del 2
f=1
t=0
document.body.innerText.trim().split("\n")[1].split(",").map((v,i)=>v!="x"?[parseInt(v),i+1]:"x").filter(v=>v!="x").forEach(b=>{
    while((t+b[1])%b[0]>0)t+=f
    f*=b[0]
})
t+1
