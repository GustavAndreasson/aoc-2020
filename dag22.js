// del 1
cards=document.body.innerText.trim().split("\n\n").map(p=>p.split("\n").map(v=>parseInt(v))).map(p=>p.slice(1))
while(cards[0].length&&cards[1].length){
    if(cards[0][0]<cards[1][0]){
        cards[1].push(cards[1].shift(),cards[0].shift())
    }else{
        cards[0].push(cards[0].shift(),cards[1].shift())
    }
}
cards.flat().reduce((s,v,i)=>s+v*(50-i),0)

// del 2
initcards=document.body.innerText.trim().split("\n\n").map(p=>p.split("\n").map(v=>parseInt(v))).map(p=>p.slice(1))
game=cards=>{
    let history=[]
    while(cards[0].length&&cards[1].length){
	let state=cards[0].join()+"|"+cards[1].join()
	if(history.includes(state)) return 0
	history.push(state)
	if(cards[0][0]<cards[0].length&&cards[1][0]<cards[1].length){
	    if(game([cards[0].slice(1,cards[0][0]+1),cards[1].slice(1,cards[1][0]+1)])){
		cards[1].push(cards[1].shift(),cards[0].shift())
	    }else{
		cards[0].push(cards[0].shift(),cards[1].shift())
	    }
	}else{
	    if(cards[0][0]<cards[1][0]){
		cards[1].push(cards[1].shift(),cards[0].shift())
	    }else{
		cards[0].push(cards[0].shift(),cards[1].shift())
	    }
	}
    }
    return cards[0].length?0:1
}
game(initcards)
