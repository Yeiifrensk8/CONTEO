$(document).ready(function(){
    $(".gaseosas").slideUp(700);
    $(".cervezas").slideUp(700);
    $(".aguas").slideUp(700);
})

$(function(){
    $(".boxG").on("click", function(){
        var hid = $(".gaseosas").toggle(400);
    });
    $(".boxC").on("click", function(){
        var hid = $(".cervezas").toggle(400)
    });
    $(".boxA").on("click", function(){
        var hid = $(".aguas").toggle(400)
    });
})

//FUNCION DE BOTONES (AUMENTO Y DECREMENTO)
    //INKA MEDIO
        $(function() {
            var inkm = 0;
            $("#inkaMedioM").on("click", function() {
                inkm++;
                var add = $("#inkaMedio").text("Inka ½: " + inkm);
            });
            $("#inkaMedioR").on("click", function() {
                inkm--;
                var rest = $("#inkaMedio").text("Inka ½: " + inkm);
            });
        })
    //GORDITA
        $(function() {
            var gord = 0;
            $("#gorditaM").on("click", function() {
                gord++;
                var add = $("#gordita").text("Gordita: " + gord);
            });
            $("#gorditaR").on("click", function() {
                gord--;
                var rest = $("#gordita").text("Gordita: " + gord);
            });
        })
    //INKA LITRO
        $(function() {
            var inklt = 0;
            $("#inkaLitroM").on("click", function() {
                inklt++;
                var add = $("#inkaLitro").text("Inka 1lt: " + inklt);
            })
            $("#inkaLitroR").on("click", function() {
                inklt--;
                var rest = $("#inkaLitro").text("Inka 1lt: " + inklt);
            })
        })
    //INKA LITRO MEDIO
        $(function() {
            var inklm = 0;
            $("#iLitroMedioM").on("click", function() {
                inklm++;
                var add = $("#iLitroMedio").text("Inka 1½: " + inklm);
            })
            $("#iLitroMedioR").on("click", function() {
                inklm--;
                var rest = $("#iLitroMedio").text("Inka 1½: " + inklm);
            })
        })
    //INKA TRES LITRO
        $(function() {
            var inktl = 0;
            $("#inkaTresM").on("click", function() {
                inktl++;
                var add = $("#inkaTres").text("Inka 3lt: " + inktl);
            })
            var inktl = 0;
            $("#inkaTresR").on("click", function() {
                inktl--;
                var rest = $("#inkaTres").text("Inka 3lt: " + inktl);
            })
        })
        //COCA MEDIO
        $(function() {
            var cocm = 0;
            $("#cocaMedioM").on("click", function(){
                cocm++;
                var add = $("#cocaMedio").text("Coca ½: " + cocm);
            })
            $("#cocaMedioR").on("click", function(){
                cocm--;
                var rest = $("#cocaMedio").text("Coca ½: " + cocm);
            })
        })
    //COCA LITRO
        $(function() {
            var coclt = 0;
            $("#cocaLitroM").on("click", function(){
                coclt++;
                var add = $("#cocaLitro").text("Coca 1lt: " + coclt);
            })
            $("#cocaLitroR").on("click", function(){
                coclt--;
                var rest = $("#cocaLitro").text("Coca 1lt: " + coclt);
            })
        })
    //COCA LITRO MEDIO
        $(function() {
            var coclm = 0;
            $("#cLitroMedioM").on("click", function(){
                coclm++;
                var add = $("#cLitroMedio").text("Coca 1½: " + coclm);
            })
            $("#cLitroMedioR").on("click", function(){
                coclm--;
                var rest = $("#cLitroMedio").text("Coca 1½: " + coclm);
            })
        })
    //COCA TRES LITROS
        $(function() {
            var coctl = 0;
            $("#cocaTresM").on("click", function(){
                coctl++;
                var add = $("#cocaTres").text("Coca 3lt: " + coctl);
            })
            $("#cocaTresR").on("click", function(){
                coctl--;
                var rest = $("#cocaTres").text("Coca 3lt: " + coctl);
            })
        })
    //PILSEN
        $(function() {
            var pilsen = 0;
            $("#pilsenM").on("click", function(){
                pilsen++;
                var add = $("#pilsen").text("Pilsen: " + pilsen);
            })
            $("#pilsenR").on("click", function(){
                pilsen--;
                var rest = $("#pilsen").text("Pilsen: " + pilsen);
            })
        })
    //NEGRA
        $(function() {
            var negra = 0;
            $("#negraM").on("click", function(){
                negra++;
                var add = $("#negra").text("Negra: " + negra);
            })
            $("#negraR").on("click", function(){
                negra--;
                var rest = $("#negra").text("Negra: " + negra);
            })
        })
    //TRIGO
        $(function() {
            var trigo = 0;
            $("#trigoM").on("click", function(){
                trigo++;
                var add = $("#trigo").text("Trigo: " + trigo);
            })
            $("#trigoR").on("click", function(){
                trigo--;
                var rest = $("#trigo").text("Trigo: " + trigo);
            })
        })
    //AGUA
        $(function(){
            var agua = 0;
            $("#aguaM").on("click", function(){
                agua++;
                var add = $("#agua").text("Agua: " + agua);
            })
            $("#aguaR").on("click", function(){
                agua--;
                var rest = $("#agua").text("Agua: " + agua);
            })
        })
    