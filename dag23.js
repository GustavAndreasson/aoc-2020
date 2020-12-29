// del 1
cups="963275481".split("").map(v=>parseInt(v))
for(i=0;i<100;i++){
    s=cups.splice(1,3)
    v=cups[0]
    do{
	v=(v-1+10)%10
	d=cups.indexOf(v)
    }while(d<0)
    cups.splice(d+1,0,...s)
    cups.push(cups.shift())
}
while(cups[0]!==1)cups.push(cups.shift())
cups.slice(1).join("")

// del 2
cups="963275481".split("").map(v=>parseInt(v)).concat(Array(999991).fill(0).map((_,i)=>i+10))
pos=[]
"963275481".split("").map(v=>parseInt(v)).forEach((v,i)=>pos[v-1]=i)
pos=pos.concat(Array(999991).fill(0).map((_,i)=>i+10))
for(i=0;i<10000000;i++){
    s=cups.splice(1,3)
    v=cups[0]
    do{
	v=(v-1+10)%10
	d=pos[v-1]
    }while(!s.includes(d))
    s.forEach((v,j)=>{pos[v-1]=d+j+1})
    cups.splice(d+1,0,...s)
    cups.push(cups.shift())
    if(i%100000==0)console.log(i)
}
