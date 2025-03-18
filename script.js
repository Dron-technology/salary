// Загрузка данных из localStorage


document.getElementById("ts").value = localStorage.getItem('ts')
document.getElementById("prem").value = localStorage.getItem('prem')
document.getElementById("vl").value = localStorage.getItem('vl')
document.getElementById("dp").value = localStorage.getItem('dp')
document.getElementById("prof").value = localStorage.getItem('prof')

function func(){
    let ts = Number(document.getElementById("ts").value);
    let ocht = Number(document.getElementById("ocht").value);
    let ochp = Number(document.getElementById("ochp").value);
    let ncht = Number(document.getElementById("ncht").value);
    let nchp = Number(document.getElementById("nchp").value);
    let prem = Number(document.getElementById("prem").value);
    let vl = Number(document.getElementById("vl").value);
    let dp = Number(document.getElementById("dp").value);
    let premMin = Number(document.getElementById("premMin").value);
    let prz = Number(document.getElementById("prz").value);
    let pk = Number(document.getElementById("pk").value);
    let prof = Number(document.getElementById("prof").value);
    let ava = Number(document.getElementById("ava").value);

    let okl = ts*ocht;
    let psmen = okl*0.02;
    let vlet = okl/100*vl;
    let dpVU = okl/100*dp;
    let noch = ts*ncht*0.4;
    let pkv = ts*pk*2.25;
    let prazd = ts*prz;
    let premia = ((ts*ochp)+(ts*nchp*0.4)+(ts*ochp/100*dp))/100*prem*(100-premMin)/100;
    let result = okl+psmen+vlet+noch+pkv+prazd+premia+dpVU;
    let pdx = result/100*13;
    let dopsb = result/100*prof;
    let result2 = result-pdx-dopsb;
    let avans = ts*ava/100*87;
    let result3 = result2-avans;

    let out = new Intl.NumberFormat('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})

    document.getElementById("okl").innerHTML = out.format(okl);
    document.getElementById("psmen").innerHTML = out.format(psmen);
    document.getElementById("vlet").innerHTML = out.format(vlet);
    document.getElementById("noch").innerHTML = out.format(noch);
    document.getElementById("dpVU").innerHTML = out.format(dpVU);
    document.getElementById("pkv").innerHTML = out.format(pkv);
    document.getElementById("prazd").innerHTML = out.format(prazd);
    document.getElementById("premia").innerHTML = out.format(premia);
    document.getElementById("result").innerHTML = out.format(result);
    document.getElementById("pdx").innerHTML = out.format(pdx)+'-';
    document.getElementById("dopsb").innerHTML = out.format(dopsb)+'-';
    document.getElementById("avans").innerHTML = out.format(avans)+'-';
    document.getElementById("result2").innerHTML = out.format(result2);
    document.getElementById("result3").innerHTML = out.format(result3);

    let hidden1 = document.querySelector(".hidden1")
    let hidden2 = document.querySelector(".hidden2")
    let hidden3 = document.querySelector(".hidden3")
    let hidden4 = document.querySelector(".hidden4")
    let hidden5 = document.querySelector(".hidden5")
    let hidden6 = document.querySelector(".hidden6")

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
    if (dpVU!=0){
        hidden6.style.cssText = 'display: flex;'
    }
        else{
                hidden6.style.cssText = 'display: none;'
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

let In = document.querySelector('.container')
In.addEventListener('focusin', (e) =>{
    if (e.target.tagName =='INPUT'){
        e.target.parentElement.classList.add('inActive') 
    } 
    }) 
    
In.addEventListener('click', (e) =>{
    if (e.target.tagName =='INPUT'){
        e.target.value = ''
        e.target.parentElement.classList.add('inActive')
        func()  
    } 

    // Добавлено для сохранения в localStorage
    if (e.target.id == 'ts'){
        localStorage.setItem('ts', '');
        }
    if (e.target.id == 'prem'){
        localStorage.setItem('prem', '');
        }
    if (e.target.id == 'vl'){
        localStorage.setItem('vl', '');
        }
    if (e.target.id == 'dp'){
        localStorage.setItem('dp', '');
        }
    if (e.target.id == 'prof'){
        localStorage.setItem('prof', '');
        }
}) 

In.addEventListener('focusout', (e) =>{
    e.target.parentElement.classList.remove('inActive')
})

In.addEventListener('input', (e) =>{
    if (e.target.tagName =='INPUT'){
        func()
    } 
                
    // Добавлено для сохранения в localStorage
    if (e.target.id == 'ts'){
        localStorage.setItem('ts', e.target.value);
        }
    if (e.target.id == 'prem'){
        localStorage.setItem('prem', e.target.value);
        }
    if (e.target.id == 'vl'){
        localStorage.setItem('vl', e.target.value);
        }
    if (e.target.id == 'dp'){
            localStorage.setItem('dp', e.target.value);
        }
    if (e.target.id == 'prof'){
        localStorage.setItem('prof', e.target.value);
        }
})
              

            // localStorage.clear()

// window.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//     func()
//     }
//     })
