// del 1
[a,b,c]=document.body.innerText.trim().split("\n\n")
rules=a.split("\n").map(r=>r.split(/(: |\-| or )/)).map(r=>[r[0],r[2],r[4],r[6],r[8]])
c.split(/,|\n/).slice(1).map(n=>parseInt(n)).filter(n=>!rules.some(r=>(n>r[1]&&n<r[2])||(n>r[3]&&n<r[4])))

// del 2
valid=c.split("\n").slice(1).map(t=>t.split(",").map(n=>parseInt(n))).filter(t=>t.every(n=>rules.some(r=>(n>=r[1]&&n<=r[2])||(n>=r[3]&&n<=r[4]))))
pr=rules.map(r=>Array(20).fill(0).map((_,i)=>i).filter(i=>valid.every(t=>(t[i]>=r[1]&&t[i]<=r[2])||(t[i]>=r[3]&&t[i]<=r[4]))))
done=[]
while(done.length<20){
    s=pr.find(f=>f.length==1&&!done.includes(f[0]))[0]
    pr=pr.map(f=>f.length==1?f:f.filter(r=>r!==s))
    done.push(s)
}
pr=pr.flat()
mt=b.split("\n")[1].split(",").map(v=>parseInt(v))
mt[pr[0]]*mt[pr[1]]*mt[pr[2]]*mt[pr[3]]*mt[pr[4]]*mt[pr[5]]
