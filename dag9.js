//del 1
let a=document.body.innerText.trim().split("\n").map(r=>parseInt(r)).reduce((r,v,i,a)=>r||i>24&&!a.slice(i-25,i).some((v2,i2,a2)=>a2.some(v3=>v2!=v3&&v2+v3==v))&&v,0)

//del 2
document.body.innerText.trim().split("\n").map(r=>parseInt(r)).forEach((v,i,ar)=>{
    let s=v,i2=i+1
    while (s<a){s+=ar[i2];i2++}
    if (s==a)throw(ar.slice(i,i2).reduce((r,v2)=>r>v2?v2:r)+ar.slice(i,i2).reduce((r,v2)=>r>v2?r:v2))
})
