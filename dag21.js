// del 1

algs={}
ings=[]
document.body.innerText.trim().split("\n").map(r=>r.match(/^([a-z ]+) \(contains ([a-z, ]+)\)$/)).map(r=>[r[1].split(" "),r[2].split(", ")]).forEach(r=>{
    r[1].forEach(a=>{
	if(algs[a]){
	    algs[a]=algs[a].filter(v=>r[0].includes(v))
	}else{
	    algs[a]=r[0].slice()
	}
    })
    ings=ings.concat(r[0])
})
ings.filter(i=>!Object.values(algs).flat().includes(i)).length

// del 2

while(Object.values(algs).filter(a=>a.length>1).length){
    Object.keys(algs).forEach(a=>{
	if(algs[a].length==1)Object.keys(algs).forEach(a2=>{
	    if(a2!=a)algs[a2]=algs[a2].filter(i=>i!=algs[a][0])
	})
    })
}
Object.keys(algs).sort().map(a=>algs[a][0]).join(",")
