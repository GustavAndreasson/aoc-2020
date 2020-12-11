// del 1

let m=[]
document.body.innerText.trim().split("\n").map(r=>r.split("")).forEach((r,y)=>r.forEach((c,x)=>c=="L"&&m.push([x,y,0])))
let c=true,b=0
while(c){
    console.log((b++) + " " + m.filter(p=>p[2]).length)
    c=false
    m=m.map((p,i)=>{
	let n=m.filter((p2,j)=>i!=j&&p2[2]&&Math.abs(p[0]-p2[0])<2&&Math.abs(p[1]-p2[1])<2).length
	if(n==0&&p[2]==0){
	    c=true
	    return [p[0],p[1],1]
	}else if(n>3&&p[2]==1){
	    c=true
	    return [p[0],p[1],0]
	}
	return p
    })
}

// del 2
m={}
document.body.innerText.trim().split("\n").map(r=>r.split("")).forEach((r,y)=>r.forEach((c,x)=>{if(c=="L")m[x+"_"+y]=[x,y,0]}))
let c=true
let b=0
let ray=(p,d)=>{
    let pos=[...p]
    do{
	pos[0]+=d[0]
	pos[1]+=d[1]
	if(m[pos[0]+"_"+pos[1]])return m[pos[0]+"_"+pos[1]][2]
    }while(pos[0]>=0&&pos[0]<100&&pos[1]>=0&&pos[1]<100)
    return 0
}
while(c){
    console.log((b++) + " " + Object.values(m).filter(p=>p[2]).length)
    c=false,m2={}
    Object.values(m).forEach(p=>{
	let n=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].filter(d=>ray(p,d)).length
	c=(n==0&&p[2]==0)||(n>4&&p[2]==1)
	m2[p[0]+"_"+p[1]]=[p[0],p[1],n==0&&p[2]==0?1:n>4&&p[2]==1?0:p[2]]
	if(n==0&&p[2]==0){
	    c=true
	    m2[p[0]+"_"+p[1]]=[p[0],p[1],1]
	}else if(n>4&&p[2]==1){
	    c=true
	    m2[p[0]+"_"+p[1]]=[p[0],p[1],0]
	}else{
	    m2[p[0]+"_"+p[1]]=[p[0],p[1],p[2]]
	}
    })
    m=m2
}
