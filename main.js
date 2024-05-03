const form = document.getElementById('form-agenda');
const nome =[];
const telefone =[];

let linhas =''; // variável linha como global para não ser apagada ao acionar o evendo submit

form.addEventListener('submit', function(e){
    e.preventDefault();

    //chame as funções aqui
    adcionaLinha();
    atualizaTabela();
    atualizaSomaContatos();
})

function adcionaLinha(){
    const inputNome = document.getElementById('nome-agenda');
    const inputNumero = document.getElementById('numero-agenda');

    //valida sé o nome ou número já foi adicionado a tabela
    if (nome.includes(inputNome.value)) {
        alert(`Ó nome ${inputNome.value} já foi adionado a genda!`);

    } else if (telefone.includes(inputNumero.value)) {
        alert(`Ó número ${inputNumero.value} já foi adionado a genda!`);

    } else {
    //adiciona os valores inputNome,inputNumero ao array para validação do if....includes    
    nome.push(inputNome.value);
    telefone.push(inputNumero.value);

    //abertura da linha
    let linha = '<tr>';

    //adição das colunas
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;

    //fechamento da linha
    linha += '</tr>';

    linhas += linha;

    }

//limpa os inputs
    inputNome.value = '';
    inputNumero.value = '';
}
//atualiza a tabela inserindo as linhas da função adcionaLinha
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

//faz a soma dos contatos
function somaContatos(){
    let contatos = 0;
    for (let i = 0; i < telefone.length; i++) {
        contatos += telefone[i];
    }
    return telefone.length;
}

//atualiza a tag com o total de contatos
function atualizaSomaContatos(){
    const totalContatos = somaContatos();

    document.getElementById('total-contatos').innerHTML = totalContatos;
}


