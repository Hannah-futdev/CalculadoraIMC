# 🧮 Calculadora de IMC

Uma calculadora de Índice de Massa Corporal (IMC) desenvolvida com **HTML**, **CSS** e **JavaScript puro**, que calcula a classificação do IMC do usuário a partir do peso e altura informados e exibe uma orientação personalizada de acordo com o resultado.

## 📋 Funcionalidades

- Cálculo do IMC a partir do peso (kg) e altura (m) inseridos pelo usuário
- Classificação automática do resultado (abaixo do peso, peso normal, sobrepeso, obesidade, etc.)
- Exibição de uma orientação/recomendação de acordo com a classificação obtida
- Validação dos dados inseridos
- Interface simples e responsiva

## 🚀 Demonstração
![Demonstração da calculadora](./assets/TabelaIMC.gif)

## 🛠️ Tecnologias utilizadas

- **HTML5** – estrutura da página
- **CSS3** – estilização e layout
- **JavaScript** – lógica de cálculo, validação e manipulação do DOM

## 📁 Estrutura do projeto
calculadora-imc/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   │    └── TabelaIndex.html
│   └── TabelaIMC.gif
├── script.js
└── README.md

## ▶️ Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/Hannah-futdev/CalculadoraIMC]
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd calculadora-imc
   ```
3. Abra o arquivo `index.html` no navegador (ou use a extensão **Live Server** do VS Code).

## 🧠 Como funciona

1. O usuário insere o **peso** (kg) e a **altura** (m) nos campos do formulário.
2. Ao clicar em calcular, o JavaScript aplica a fórmula do IMC:

   ```
   IMC = peso / (altura × altura)
   ```
3. O resultado é comparado com as faixas de classificação da OMS e exibido na tela, junto com uma orientação sobre os próximos passos recomendados.

## 📈 Melhorias futuras

- [ ] Adicionar histórico de cálculos
- [ ] Salvar dados no `localStorage`
- [ ] Adicionar gráfico de evolução do IMC
- [ ] Tornar o layout ainda mais responsivo para dispositivos móveis

## 👩‍💻 Autora

Desenvolvido por **Hannah** como projeto de estudo em desenvolvimento web (HTML, CSS e JavaScript).

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo.
