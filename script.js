LoremIpsum.WORDS = [
  'Vocês tem que ir em Floripa.',
  'Precisa fazer isso em São Paulo.',
  'Só vou dizer uma vez, Canyon!',
  'Parem de mimimi e vão treinar.',
  'Levar o veneninho na caramanhola.',
  'Não tô com saco pra amador que não pensa como atleta.',
  'Quer patrocínio? Se vire.',
  'Teu cú.',
  'Vamos tirar o kom dos amiguinho.',
  '15 minutos, levou pernada.',
  'Pra que fazer audax, sem sentido.',
  'Vai lá então, leva no Kiko.',
  'Eu já disse, não vou fazer montanha hoje.',
  'Partiu, cetrevi pegar uns KOM.',
  'Você precisa emagrecer, seu gordo.',
  'São tudo atletas de strava.',
  'Teus amiguinhos, vai lá.',
  'Tomara que um caminhão de porco passe por cima.',
  'Vai ter seletivo, seletivo.',
  'Hoje é na maldade.',
  'Vocês querem mais o que?',
  'Eu treino 6 vezes por minuto, e vocês, já pedalaram hoje?',
  'Não vou passar planilha pra ninguém.',
  'Gastando dinheiro com coisa inútil.',
  'Diodi, vai levar pernada.',
  'Fiquei jogando uma canastra esperando vocês.'
  'Tem que comprar a roda da nasa de 32g.',
  'Não vai fazer te pedalar melhor'
];

LoremIpsum.prototype.punctuate = function(sentence) { return sentence; }

var loremIpsum = new LoremIpsum();
var amount = document.getElementById('amount');
var output = document.getElementById('output');

document.getElementById('generate').addEventListener('click', function() {
  var text = loremIpsum.generate(amount.value);
  output.value = text;
});

new Clipboard('#copy');
