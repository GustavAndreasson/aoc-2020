// del 1
mem={}
mask=""
fill=s=>s.length>=36?s:fill("0"+s)
am=n=>parseInt(mask.split("").map((m,i)=>m=="X"?fill(n.toString(2))[i]:m).join(""),2)
document.body.innerText.trim().split("\n").map(r=>r.split(" = ")).forEach(r=>{
    if(r[0]=="mask"){
	mask=r[1]
    }else{
	mem[r[0].substr(4,r[0].length-5)]=am(parseInt(r[1]))
    }
})
Object.values(mem).reduce((s,v)=>s+v)

// del 2
mem={}
mask=""
am2=n=>mask.split("").map((m,i)=>m=="X"?"X":fill(n.toString(2))[i]=="1"?"1":m).join("")
gm=m=>!m.includes("X")?[m]:[gm(m.replace("X",0)),gm(m.replace("X",1))].flat()
document.body.innerText.trim().split("\n").map(r=>r.split(" = ")).forEach(r=>{
    if(r[0]=="mask"){
	mask=r[1]
    }else{
	gm(am2(parseInt(r[0].substr(4,r[0].length-5)))).forEach(m=>{mem[m]=parseInt(r[1])})
    }
})
Object.values(mem).reduce((s,v)=>s+v)
