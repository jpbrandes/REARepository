function verificarRespostas() {
    let acertos = 0;
    let total = 7;
    let todasRespondidas = true;

    let questoes = [
        {
            nome: 'p1',
            feedbackId: 'f1',
            justificativaCerto: "Correto! O framework impõe a arquitetura e controla o fluxo da aplicação, enquanto as bibliotecas são chamadas de forma pontual pelo seu código.",
            justificativaErro: "Incorreto. Lembre-se que o framework dita a arquitetura e controla o fluxo (Inversão de Controle), ao contrário das bibliotecas."
        },
        {
            nome: 'p2',
            feedbackId: 'f2',
            justificativaCerto: "Correto! O runtime é o ambiente de execução responsável por rodar o código e dar suporte à linguagem (como o ambiente próprio do Java).",
            justificativaErro: "Incorreto. O runtime atua como o ambiente de execução do software, e não na interface ou na substituição de frameworks."
        },
        {
            nome: 'p3',
            feedbackId: 'f3',
            justificativaCerto: "Correto! O Princípio de Hollywood usa a frase 'não nos chame, nós chamaremos você' para explicar a Inversão de Controle.",
            justificativaErro: "Incorreto. O princípio foca justamente na Inversão de Controle, onde a estrutura interna chama o seu código customizado quando necessário."
        },
        {
            nome: 'p4',
            feedbackId: 'f4',
            justificativaCerto: "Correto! Django é um framework backend completo em Python que vem 'com tudo incluso' (painel, segurança, etc.).",
            justificativaErro: "Incorreto. Django é o framework backend em Python; React é frontend e Spring Boot é em Java."
        },
        {
            nome: 'p5',
            feedbackId: 'f5',
            justificativaCerto: "Correto! A curva de aprendizado específica e a superengenharia (usar ferramentas pesadas sem necessidade) são desafios clássicos citados.",
            justificativaErro: "Incorreto. A alternativa correta envolve a curva de aprendizado e o risco da superengenharia."
        },
        {
            nome: 'p6',
            feedbackId: 'f6',
            justificativaCerto: "Correto! O frontend foca na experiência do usuário, cuidando de menus, botões, cores e interatividade visual.",
            justificativaErro: "Incorreto. O gerenciamento de dados e banco de dados é competência do backend, não do frontend."
        },
        {
            nome: 'p7',
            feedbackId: 'f7',
            justificativaCerto: "Correto! O backend atua como o mecanismo interno do sistema, lidando com a manipulação e armazenamento de dados do usuário.",
            justificativaErro: "Incorreto. O backend gerencia o mecanismo interno e os dados, enquanto a parte visual/botões fica a cargo do frontend."
        }
    ];

    questoes.forEach(q => {
        let radios = document.getElementsByName(q.nome);
        let feedback = document.getElementById(q.feedbackId);
        let respondido = false;

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                respondido = true;
                if (radios[i].value === 'certo') {
                    feedback.innerHTML = `<span style="color: green; font-weight: bold;">Correto!</span> ${q.justificativaCerto}`;
                    acertos++;
                } else {
                    feedback.innerHTML = `<span style="color: red; font-weight: bold;">Incorreto.</span> ${q.justificativaErro}`;
                }
            }
        }

        if (!respondido) {
            feedback.innerHTML = `<span style="color: orange; font-weight: bold;">Por favor, selecione uma alternativa.</span>`;
            todasRespondidas = false;
        }
    });

    let resultadoFinal = document.getElementById('resultado-final');
    if (todasRespondidas) {
        resultadoFinal.innerHTML = `<h3 style="margin-top: 20px; padding: 10px; background-color: #e2e8f0; border-radius: 5px; text-align: center;">Você acertou ${acertos} de ${total} perguntas!</h3>`;
    } else {
        resultadoFinal.innerHTML = "";
    }
}