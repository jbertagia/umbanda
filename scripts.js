document.addEventListener("DOMContentLoaded", function () {
    // 1 Script para o Carrossel animado dos Orixás
    const carrosselContainer = document.querySelector('.carrossel');
    if (carrosselContainer) {
        const slides = carrosselContainer.querySelectorAll('.slide');
        let slideIndex = 0;
        let intervalId;

        // Descrições
        const orixasDescricoes = {
            "Oxalá": "Oxalá é um dos orixás mais importantes da tradição afro-brasileira, especialmente no candomblé e na umbanda. Ele é associado à criação do mundo e à luz, simbolizando paz, sabedoria e espiritualidade. Oxalá é frequentemente representado como um velho sábio, vestido de branco, refletindo pureza e serenidade.",
            "Ogum": "Ogum é um orixá muito venerado nas religiões afro-brasileiras, como o candomblé e a umbanda. Ele é associado à guerra, ao metal, à tecnologia e à força, sendo considerado o patrono dos ferreiros, guerreiros e engenheiros. Ogum é conhecido como o orixá que abre caminhos e remove obstáculos, simbolizando a luta e a determinação na busca por conquista e justiça.",
            "Iemanjá": "Iemanjá é uma das orixás mais reverenciadas nas religiões afro-brasileiras, especialmente no candomblé e na umbanda. Ela é a deusa dos mares, das águas e da fertilidade, frequentemente associada à maternidade, ao amor e à proteção da família. Iemanjá é considerada a mãe de todos os orixás e é símbolo de força e suavidade, refletindo as dualidades da natureza.",
            "Iansã": "Iansã, também conhecida como Oyá, é uma importante orixá nas tradições afro-brasileiras, como o candomblé e a umbanda. Ela é a deusa dos ventos, tempestades e dos raios, representando a força da natureza e a transformação. Iansã é frequentemente associada à luta, à guerra, à criatividade e à liberdade, simbolizando o empoderamento feminino.",
            "Oxóssi": "Oxóssi é um importante Orixá das tradições afro-brasileiras, como o candomblé e a umbanda. Ele é o deus da caça, das florestas e da fartura, representando a conexão com a natureza e a prosperidade. Oxóssi também é associado à sabedoria, à busca pelo conhecimento e à proteção, sendo um símbolo de sobrevivência e abundância.",
            "Oxum": "Oxum é uma Orixá muito venerada nas tradições afro-brasileiras, como o candomblé e a umbanda. Ela é a deusa dos rios, das águas doces e da fertilidade, representando o amor, a beleza e a prosperidade. Oxum é associada à maternidade, à riqueza e à proteção das crianças, sendo um símbolo de delicadeza, sensibilidade e poder feminino.",
            "Xangô": "Xangô é um Orixá poderoso nas tradições afro-brasileiras, como o candomblé e a umbanda. Ele é o deus da justiça, dos raios e trovões, representando a força, o poder e a autoridade. Xangô é associado ao equilíbrio e à sabedoria nas decisões, sendo um símbolo de liderança e imparcialidade. Além disso, ele é reverenciado como o protetor dos injustiçados e da verdade."
        };

        // Função de início dos slides do carrossel
        function startCarousel() {
            intervalId = setInterval(() => {
                slideIndex = (slideIndex + 1) % slides.length;
                updateCarousel();
            }, 3000);
        }

        // Função para atualizar a posição dos slides
        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(-${slideIndex * 100}%)`;
            });
        }

        // Função para pausar a animação quando o mouse estiver sobre o slide
        carrosselContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
        carrosselContainer.addEventListener('mouseleave', startCarousel);

        // Iniciar o carrossel
        startCarousel();

        // Função do modal para exibir os dados ao clicar no slide
        const modal = document.getElementById('myModal');
        const modalTitle = document.getElementById('modal-orixas');
        const modalDescription = document.getElementById('modal-descricao');
        const closeModalBtn = document.querySelector('.close');

        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                const title = slide.querySelector('h2').innerText;
                const description = orixasDescricoes[title]; // Variável que captura a descrição do Orixá
                modalTitle.innerText = title;
                modalDescription.innerText = description;
                modal.style.display = 'block';
            });
        });

        // Função para fechar o modal
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // 2 Script para página de Curiosidades
    const conteudo = document.getElementById('conteudo');
    const botoes = document.querySelectorAll('.menu-opcoes button');

    // Validação para aplicar funções da página Curiosidades
    if (conteudo && botoes.length > 0) {
        let ultimaOpcaoSelecionada = null;
        const conteudoOriginal = conteudo.innerHTML;
        const opcoesConteudo = [
            { descricao: "Oxalá: Considerado o pai de todos os orixás, representa a criação e a paz.", imagem: "IMG/oxala.jpg" },
            { descricao: "Ogum: Deusa das águas doces, do amor e da fertilidade.", imagem: "IMG/Ogum.webp" },
            { descricao: "Iemanjá: Rainha do mar, associada à maternidade e à proteção.", imagem: "IMG/iemanja.webp" },
            { descricao: "Iansã: Deusa dos ventos e tempestades, simbolizando a guerra e a transformação.", imagem: "IMG/iansa.jpg" },
            { descricao: "Oxóssi: Orixá da caça e da fartura, representando a natureza e a abundância.", imagem: "IMG/oxossi.jpg" },
            { descricao: "Oxum: Deus da guerra e do ferro, associado à luta e à proteção.", imagem: "IMG/oxum.jpg" },
            { descricao: "Xangô: Deus do trovão e da justiça, simbolizando a força e a liderança.", imagem: "IMG/xango.png" }
        ];

        // Função dos clicas nos botões
        botoes.forEach((botao, index) => {
            botao.addEventListener('click', () => {
                if (ultimaOpcaoSelecionada === index) {
                    // Função para retornar para o conteúdo padrão
                    conteudo.innerHTML = conteudoOriginal;
                    ultimaOpcaoSelecionada = null;
                } else {
                    // Função para exibir o conteúdo do botão selecionado
                    const opcaoSelecionada = opcoesConteudo[index];
                    conteudo.innerHTML = `<div class="centro"><h3>${botao.innerText}</h3><p>${opcaoSelecionada.descricao}</p><img src="${opcaoSelecionada.imagem}" alt="${botao.innerText}" style="height: 300px;"></div>`;
                    ultimaOpcaoSelecionada = index;
                }
            });
        });
    }

    // 3 Script para página do Formulario
    const formulario = document.getElementById('formulario');

    // Validação para aplicar funções do formulário
    if (formulario) {
        const telefoneInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        // Validação para o campo de Telefone e CEP, com tamanho fixado, não permitindo informar letras apenas números e aplicação de máscara
        if (telefoneInput && cepInput) {

            telefoneInput.addEventListener('input', () => {
                let value = telefoneInput.value.replace(/\D/g, '');
                if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
                else if (value.length > 0) value = `(${value}`;
                telefoneInput.value = value;
            });

            cepInput.addEventListener('input', () => {
                let value = cepInput.value.replace(/\D/g, '');
                if (value.length > 5) value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
                cepInput.value = value;
            });
        }

        // Evento de envio do formulário
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();
            // Coleta dados para apresentar confirmação para o usuário
            const nome = document.getElementById('nome').value;
            const orixa = document.getElementById('orixas').value;
            const exu = document.getElementById('exu').value;
            const cep = cepInput.value;
            const telefone = telefoneInput.value;
            const cidade = document.getElementById('cidade').value;
            const estado = document.getElementById('estado').value;
            const confirmacao = `Confirma os seguintes dados?\n\nNome: ${nome}\nOrixá: ${orixa}\nExu: ${exu}\nCEP: ${cep}\nTelefone: ${telefone}\nCidade: ${cidade}\nEstado: ${estado}`;
            // Valida se o usuário confirmou ou não confirmou o envio
            if (confirm(confirmacao)) {
                alert("Dados enviados com sucesso!");
                formulario.reset();
            } else {
                alert("Verifique os dados e corrija o que está divergente e envie novamente.");
            }
        });
    }
});
