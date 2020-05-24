/*EXAMEN FINAL JAVA*/
var resultado = 0, memoria = 0, oper = "", dato = "t";
function muestra(num, dis){
  if(dis == '0'){
    document.querySelector("#display").innerHTML= num;
  }
  else{
    document.querySelector("#display").innerHTML= dis + num;
  }
}

function chkpunto(){
  var dis = document.getElementById('display').innerText;
  if(dis.indexOf(".")== -1){
    if(dis == "0"){
        num_pres = "0.";
      }else{
        num_pres = ".";
      }
  }else {
    num_pres ="";
  }
  return num_pres
}

function verifica(){
  var tecla = event.which || event.keyCode, num_pres = "";
  if (tecla>47 && tecla<58) {
      tecla=tecla-48;
      num_pres = String(tecla);
    }else if(tecla == 46){
      num_pres = chkpunto();
   }
   switch (tecla) {
     case 43:
        suma();
        break;
     case 45:
        resta();
        break;
     case 42:
        multi();
        break;
      case 47:
        divi();
        break;
      case 13:
        igual();
        break;
      }
   return num_pres;
}

function reduce(num_pres){
    var imagen = document.getElementById(num_pres);
    if (num_pres > 3){
      imagen.style.width = "20%";
    }else{
      imagen.style.width = "27%";
    }
}

function regresa(){
  var tecla = event.which || event.keyCode, num_pres = "";
  if (tecla>47 && tecla<58) {
      tecla=tecla-48;
      num_pres = String(tecla)
      }
  if (tecla>95 && tecla<106){
      tecla = tecla - 96;
      num_pres = String(tecla);
      }
    var imagen = document.getElementById(num_pres);
      if (num_pres > 3){
              imagen.style.width = "22.5%";
            }else{
              imagen.style.width = "30%";
        }
}

function teclas(){
  num_pres = verifica();
  largo(num_pres);
  reduce(num_pres);
  }

function largo(num){
  var dis = document.getElementById('display').innerText, lar = dis.length;
  if (lar < 8){
    muestra(num, dis);
  }
}

function num7(){
  var num = "7";
    largo(num);
}
function num8(){
    var num = "8";
    largo(num);
}
function num9(){
    var num = "9";
    largo(num);
}
function num4(){
    var num = "4";
    largo(num);
}
function num5(){
    var num = "5";
    largo(num);
}
function num6(){
    var num = "6";
    largo(num);
}
function num1(){
    var num = "1";
    largo(num);
}
function num2(){
    var num = "2";
    largo(num);
}
function num3(){
    var num = "3";
    largo(num);
}
function num0(){
    var num = "0";
    largo(num);
}
function suma(){
  var dis =document.querySelector("#display").innerHTML;
  if (dis == ""){alert("Ingresa el Valor");
    }else{
      if (dato == "t"){
        var valor1 = document.getElementById('display').innerText;
        resultado = Number(valor1) + resultado;
      }else {dato = "t";}
    }
  oper = "sumar";
  document.querySelector("#display").innerHTML = "";
}
function resta(){
  var dis =document.querySelector("#display").innerHTML;
  if (dis == ""){alert("Ingresa el Valor");
    }else{
    if (dato == "t"){
      var valor1 = document.getElementById('display').innerText;
      if (resultado == 0){resultado = Number(valor1);
      }else{resultado = resultado - Number(valor1);}
    }else{dato = "t";}
    }
    oper = "restar";
    document.querySelector("#display").innerHTML = "";
}
function multi(){
  var dis =document.querySelector("#display").innerHTML;
  if (dis == ""){alert("Ingresa el Valor");
  }else{
  if (dato == "t"){
        var valor1 = document.getElementById('display').innerText;
        if (resultado == 0){resultado = Number(valor1);
        }else{resultado = resultado * Number(valor1);}
      }else{dato = "t";}
    }
  oper = "multiplicar";
  document.querySelector("#display").innerHTML = "";
}
function divi(){
  var dis =document.querySelector("#display").innerHTML;
  if (dis == ""){alert("Ingresa el Valor");
  }else{
  if (dato == "t"){
        var valor1 = document.getElementById('display').innerText;
        if (resultado == 0){resultado = Number(valor1);
        }else{resultado = resultado / Number(valor1);}
      }else{dato = "t";}
    }
  oper = "dividir";
  document.querySelector("#display").innerHTML = "";
}

function igual(){
  var valor1 = document.getElementById('display').innerText;
  if (dato == "t"){
    memoria = valor1;
  }
  switch (oper) {
    case 'sumar':
        resultado = Number(resultado) + Number(memoria);
        dato = "f";
      break;
    case 'restar':
        resultado = Number(resultado) - Number(memoria);
        dato = "f";
      break;
    case 'multiplicar':
        resultado = Number(resultado) * Number(memoria);
        dato = "f";
      break;
    case 'dividir':
        resultado = Number(resultado) / Number(memoria);
        dato = "f";
      break;
  }
  if (resultado > 99999999){
    document.querySelector("#display").innerHTML = resultado.toPrecision(6);
    }else{
    document.querySelector("#display").innerHTML = resultado;
    }
}
function on(){
    document.querySelector("#display").innerHTML="0";
    resultado = 0; memoria = 0; oper = "";
    dato = "t";
}
function punto(){
    num_pres = chkpunto();
    largo(num_pres);
}
function signo(){
  var dis = document.getElementById('display').innerText;
  if(dis.indexOf("-")== -1){
    if(dis != '0'){
      document.querySelector("#display").innerHTML= "-" + dis
      }
  }else {
    lar = dis.length;
    dis = dis.substr(1,lar);
    document.querySelector("#display").innerHTML= dis
   }
}

function inicio(){
  document.getElementById('igual').onclick = igual;
  document.getElementById('dividido').onclick = divi;
  document.getElementById('por').onclick = multi;
  document.getElementById('menos').onclick = resta;
  document.getElementById('mas').onclick = suma;
  document.getElementById('sign').onclick = signo;
  document.getElementById('on').onclick = on;
  document.getElementById('punto').onclick = punto;
  document.getElementById('7').onclick = num7;
  document.getElementById('8').onclick = num8;
  document.getElementById('9').onclick = num9;
  document.getElementById('4').onclick = num4;
  document.getElementById('5').onclick = num5;
  document.getElementById('6').onclick = num6;
  document.getElementById('1').onclick = num1;
  document.getElementById('2').onclick = num2;
  document.getElementById('3').onclick = num3;
  document.getElementById('0').onclick = num0;
  document.onkeypress = teclas;
  document.onkeyup = regresa;
}

inicio();
