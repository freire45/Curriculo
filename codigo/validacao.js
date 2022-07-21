const nome = document.querySelector('#nomeCliente');

nome.addEventListener('blur', (evento) => {
    validaNome(evento.target);
});

function validaNome(input){
    let n = nome.value;
    let qtd = n.length;
    let mensagem = '';   
    

    if(qtd === 0){
        mensagem = 'Campo em Branco, Por Favor o Preencha';
    }

    if(qtd >= 50){
        mensagem = 'Nome muito grande, máximo de 50 caracteres, preencha novamente!';
    }

    input.setCustomValidity(mensagem);

};
