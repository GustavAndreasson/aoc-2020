// del 1
document.getElementsByTagName("pre")[0].innerText.split("\n").slice(0,-1).map(r=>/^([0-9]+)\-([0-9]+) ([a-z]): ([a-z]+)$/.exec(r)).filter(l=>l[4].split(l[3]).length-1>=l[1]&&l[4].split(l[3]).length-1<=l[2]).length

// del 2
document.getElementsByTagName("pre")[0].innerText.split("\n").slice(0,-1).map(r=>/^([0-9]+)\-([0-9]+) ([a-z]): ([a-z]+)$/.exec(r)).filter(l=>((l[4][l[1]-1]==l[3])+(l[4][l[2]-1]==l[3]))==1).length
