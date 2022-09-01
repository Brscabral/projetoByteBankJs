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
    console.log(cliente);

    return cliente

}

function validaCamp(cliente){
    let msg = ""
    if(cliente.nome==''){
        msg += "Por favor, Informe um nome para seu cadastro \n"   
    }
    if(cliente.documento==''){
        msg += "Por favor, Informe seu cpf para seu cadastro \n"   
    }
    if(cliente.saldo ==''){
        msg += "Por favor, informe seu saldo \n";
    }
  
    if(msg != ''){
        alert("Por favor, preencha os campos vazios para efetuar seu cadastro")
        return false
    }

    return true
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

        let objetoClasse = pegaInfo();
        
        let saldoInicia = objetoClasse.saldo;
        
        const spanNomeCliente = document.createElement("span");
        const spanCpfCliente = document.createElement("span");
        const spanSaldoCliente = document.createElement("span");
        spanNomeCliente.textContent = `Cliente:  ${objetoClasse.nome} | `;
        spanCpfCliente.textContent = `CPF:  ${objetoClasse.documento} | `;
        spanSaldoCliente.textContent = `Saldo:  ${objetoClasse.saldo}  `;
    
       
        li.replaceChildren(spanNomeCliente, spanCpfCliente, spanSaldoCliente);

        
        
        
            botao.addEventListener('click', () =>{
            
                let acao = document.getElementById(''+id+'')
                    if(acao){
                        saldoInicia = objetoClasse.depositar(100);
                       
                        spanSaldoCliente.textContent = `Cliente: ${objetoClasse.saldo}`;
                         console.log(acao)
                         console.log(objetoClasse);
                         
                    }
                 
              
           });

        
       
        
        
        botao2.addEventListener('click', ()=> {
            let acao = document.getElementById(''+id+'')
            if(acao){
                saldoInicia = objetoClasse.saque(100);
               
                spanSaldoCliente.textContent = `Saldo: ${objetoClasse.saldo}`;
           
            }
       });
        
      

    }
    
        
}

btn.addEventListener('click', ()=>{
    let objetoClasse = pegaInfo()
    let valida = validaCamp(objetoClasse)
    if(valida){
        mostraClasse();
    }
    
    
   
})