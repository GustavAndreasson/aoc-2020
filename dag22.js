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

