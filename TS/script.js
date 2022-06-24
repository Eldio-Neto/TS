// let numero1 = document.querySelector('#numero1') as HTMLInputElement;
// let numero2 = document.querySelector('#numero2') as HTMLInputElement;
// const botao = document.getElementById('calcular')
// let res = document.querySelector('#resultado');
// function calcular (n1: number, n2: number){
//     return n1 + n2
// }
// botao.addEventListener('click', function(){
//     res.innerHTML = calcular(+numero1.value, +numero2.value).toString()
// })
// types primitivos de Tipagens --------------
// let nome: string = 'eldio';
// let idade: number = 10;
//type em arrays -----------------------
// let nomes: string[] = ["eldio", "luciane", "pedro"];
// let idades: number[]= [10,20,30];
// let numerosss: Array<number> = [10,20,30];
// type Any -------------
// let usuario: any = ['eldio','neto', 25 ]
// usuario.push(true)
//types em funções ----------------------------
// function firstLetterUpperCase(name: string, idade: number){
//     let primeiraLetra = name.charAt(0).toUpperCase();
//     return primeiraLetra+name.substring(1) + " " + idade;
// }
//types em return--------------------------
// function somar(n1:number, n2:number):number{
//     return n1+n2
// }
// types em objetos -------------------------
// function resumo(usuario:{nome: string, idade: number}){
//     return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
// }
// let u = {
//     nome: 'Eldio',
//     idade: 90
// }
// resumo(u)
// propriedeades opcionais-------------------------
// function resumo(usuario:{nome: string, idade?: number}){ AO COLOCAR ? o item Passa a ser opcional
//        IF(usuario.idade != 'undefined'){
//              return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
//      }else{
//              return `Olá ${usuario.nome}        
//}
// }
// let u = {
//     nome: 'Eldio',
//     idade: 90
// }
// resumo(u)
// Union Types -------------------------------
// function mostrarIdade(idade: string|number){
//     return idade
// }
// mostrarIdade(90)
// mostrarIdade('90')
// Criando types---------------------------------------
// type user={
//     nome:string,
//     turma: number
// }
// function resumo(usuario:user){
//     return `${usuario.nome}, seja bem vindo!` +'<br>'+`você pertence a turma ${usuario.turma}`
// }
// resumo({
//     nome: 'Eldio',
//     turma: 3
// }    
// )
//Type Assertions------------------------------------------------
// let idadeField = document.getElementById('idade') as HTMLInputElement;
// //...
// console.log(idadeField.value)
//Types literais ------------------------------------------------
// function configurar(props:{width:number|'auto', heigth:number|'auto'}){
// }
// configurar({width:100, heigth:100});
// configurar({width:'auto', heigth:'auto'});
//Inferência literal---------------------------------------------------------
// function fazerRequisicao(url:string, method:'POST'|'GET'){
// }
// type requestDetails = {
//     url:string,
//     method: 'POST'|'GET'
// }
// let req:requestDetails={
//     url:'www.google.com',
//     method: 'POST'
// }
// fazerRequisicao(req.url, req.method)
//Type para funções ---------------------------------------------------------
// type mathFunctions = (n1:number, n2:number) => number
// const somar:mathFunctions = (n1, n2)=>{
//     return n1 + n2
// }
// const subtrair:mathFunctions = (n1, n2)=>{
//     return n1 - n2
// }
// const dividir:mathFunctions = (n1, n2)=>{
//     return n1 / n2
// }
// const multiplicar:mathFunctions = (n1, n2)=>{
//     return n1 * n2
// }
//Retorno void---------------------------------
// function removeElement(el:HTMLElement):void{
//     el.remove()
// }
