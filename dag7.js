// del 1
let a={}
document.body.innerText.trim().split("\n").forEach(r=>a[r.split(" contain ")[0].split(" bag")[0]]=r.includes("no other bags")?[]:r.split(" contain ")[1].split(", ").map(c=>[parseInt(c.substr(0,1)), c.substr(2).split(" bag")[0]]))
let c=b=>b==="shiny gold"||a[b].reduce((r,d)=>r||c(d[1]),false)
Object.keys(a).filter(c).length - 1

// del 2
let c2=b=>1+a[b].reduce((r,d)=>r+(d[0]*c2(d[1])),0)
c2("shiny gold")-1
