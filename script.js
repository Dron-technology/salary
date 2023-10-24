function func(){

                     var ts = Number(document.getElementById("ts").value);
                    var ocht = Number(document.getElementById("ocht").value);
                    var ochp = Number(document.getElementById("ochp").value);
                    var ncht = Number(document.getElementById("ncht").value);
                    var nchp = Number(document.getElementById("nchp").value);
                    var ncht = Number(document.getElementById("ncht").value);
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
                    document.getElementById("result2").innerHTML = result2;

                }
