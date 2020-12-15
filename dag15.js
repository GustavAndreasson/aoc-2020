// del 1
a=[19,20,14,0,9,1]
for(i=6;i<2020;i++)a.push(a.slice(0,-1).includes(a[a.length-1])?i-a.slice(0,-1).lastIndexOf(a[a.length-1])-1:0)
a[a.length-1]

// del 2
a={};[19,20,14,0,9].forEach((v,i)=>a[v]=i)
last=1
for(i=5;i<29999999;i++) {
    nlast=(a[last]===undefined?0:i-a[last])
    a[last]=i
    last=nlast
}
