// del 1
let prg=document.body.innerText.trim().split("\n").map(r=>r.split(" ")).map(r=>[r[0],parseInt(r[1])])
let a=0,p=0,c=0,v=[]
let cpu={nop:par=>{p++},jmp:par=>{p+=par},acc:par=>{a+=par;p++}}
while(!v.includes(p)&&c<30000){v.push(p);cpu[prg[p][0]](prg[p][1]);c++}

// del 2
prg.forEach((r,i)=>{
    prg=document.body.innerText.trim().split("\n").map(r=>r.split(" ")).map(r=>[r[0],parseInt(r[1])])
    a=0,p=0,c=0,v=[]
    prg[i][0]=prg[i][0]=="nop"?"jmp":prg[i][0]=="jmp"?"nop":prg[i][0]
    while(!v.includes(p)&&p<prg.length&&c<30000){v.push(p);cpu[prg[p][0]](prg[p][1]);c++}	
    if(p>=prg.length)throw(i+" "+a)
})
