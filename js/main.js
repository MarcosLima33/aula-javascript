//var nome = "Antonio Marcos";
//var idade = 30;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(frase.replace("Japão", "Brasil"));


//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log (lista);
//console.log (lista.toString());
//console.log (lista.join(" - "));


//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome);

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas[0].nome);
//var idade = prompt("Qual a sua idade? ");
//var idade = 18;
//if (idade >= 18){
//   alert("maior de idade");
//}else{
//    alert("menor de idade");
//}

//var count = 0;
//while(count <= 5){
//    console.log(count);
//    count = count + 1;
//}

//var count;

//for(count=0; count <=5; count++){
//    alert(count);
//}


//var d = new Date();

//alert(d);

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
  return  frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));
//alert(setReplace("Vai japao", "japao", "brasil"));


function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://google.com");
  
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}