// del 1
floor={}
document.body.innerText.trim().split("\n").forEach(r=>{
    let x=0
    let y=0
    while(p.length){
	let d=p.match(/^(w|e|nw|ne|sw|se)/)[0]
	x+=d=="w"||d=="sw"?-1:d=="e"||d=="ne"?1:0
	y+=d=="se"||d=="sw"?-1:d=="nw"||d=="ne"?1:0
	p=p.slice(d.length)
    }
    floor[x+"_"+y]=!floor[x+"_"+y]
})
Object.values(floor).filter(v=>v).length

// del 2
for(i=0;i<100;i++){
    limits=Object.keys(floor).map(v=>v.split("_").map(v=>parseInt(v))).reduce((r,v)=>[[v[0]>r[0][0]?r[0][0]:v[0],v[0]<r[0][1]?r[0][1]:v[0]],[v[1]>r[1][0]?r[1][0]:v[1],v[1]<r[1][1]?r[1][1]:v[1]]],[[0,0],[0,0]])
    f2={}
    for(x=limits[0][0]-1;x<limits[0][1]+2;x++)for(y=limits[1][0]-1;y<limits[1][1]+2;y++){
	n=[[0,1],[1,1],[1,0],[0,-1],[-1,-1],[-1,0]].reduce((r,v)=>r+=floor[(x+v[0])+"_"+(y+v[1])]?1:0,0)
	f2[x+"_"+y]=(floor[x+"_"+y]&&n>0&&n<3)||(!floor[x+"_"+y]&&n==2)
    }
    floor={...f2}
}
Object.values(floor).filter(v=>v).length
