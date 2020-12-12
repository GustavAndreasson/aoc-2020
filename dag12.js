// del 1
x=y=0
d=0
document.body.innerText.trim().split("\n").map(r=>[r[0],parseInt(r.substr(1))]).forEach(i=>{
    x+=i[0]=="E"?i[1]:i[0]=="W"?-i[1]:i[0]=="F"?(d==0?i[1]:d==2?-i[1]:0):0
    y+=i[0]=="N"?i[1]:i[0]=="S"?-i[1]:i[0]=="F"?(d==1?i[1]:d==3?-i[1]:0):0
    d=(d+4+(i[0]=="L"?i[1]:i[0]=="R"?-i[1]:0)/90)%4
})
Math.abs(x)+Math.abs(y)

// del 2
x=y=0
wx=10
wy=1
d=0
document.body.innerText.trim().split("\n").map(r=>[r[0],parseInt(r.substr(1))]).forEach(i=>{
    wx+=i[0]=="E"?i[1]:i[0]=="W"?-i[1]:0
    wy+=i[0]=="N"?i[1]:i[0]=="S"?-i[1]:0
    wxt=i[0]=="L"?(i[1]==90?-wy:i[1]==180?-wx:i[1]==270?wy:wx):i[0]=="R"?(i[1]==90?wy:i[1]==180?-wx:i[1]==270?-wy:wx):wx
    wy=i[0]=="L"?(i[1]==90?wx:i[1]==180?-wy:i[1]==270?-wx:wy):i[0]=="R"?(i[1]==90?-wx:i[1]==180?-wy:i[1]==270?wx:wy):wy
    wx=wxt
    x+=i[0]=="F"?wx*i[1]:0
    y+=i[0]=="F"?wy*i[1]:0
})
Math.abs(x)+Math.abs(y)
