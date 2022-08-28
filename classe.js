let nome = document.querySelector('#inputName');
let documento = document.querySelector('#inputDocument');
let saldo = document.querySelector("#inputSaldo");
const btn = document.querySelector('#btn');
const div = document.querySelector('div');
const ul =document.createElement('ul');



let array=[];

function inicia(){
   
    div.appendChild(ul);
}

window.addEventListener('load', inicia())

class Cliente{
    constructor(nome, documento, saldo){
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo+=valor;
    }
    saque(valor){
        this.saldo-=valor;

    }
}


function pegaInfo(){
    let novo = nome.value;
    let doc = documento.value;
    let cash = saldo.value;
    
    let cliente = new Cliente(`${novo}`, `${doc}`, parseInt(`${cash}`));
    cliente.depositar(100);
    console.log(cliente);

    return cliente

}
function addArray(){
    let classe = pegaInfo()
    array.push(classe)
    console.log(array)

    return array;
}

function gerarIdBotao1(){
    return Math.floor(Math.random() * 3000);
}

function gerarIdBotao2(){
    return Math.floor(Math.random() * 3000);
}
function gerarIdLista(){
    return Math.floor(Math.random() * 3000);
}
function mostraClasse(){
    let lista=[]
    lista = addArray();
    let li = document.createElement('li');
    ul.appendChild(li)

    let id = gerarIdBotao1();
    let id2 = gerarIdBotao2();
    
    const botao = document.createElement('button');
    const botao2 = document.createElement('button');

    botao.setAttribute('id',`${id}`,'type', 'button');
    botao2.setAttribute('id',`${id2}`,'type', 'button');

    botao.appendChild(document.createTextNode('Depositar'));
    botao2.appendChild(document.createTextNode('Sacar'));

    ul.appendChild(botao);
    ul.appendChild(botao2);

    
    for(let i = 0; i<=lista.length; i++){
        let idLista = gerarIdLista();
        li.setAttribute('id', `${idLista}`)
        li.innerHTML='Cliente: ' + lista[i].nome + ' ' + 'CPF:' + lista[i].documento + ' ' + 'Saldo:' + lista[i].saldo + '';
        botao.setAttribute('onclick', 'classe.depositar('+ 100 +')');
        botao2.setAttribute('onclick', 'classe.saque('+ 100 +')' );
        

    }
    console.log(lista)
        
}

btn.addEventListener('click', ()=>{
    mostraClasse()
   
   console.log(mostraClasse());
})