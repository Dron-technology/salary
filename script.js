function func(){

                    var ts = Number(document.getElementById("ts").value);
                    var ocht = Number(document.getElementById("ocht").value);
                    var ochp = Number(document.getElementById("ochp").value);
                    var ncht = Number(document.getElementById("ncht").value);
                    var nchp = Number(document.getElementById("nchp").value);
                    var ava = Number(document.getElementById("ava").value);
                    var vl = Number(document.getElementById("vl").value);
                    var prem = Number(document.getElementById("prem").value);
                    var premMin = Number(document.getElementById("premMin").value);
                    var prz = Number(document.getElementById("prz").value);
                    var pk = Number(document.getElementById("pk").value);
                    var prof = Number(document.getElementById("prof").value);

                    var okl = ts*ocht;
                    var psmen = okl*0.02;
                    var vlet = okl/100*vl;
                    var noch = ts*ncht*0.4;
                    var pkv = ts*pk*2.25;
                    var prazd = ts*prz;
                    var premia = ((ts*ochp)+(ts*nchp*0.4))/100*prem;
                    var premia = premia - premia/100*premMin;
                    var result = okl+psmen+vlet+noch+pkv+prazd+premia;
                    var pdx = result/100*13;
                    var dopsb = result/100*prof;
                    var result2 = result-pdx-dopsb;
                    var avans = ts*ava/100*87;
                    var result3 = result2-avans;

                    let out = new Intl.NumberFormat('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2})

                    document.getElementById("okl").innerHTML = out.format(okl);
                    document.getElementById("psmen").innerHTML = out.format(psmen);
                    document.getElementById("vlet").innerHTML = out.format(vlet);
                    document.getElementById("noch").innerHTML = out.format(noch);
                    document.getElementById("pkv").innerHTML = out.format(pkv);
                    document.getElementById("prazd").innerHTML = out.format(prazd);
                    document.getElementById("premia").innerHTML = out.format(premia);
                    document.getElementById("result").innerHTML = out.format(result);
                    document.getElementById("pdx").innerHTML = out.format(pdx);
                    document.getElementById("dopsb").innerHTML = out.format(dopsb);
                    document.getElementById("avans").innerHTML = out.format(avans);
                    document.getElementById("result2").innerHTML = out.format(result2);
                    document.getElementById("result3").innerHTML = out.format(result3);

                   let hidden1 = document.querySelector(".hidden1")
                   let hidden2 = document.querySelector(".hidden2")
                   let hidden3 = document.querySelector(".hidden3")
                   let hidden4 = document.querySelector(".hidden4")
                   let hidden5 = document.querySelector(".hidden5")

                    if (pk!=0){
                        hidden1.style.cssText = 'display: flex;'
                    }
                        else{
                            hidden1.style.cssText = 'display: none;'
                        }
                    if (prazd!=0){
                        hidden2.style.cssText = 'display: flex;'
                    }
                        else{
                            hidden2.style.cssText = 'display: none;'
                        }
                    if (dopsb!=0){
                        hidden3.style.cssText = 'display: flex;'
                    }
                        else{
                            hidden3.style.cssText = 'display: none;'
                        }
                    if (ava!=0){
                        hidden4.style.cssText = 'display: flex;'
                        hidden5.style.cssText = 'display: flex;'
                    }
                        else{
                            hidden4.style.cssText = 'display: none;'
                            hidden5.style.cssText = 'display: none;'
                        }  
                        
                }
document.querySelector('#check').addEventListener('click', () =>{
if (document.querySelector('#check').checked){
    document.querySelector(".container").style.cssText = 'display: none'
    document.querySelector(".container4").style.cssText = 'display: flex'
    document.querySelector(".labelOn").style.cssText = 'display: block'
    document.querySelector(".labelOff").style.cssText = 'display: none'
}
else{
    document.querySelector(".container4").style.cssText = 'display: none'
    document.querySelector(".container").style.cssText = 'display: flex'
    document.querySelector(".labelOff").style.cssText = 'display: block'
    document.querySelector(".labelOn").style.cssText = 'display: none'
}
})


// window.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//     func()
//     }
//     })


ts.addEventListener('input', func);
ts.addEventListener('click', func);
ocht.addEventListener('input', func);
ocht.addEventListener('click', func);
ochp.addEventListener('input', func);
ochp.addEventListener('click', func);
ncht.addEventListener('input', func);
ncht.addEventListener('click', func);
nchp.addEventListener('input', func);
nchp.addEventListener('click', func);
ava.addEventListener('input', func);
ava.addEventListener('click', func);
vl.addEventListener('input', func);
vl.addEventListener('click', func);  
prem.addEventListener('input', func);
prem.addEventListener('click', func);
prz.addEventListener('input', func);
prz.addEventListener('click', func);
pk.addEventListener('input', func);
pk.addEventListener('click', func);
prof.addEventListener('input', func);
prof.addEventListener('click', func);
premMin.addEventListener('input', func);
premMin.addEventListener('click', func);

                   

        

