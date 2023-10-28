    function func(){

                    var ts = Number(document.getElementById("ts").value);
                    var ocht = Number(document.getElementById("ocht").value);
                    var ochp = Number(document.getElementById("ochp").value);
                    var ncht = Number(document.getElementById("ncht").value);
                    var nchp = Number(document.getElementById("nchp").value);
                    var ncht = Number(document.getElementById("ncht").value);
                    var ava = Number(document.getElementById("ava").value);
                    var vl = Number(document.getElementById("vl").value);
                    var prem = Number(document.getElementById("prem").value);
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
                    var result = okl+psmen+vlet+noch+pkv+prazd+premia;
                    var pdx = result/100*13;
                    var dopsb = result/100*prof;
                    var result2 = result-pdx-dopsb;
                    var avans = ts*ava/100*87;
                    var result3 = result2-avans;

                    var okl = okl.toFixed(2)
                    var psmen = psmen.toFixed(2)
                    var vlet = vlet.toFixed(2)
                    var noch = noch.toFixed(2)
                    var pkv = pkv.toFixed(2)
                    var prazd = prazd.toFixed(2)
                    var premia = premia.toFixed(2)
                    var result = result.toFixed(2)
                    var pdx = pdx.toFixed(2)
                    var dopsb = dopsb.toFixed(2)
                    var result2 = result2.toFixed(2)
                    var avans = avans.toFixed(2)
                    var result3 = result3.toFixed(2)

                    document.getElementById("okl").innerHTML = okl;
                    document.getElementById("psmen").innerHTML = psmen;
                    document.getElementById("vlet").innerHTML = vlet;
                    document.getElementById("noch").innerHTML = noch;
                    document.getElementById("pkv").innerHTML = pkv;
                    document.getElementById("prazd").innerHTML = prazd;
                    document.getElementById("premia").innerHTML = premia;
                    document.getElementById("result").innerHTML = result;
                    document.getElementById("pdx").innerHTML = pdx;
                    document.getElementById("dopsb").innerHTML = dopsb;
                    document.getElementById("avans").innerHTML = avans;
                    document.getElementById("result2").innerHTML = result2;
                    document.getElementById("result3").innerHTML = result3;

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
