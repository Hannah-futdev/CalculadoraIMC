// o primeiro a se fazer é desativar o recarregamento padrão da página
const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');
const resultadoPanel = document.querySelector('#resultado-panel');
const sugestao = document.querySelector('#sugestao');

function prevenir(evento) {
    evento.preventDefault();
    // evita que o formulário recarregue a página ao submeter

    let peso = form.querySelector('#peso').value;
    peso = Number(peso.replace(',', '.'));
    let altura = form.querySelector('#altura').value;

// Nova validação: verifica se altura tem separador decimal
if (!altura.includes(',') && !altura.includes('.')) {
    mostrarErroNoInput('A altura deve ser digitada em metros (exemplo: 1,54 ou 1.54).');
    return;
}

altura = Number(altura.replace(',', '.'));
limparErroInput(); //limpa erro se passou na validação

    if (Number.isNaN(peso) || peso <= 0) {
        mostrarErro('Por favor, informe um peso válido.');
        return;
    }

    if (Number.isNaN(altura) || altura <= 0) {
        mostrarErro('Por favor, informe uma altura válida.');
        return;
    }
    // validação do peso e altura antes de calcular o IMC

    const imc = calculoIMC(peso, altura);
    
    if (Number.isNaN(imc)) {
        mostrarErro('Os valores informados não permitem calcular o IMC.');
        return;
    }

    const imcFormatado = imc.toFixed(2);
    const classificacao = classificacaoIMC(imc);
    // calcula IMC e obtém a classificação apropriada

    resultadoPanel.classList.remove('hidden');
    // mostra o painel de resultado apenas após o cálculo ser feito

    resultado.innerHTML = `<p>Seu IMC é <strong>${imcFormatado}</strong> kg/metros quadrados.</p>
        <p>${classificacao.resultado}</p>`;
        

    // atualiza o texto do resultado no container direito
    sugestao.innerHTML=`<p>${classificacao.sugestao}</p>`;


}

function calculoIMC(peso, altura) {
    return peso / altura ** 2;
    }

calculoIMC (peso, altura);




function classificacaoIMC(imc) {
    if (imc <= 18.5) {
        return {
            resultado: 'Abaixo do peso',
            sugestao: 'Para o ganho de peso, é sugerido aumentar de 300 a 500 calorias de consumo por dia. Entre em contato com um de nossos nutricionistas para um melhor acompanhamento',}
    }
    if (imc >= 18.6 && imc <= 24.9) {
        return {
            resultado: 'Eutrófico — seu peso está na faixa ideal',
            sugestao: 'Ótimo! Que tal entrar em contato com um de nossos nutricionistas para melhorar ainda mais?',}
    } if (imc >= 25 && imc <= 29.9) {
        return {
            resultado: 'Sobrepeso — seu peso está acima da faixa ideal',
            sugestao: 'Para a perda de peso, é sugerido diminuir de 300 a 500 calorias de consumo por dia. Entre em contato com um nutricionista para um melhor acompanhamento',}
    } if (imc >= 30 && imc <= 34.9) {
       return {
            resultado: 'Obesidade grau I — seu peso está acima da faixa ideal',
            sugestao: 'Entre em contato com um de nossos nutricionistas e endocrinologistas para um melhor acompanhamento',}
    } if (imc >= 35 && imc <= 39.9) {
        return {
            resultado: 'Obesidade grau II — seu peso está acima da faixa ideal',
            sugestao: 'Entre em contato com um de nossos nutricionistas e endocrinologistas para um melhor acompanhamento',}
        }
    if (imc >= 40) {
        return {
            resultado: 'Obesidade grau III — seu peso está acima da faixa ideal',
            sugestao: 'Entre em contato com um de nossos nutricionistas e endocrinologistas para um melhor acompanhamento',}
        }
}

function mostrarErroNoInput (mensagem) {
    const erroAltura = document.querySelector('#erro-altura');
    const inputAltura = form.querySelector('#altura');

    erroAltura.textContent = mensagem;
    erroAltura.classList.remove ('hidden');
    inputAltura.classList.add('input-erro');
}

function limparErroInput () {
    const erroAltura = document.querySelector('#erro-altura');
    const inputAltura = form.querySelector('#altura');

    erroAltura.classList.add('hidden');
    inputAltura.classList.remove('input-erro');
}


function mostrarErro(mensagem) {
    resultadoPanel.classList.remove('hidden');
    resultado.innerHTML = `<p>${mensagem}</p>`;
    // mostra o painel mesmo em caso de erro, para dar feedback visual
}


form.addEventListener('submit', prevenir);
// adiciona o evento de submit ao formulário para disparar o cálculo

