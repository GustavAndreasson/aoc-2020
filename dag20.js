// del 1
edges=t=>{
    let v=t.replaceAll("\n","").split("")
    return [
	v.slice(0,10),
	v.filter((_,i)=>(i-9)%10==0),
	v.slice(90,100).reverse(),
	v.filter((_,i)=>i%10==0).reverse()
    ]
}
tiles=document.body.innerText.trim().split("\n\n").map(t=>t.split(":")).map(t=>[t[0].slice(5),t[1],edges(t[1])])
tiles.filter(t=>t[2].filter(e=>!tiles.some(t2=>t[0]!=t2[0]&&t2[2].some(e2=>e2.slice().reverse().join("")==e.join("")||e2.join("")==e.join("")))).length==2)

