let a = document.getElementsByTagName("pre")[0].innerText.split("\n").slice(0,-1).map(v=>parseInt(v))

//del 1
for(i=0;i<a.length;i++){b=a.slice(i).find(v=>v+a[i]==2020);if(b>=0)console.log(b*a[i])}

//del 2
for(i=0;i<a.length;i++)for(j=i;j<a.length;j++){b=a.slice(j).find(v=>v+a[i]+a[j]==2020);if(b>=0)console.log(b*a[i]*a[j])}
