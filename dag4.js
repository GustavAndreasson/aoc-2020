// del 1
document.body.innerText.trim().split("\n\n").filter(r=>r.split(/[ \n]+/).length==8||(r.split(/[ \n]+/).length==7&&!r.includes("cid"))).length

// del 2
document.body.innerText.trim().split("\n\n").filter(r=>r.split(/[ \n]+/).length==8||(r.split(/[ \n]+/).length==7&&!r.includes("cid"))).map(
    r=>r.split(/[ \n]+/).map(c=>[c.substr(0,3),c.substr(4)])
).filter(r=>r.every(c=>
		    (c[0]=="byr"&&c[1]>=1920&&c[1]<=2002)||
		    (c[0]=="iyr"&&c[1]>=2010&&c[1]<=2020)||
		    (c[0]=="eyr"&&c[1]>=2020&&c[1]<=2030)||
		    (c[0]=="hgt"&&
		     ((c[1].substr(-2)=="cm"&&c[1].slice(0,-2)>=150&&c[1].slice(0,-2)<=193)||
		      (c[1].substr(-2)=="in"&&c[1].slice(0,-2)>=59&&c[1].slice(0,-2)<=76)))||
		    (c[0]=="hcl"&&/^#[0-9a-f]{6}$/.test(c[1]))||
		    (c[0]=="ecl"&&/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(c[1]))||
		    (c[0]=="pid"&&/^[0-9]{9}$/.test(c[1]))||
		    (c[0]=="cid"))).length
		    
