// del 1
rules=document.body.innerText.trim().split("\n\n")[0].split("\n").map(r=>r.split(": ")).map(r=>[parseInt(r[0]),r[1]]).sort((a,b)=>a[0]-b[0]).map(r=>r[1].split(" | ").map(s=>s.split(" ").map(t=>/[0-9]+/.test(t)?parseInt(t):t))).map(r=>r[0][0][0]=='"'?r[0][0].slice(1,2):r)

valid=(m,rule)=>{
    if(!rule.length)return !m
    let n=rules[rule[0]]
    if(typeof n=="object")return n.some(r=>valid(m,r.concat(rule.slice(1))))
    return m[0]===n&&valid(m.slice(1),rule.slice(1))
}

document.body.innerText.trim().split("\n\n")[1].split("\n").map(m=>valid(m,rules[0][0])).filter(v=>v).length

// del 2
rules[8]=[[42],[42,8]]
rules[11]=[[42,31],[42,11,31]]

document.body.innerText.trim().split("\n\n")[1].split("\n").map(m=>valid(m,rules[0][0])).filter(v=>v).length
