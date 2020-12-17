// del 1
m={}
m2={}
document.body.innerText.trim().split("\n").forEach((r,y)=>r.split("").forEach((c,x)=>{if(c=="#")m[x+"_"+y+"_"+0]=true}))
for(i=1;i<7;i++){
    for(x=-i;x<8+i;x++)for(y=-i;y<8+i;y++)for(z=-i;z<1+i;z++){
	n=0
	for(lx=-1;lx<2;lx++)for(ly=-1;ly<2;ly++)for(lz=-1;lz<2;lz++)n+=m[(x+lx)+"_"+(y+ly)+"_"+(z+lz)]&&(lx||ly||lz)?1:0
	m2[x+"_"+y+"_"+z]=m[x+"_"+y+"_"+z]?(n==2||n==3):n==3
    }
    m={...m2}
}
Object.values(m).filter(v=>v).length

// del 2
m={}
m2={}
document.body.innerText.trim().split("\n").forEach((r,y)=>r.split("").forEach((c,x)=>{if(c=="#")m[x+"_"+y+"_"+0+"_"+0]=true}))
for(i=1;i<7;i++){
    for(x=-i;x<8+i;x++)for(y=-i;y<8+i;y++)for(z=-i;z<1+i;z++)for(w=-i;w<1+i;w++){
	n=0
	for(lx=-1;lx<2;lx++)for(ly=-1;ly<2;ly++)for(lz=-1;lz<2;lz++)for(lw=-1;lw<2;lw++)n+=m[(x+lx)+"_"+(y+ly)+"_"+(z+lz)+"_"+(w+lw)]&&(lx||ly||lz||lw)?1:0
	m2[x+"_"+y+"_"+z+"_"+w]=m[x+"_"+y+"_"+z+"_"+w]?(n==2||n==3):n==3
    }
    m={...m2}
}
Object.values(m).filter(v=>v).length
