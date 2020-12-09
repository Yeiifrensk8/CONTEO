//OCULTAR BOX
    $(function(){
        //INKA KOLA
            $(".inka").on("click", function(){
                var hid = $(".boxInka").toggle(400);
            });
        //COCA COLA
            $(".coca").on("click", function(){
                var hid = $(".boxCoca").toggle(400);
            });
        //GUARANA
            $(".guarana").on("click", function(){
                var hid = $(".boxGuarana").toggle(400);
            });
        //CERVEZAS
            $(".beer").on("click", function(){
                var hid = $(".boxBeer").toggle(400);
            });
        //AGUA
            $(".agua").on("click", function(){
                var hid = $(".boxAgua").toggle(400);
            });
        //CHICHA
            $(".chicha").on("click", function(){
                var hid = $(".boxChicha").toggle(400);
            });
    })
 
//AUMENTO Y DESCUENTO
    //INKA KOLA
        //INKA MEDIO
            $(function() {
                var inkm = 0;
                $("#inkmm").on("click", function() {
                    inkm++;
                    var add = $("#inkaMedio").text("Inka ½: " + inkm);
                });
                $("#inkmr").on("click", function() {
                    inkm--;
                    var rest = $("#inkaMedio").text("Inka ½: " + inkm);
                });
            })
        //GORDITA
            $(function() {
                var gord = 0;
                $("#gordm").on("click", function() {
                    gord++;
                    var add = $("#gordita").text("Gordita: " + gord);
                });
                $("#gordr").on("click", function() {
                    gord--;
                    var rest = $("#gordita").text("Gordita: " + gord);
                });
            })
        //INKA LITRO
            $(function() {
                var inklt = 0;
                $("#inklm").on("click", function() {
                    inklt++;
                    var add = $("#inkaLitro").text("Inka 1lt: " + inklt);
                })
                $("#inklr").on("click", function() {
                    inklt--;
                    var rest = $("#inkaLitro").text("Inka 1lt: " + inklt);
                })
            })
        //INKA LITRO MEDIO
            $(function() {
                var inklm = 0;
                $("#inklmm").on("click", function() {
                    inklm++;
                    var add = $("#inkaLm").text("Inka 1½: " + inklm);
                })
                $("#inklmr").on("click", function() {
                    inklm--;
                    var rest = $("#inkaLm").text("Inka 1½: " + inklm);
                })
            })
        //INKA DOS LITROS
            $(function() {
                var inkdl = 0;
                $("#inkdlm").on("click", function() {
                    inkdl++;
                    var add = $("#inkaDos").text("Inka 2lt: " + inkdl);
                })
                var inkdl = 0;
                $("#inkdlr").on("click", function() {
                    inkdl--;
                    var rest = $("#inkaDos").text("Inka 2lt: " + inkdl);
                })
            })
        //INKA TRES LITRO
            $(function() {
                var inktl = 0;
                $("#inktlm").on("click", function() {
                    inktl++;
                    var add = $("#inkaTres").text("Inka 3lt: " + inktl);
                })
                var inktl = 0;
                $("#inktlr").on("click", function() {
                    inktl--;
                    var rest = $("#inkaTres").text("Inka 3lt: " + inktl);
                })
            })
    //COCA COLA
        //COCA MEDIO
            $(function() {
                var cocm = 0;
                $("#cocmm").on("click", function(){
                    cocm++;
                    var add = $("#cocaMedio").text("Coca ½: " + cocm);
                })
                $("#cocmr").on("click", function(){
                    cocm--;
                    var rest = $("#cocaMedio").text("Coca ½: " + cocm);
                })
            })
        //JUMBO
            $(function() {
                var jumbo = 0;
                $("#jumbm").on("click", function(){
                    jumbo++;
                    var add = $("#jumbo").text("Jumbo: " + jumbo);
                })
                $("#jumbr").on("click", function(){
                    jumbo--;
                    var rest = $("#jumbo").text("Jumbo: " + jumbo);
                })
            })
        //COCA LITRO
            $(function() {
                var coclt = 0;
                $("#coclm").on("click", function(){
                    coclt++;
                    var add = $("#cocaLitro").text("Coca 1lt: " + coclt);
                })
                $("#coclr").on("click", function(){
                    coclt--;
                    var rest = $("#cocaLitro").text("Coca 1lt: " + coclt);
                })
            })
        //COCA LITRO MEDIO
            $(function() {
                var coclm = 0;
                $("#coclmm").on("click", function(){
                    coclm++;
                    var add = $("#cocaLm").text("Coca 1½: " + coclm);
                })
                $("#coclmr").on("click", function(){
                    coclm--;
                    var rest = $("#cocaLm").text("Coca 1½: " + coclm);
                })
            })
        //COCA DOS LITROS
            $(function() {
                var cocdl = 0;
                $("#cocdlm").on("click", function(){
                    cocdl++;
                    var add = $("#cocaDos").text("Coca 2lt: " + cocdl);
                })
                $("#cocdlr").on("click", function(){
                    cocdl--;
                    var rest = $("#cocaDos").text("Coca 2lt: " + cocdl);
                })
            })
        //COCA TRES LITROS
            $(function() {
                var coctl = 0;
                $("#coctlm").on("click", function(){
                    coctl++;
                    var add = $("#cocaTres").text("Coca 3lt: " + coctl);
                })
                $("#coctlr").on("click", function(){
                    coctl--;
                    var rest = $("#cocaTres").text("Coca 3lt: " + coctl);
                })
            })
    //GUARANA
        //GUARANA MEDIO
            $(function() {
                var guarm = 0;
                $("#guarmm").on("click", function(){
                    guarm++;
                    var add = $("#guaranaMedio").text("Guarana ½: " + guarm);
                })
                $("#guarmr").on("click", function(){
                    guarm--;
                    var rest = $("#guaranaMedio").text("Guarana ½: " + guarm);
                })
            })
        //GUARANITA
            $(function() {
                var guaranita = 0;
                $("#guarm").on("click", function(){
                    guaranita++;
                    var add = $("#guaranita").text("Guaranita: " + guaranita);
                })
                $("#guarr").on("click", function(){
                    guaranita--;
                    var rest = $("#guaranita").text("Guaranita: " + guaranita);
                })
            })
        //GUARANA LITRO
            $(function() {
                var guarlt = 0;
                $("#guarlm").on("click", function(){
                    guarlt++;
                    var add = $("#guaranaLitro").text("Guarana 1lt: " + guarlt);
                })
                $("#guarlr").on("click", function(){
                    guarlt--;
                    var rest = $("#guaranaLitro").text("Guarana 1lt: " + guarlt);
                })
            })
        //GUARANA DOS LITROS
            $(function() {
                var guardlt = 0;
                $("#guardlm").on("click", function(){
                    guardlt++;
                    var add = $("#guaranaDos").text("Guarana 2lt: " + guardlt);
                })
                $("#guardlr").on("click", function(){
                    guardlt--;
                    var rest = $("#guaranaDos").text("Guarana 2lt: " + guardlt);
                })
            })
        //GUARANA TRES LITROS
            $(function() {
                var guartlt = 0;
                $("#guartlm").on("click", function(){
                    guartlt++;
                    var add = $("#guaranaTres").text("Guarana 3lt: " + guartlt);
                })
                $("#guartlr").on("click", function(){
                    guartlt--;
                    var rest = $("#guaranaTres").text("Guarana 3lt: " + guartlt);
                })
            })
    //CERVEZAS
        //PILSEN
            $(function() {
                var pilsen = 0;
                $("#pilsenm").on("click", function(){
                    pilsen++;
                    var add = $("#pilsen").text("Pilsen: " + pilsen);
                })
                $("#pilsenr").on("click", function(){
                    pilsen--;
                    var rest = $("#pilsen").text("Pilsen: " + pilsen);
                })
            })
        //NEGRA
            $(function() {
                var negra = 0;
                $("#negram").on("click", function(){
                    negra++;
                    var add = $("#negra").text("Negra: " + negra);
                })
                $("#negrar").on("click", function(){
                    negra--;
                    var rest = $("#negra").text("Negra: " + negra);
                })
            })
        //TRIGO
            $(function() {
                var trigo = 0;
                $("#trigom").on("click", function(){
                    trigo++;
                    var add = $("#trigo").text("Trigo: " + trigo);
                })
                $("#trigor").on("click", function(){
                    trigo--;
                    var rest = $("#trigo").text("Trigo: " + trigo);
                })
            })
        //CRISTAL
            $(function() {
                var cristal = 0;
                $("#cristalm").on("click", function(){
                    cristal++;
                    var add = $("#cristal").text("Cristal: " + cristal);
                })
                $("#cristalr").on("click", function(){
                    cristal--;
                    var rest = $("#cristal").text("Cristal: " + cristal);
                })
            })
        //DORADA
            $(function() {
                var dorada = 0;
                $("#doradam").on("click", function(){
                    dorada++;
                    var add = $("#dorada").text("Dorada: " + dorada);
                })
                $("#doradar").on("click", function(){
                    dorada--;
                    var rest = $("#dorada").text("Dorada: " + dorada);
                })
            })
        //PILSEN LITRO
            $(function() {
                var pilsenlt = 0;
                $("#pilsenltm").on("click", function(){
                    pilsenlt++;
                    var add = $("#pilsenlt").text("Pilsen lt: " + pilsenlt);
                })
                $("#pilsenltr").on("click", function(){
                    pilsenlt--;
                    var rest = $("#pilsenlt").text("Pilsen lt: " + pilsenlt);
                })
            })
    //AGUA
        //SIN GAS
            $(function() {
                var aguasg = 0;
                $("#aguasgm").on("click", function(){
                    aguasg++;
                    var add = $("#aguasg").text("Agua s/g: " + aguasg);
                })
                $("#aguasgr").on("click", function(){
                    aguasg--;
                    var rest = $("#aguasg").text("Agua s/g: " + aguasg);
                })
            })
        //CON GAS
            $(function() {
                var aguacg = 0;
                $("#aguacgm").on("click", function(){
                    aguacg++;
                    var add = $("#aguacg").text("Agua c/g: " + aguacg);
                })
                $("#aguacgr").on("click", function(){
                    aguacg--;
                    var rest = $("#aguacg").text("Agua c/g: " + aguacg);
                })
            })

    //CHICHA MORADA
        //CHICHA MEDIO
            $(function() {
                var chicham = 0;
                $("#chichamm").on("click", function(){
                    chicham++;
                    var add = $("#chicham").text("Chicha ½: " + chicham);
                })
                $("#chichamr").on("click", function(){
                    chicham--;
                    var rest = $("#chicham").text("Chicha ½: " + chicham);
                })
            })
        //CHICHA LITRO
            $(function() {
                var chichalt = 0;
                $("#chichaltm").on("click", function(){
                    chichalt++;
                    var add = $("#chichalt").text("Chicha 1lt: " + chichalt);
                })
                $("#chichaltr").on("click", function(){
                    chichalt--;
                    var rest = $("#chichalt").text("Chicha 1lt: " + chichalt);
                })
            })
        //CHICHA JARRA
            $(function() {
                var chichajr = 0;
                $("#chichajrm").on("click", function(){
                    chichajr++;
                    var add = $("#chichajr").text("Chicha Jarra: " + chichajr);
                })
                $("#chichajrr").on("click", function(){
                    chichajr--;
                    var rest = $("#chichajr").text("Chicha Jarra: " + chichajr);
                })
            })
