let quiz = [
  {
    question: "Quem foi o primeiro amor de Gangplank?",
    alternative: ["Graves", "Miss Fortune", "Illaoi", "Uma jovem mercadores de BilgeWater"],
    answer: "Illaoi",
  },
  {
    question: "O que Fizz é?",
    alternative: ["Um yordle", "Uma doninha", "Um ser do vazio", "Um peixe"],
    answer: "Um yordle",
  },
  {
    question: "O que Darius é de Swain?",
    alternative: ["Swain matou a família de Darius", "Eles eram amigos antes de Draven nascer", "Um inimigo de longas eras", "Um confiável subordinado"],
    answer: "Um confiável subordinado",
  },
  {
    question: "Leona e Pantheon eram o que na infância?",
    alternative: ["Nada", "Namorados", "Primos", "Inimigos mortais"],
    answer: "Namorados",
  },
  {
    question: "Quem ressuscitou Sion?",
    alternative: ["Ryze", "Jarvan IV", "Katarina", "Zilean"],
    answer: "Katarina",
  },
  {
    question: "O que Urgot deseja a Garen?",
    alternative: ["Felicidade, Urgot sabe que Garen é apaixonado por Katarina", "Força, Urgot ganhou uma luta contra Garen e Garen pediu revanche", "Vingança, Urgot foi cortado pela metade por Garen", "Alegria, Garen libertou Urgot de um sofrimento"],
    answer: "Vingança, Urgot foi cortado pela metade por Garen",
  },
  {
    question: "Qual a relação entre Poppy e Galio?",
    alternative: ["Ambos são fiéis a Darius", "Ambos são gárgulas", "Ambos tem uma força sobre-humana", "Ambos tiveram seus parentes assassinados por Darius"],
    answer: "Ambos tiveram seus parentes assassinados por Darius",
  },
  {
    question: "Qual a relação de Viktor com Warwick?",
    alternative: ["Viktor aprisionou e adestrou Warwick", "Viktor foi o motivo pelo qual Warwick quis virar um lobo", "Viktor contribuiu para que Warwick virasse um lobo", "Viktor matou e destruiu tudo que Warwick amava"],
    answer: "Viktor aprisionou e adestrou Warwick",
  },
  {
    question: "Qual a relação de Janna com Sivir?",
    alternative: ["Amigas de infância", "Mãe e filha", "Mestre e aprendiz", "Inimigas"],
    answer: "Mestre e aprendiz",
  },
  {
    question: "Quem trouxe Kog'Maw para Runeterra?",
    alternative: ["Kha'zix", "Cho'Gath", "Ryze", "Malzahar"],
    answer: "Malzahar",
  },
  {
    question: "Como era a relação entre Twisted Fate e Graves?",
    alternative: ["Eram amigos, mas Graves matou os pais de Twisted Fate", "Eram inimigos de contrabando", "Eram amigos, mas Twisted Fate traiu Graves e o enviou para a prisão", "Eram inimigos, mas se tornaram amigos para derrotar um mesmo inimigo"],
    answer: "Eram amigos, mas Twisted Fate traiu Graves e o enviou para a prisão",
  },
  {
    question: "O que Kennen é de Sonna?",
    alternative: ["Primo", "Mestre", "Fã", "Nada"],
    answer: "Fã",
  },
  {
    question: "Gragas e Jax são..",
    alternative: ["Padeiros", "Parceiros de bar", "Filhos do mesmo pai mas de mães diferentes", "Inimigos de longa data"],
    answer: "Parceiros de bar",
  },
  {
    question: "Maokai e Malphite são..",
    alternative: ["Casal", "Arvores", "Colegas", "Pedras"],
    answer: "Colegas",
  },
  {
    question: "Heimerdinger fez..",
    alternative: ['O experimento "O Projeto"', "O óculos de Master Yi e o avião de Corki", "O martelo de Jayce", "O veneno para Warwick se tornar lobo"],
    answer: "O óculos de Master Yi e o avião de Corki",
  }
];

let count = 0;
let countHits = 0;

function startQuiz() {
  let area = document.querySelector('main');
  if (count < quiz.length) {
    let layout = `
      <h1>${quiz[count].question}</h1>
      <section class="alternatives">
        <input onclick="verifyOption(event)" class="alt1" type="button" value="${quiz[count].alternative[0]}">
        <input onclick="verifyOption(event)" class="alt2" type="button" value="${quiz[count].alternative[1]}">
        <input onclick="verifyOption(event)" class="alt3" type="button" value="${quiz[count].alternative[2]}">
        <input onclick="verifyOption(event)" class="alt4" type="button" value="${quiz[count].alternative[3]}">
      </section>
    `;
    area.innerHTML = layout;
  } else {
    area.innerHTML = `<h1>Desafio concluído. Você acertou ${countHits} perguntas!</h1>`;
    if (countHits >= 10) {
      area.innerHTML += `<h1>Você se mostrou digno de ser chamado de 'LoL Player'. Por demaaaaacia!</h1>
      <p><a href="../index.html">Voltar</a></p>
      `;
    } else {
      area.innerHTML += `<h1>Você não se mostrou digno de ser chamado de 'LoL Player'. Sucuuuumba!</h1>
      <p><a href="../index.html">Voltar</a></p>
      `;
    }
  }
}

function verifyOption(e) {
  let option = e.target.value;
  if (option == quiz[count].answer) {
    e.target.classList.add("correct");
    countHits++;
  } else {
    e.target.classList.add("incorrect");
  }
  count++;
  setTimeout(() => {
    startQuiz();
  }, 500)
}

startQuiz();