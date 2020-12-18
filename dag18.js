// del 1

fp=s=>{
    let d=1
    for(i=0;i<s.length;i++){
	if(s[i]=="(")d++
	if(s[i]==")")d--
	if(!d)return i
    }
}

parse=s=>{
    let res=[]
    while(s.length){
	s=s.trim()
	if(/[0-9]\+\*/.test(s[0])){
	    d=s.match(/([0-9]+|\+|\*)/)[0]
	    res.push(d)
	    s=s.slice(d.length)
	}else if(s[0]==="("){
	    let lp=fp(s.slice(1))+1
	    res.push(parse(s.slice(1,lp)))
	    s=s.slice(lp+1)
	}else{
	    throw("Illegal expression: "+s)
	}
    }
    return res
}

calc=e=>{
    let a=null
    while(e.length){
	if(typeof e[0]=="object"){
	    a=a==null?calc(e[0]):eval(a+o+calc(e[0]))
	}else{
	    if(/[0-9]/.test(e[0]))a=a==null?parseInt(e[0]):eval(a+o+parseInt(e[0]))
	    if(/[\+\*]/.test(e[0]))o=e[0]
	}
	e=e.slice(1)
    }
    return a
}
document.body.innerText.trim().split("\n").reduce((s,l)=>s+calc(parse(l)),0)

// del 2

calc2=e=>{
    if(e.length==1)return typeof e[0]=="object"?calc2(e[0]):parseInt(e[0])
    if(e.indexOf("*")>=0)return calc2(e.slice(0,e.indexOf("*")))*calc2(e.slice(e.indexOf("*")+1))
    if(e.indexOf("+")>=0)return calc2(e.slice(0,e.indexOf("+")))+calc2(e.slice(e.indexOf("+")+1))
}

document.body.innerText.trim().split("\n").reduce((s,l)=>s+calc2(parse(l)),0)
