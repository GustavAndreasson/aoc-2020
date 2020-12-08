// del 1
let prg=document.body.innerText.trim().split("\n").map(r=>r.split(" ")).map(r=>[r[0],parseInt(r[1])])
let a=0,p=0,c=0,v=[]
let cpu={nop:par=>{p++},jmp:par=>{p+=par},acc:par=>{a+=par;p++}}
while(!v.includes(p)&&c<30000){v.push(p);cpu[prg[p][0]](prg[p][1]);c++}

// del 2
prg.forEach((r,i)=>{
    prg=document.body.innerText.trim().split("\n").map(r=>r.split(" ")).map(r=>[r[0],parseInt(r[1])])
    a=0,p=0,c=0,v=[]
    if(r[0]=="jmp") {
	prg[i][0]="nop"
	while(!v.includes(p)&&p<prg.length&&c<30000){v.push(p);cpu[prg[p][0]](prg[p][1]);c++}
	if(p>=prg.length)console.log(i+" "+a)
    } else if(r[0]=="nop") {
	prg[i][0]="jmp"
	while(!v.includes(p)&&p<prg.length&&c<30000){v.push(p);cpu[prg[p][0]](prg[p][1]);c++}
	if(p>=prg.length)console.log(i+" "+a)
    }
})
