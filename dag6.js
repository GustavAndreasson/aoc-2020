// del 1
document.body.innerText.trim().split("\n\n").map(r=>r.split("").filter(l=>l!="\n")).map(r=>new Set(r).size).reduce((s,i)=>s+i)

// del 2
document.body.innerText.trim().split("\n\n").map(r=>r.split("\n").map(c=>c.split("")).reduce((res,s)=>res?s.filter(a=>res.includes(a)):s,null).length).reduce((s,i)=>s+i)
