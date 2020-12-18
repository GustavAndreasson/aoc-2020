// del 1

fp=s=>{
    let d=1
    for(i=0;i<s.length;i++){
	if(s[i]=="(")d++
	if(s[i]==")")d--
	if(!d)return i
    }
}

calc=s=>{
    let a=null
    while(s.length){
	s=s.trim()
	if(/[0-9]/.test(s[0])){
	    d=s.match(/[0-9]+/)[0]
	    a=a==null?d:eval(a+o+d)
	    s=s.slice(d.length)
	}else if(/[\+\*]/.test(s[0])){
	    o=s[0]
	    s=s.slice(o.length)
	}else if(s[0]==="("){
	    let lp=fp(s.slice(1))+1
	    a=a==null?calc(s.slice(1,lp)):eval(a+o+calc(s.slice(1,lp)))
	    s=s.slice(lp+1)
	}else{
	    throw("Illegal expression: "+s)
	}
    }
    return a
}
document.body.innerText.trim().split("\n").reduce((s,l)=>s+calc(l),0)

// del 2
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

calc2=e=>{
    if(e.length==1)return typeof e[0] == "object"?calc2(e[0]):parseInt(e[0])
    if(e.indexOf("*")>=0)return calc2(e.slice(0,e.indexOf("*")))*calc2(e.slice(e.indexOf("*")+1))
    if(e.indexOf("+")>=0)return calc2(e.slice(0,e.indexOf("+")))+calc2(e.slice(e.indexOf("+")+1))
    throw("FEL "+e.join())
}

document.body.innerText.trim().split("\n").reduce((s,l)=>s+calc2(parse(l)),0)
