
var pergunta = new Array(20);
pergunta[0] = "Qual bicho transmite Doença de Chagas?";
pergunta[1] = "Qual fruto é conhecido no Norte e Nordeste como jerimum?";
pergunta[2] = "Qual é o coletivo de cães?";
pergunta[3] = "Qual é o triângulo que tem todos os lados diferentes?";
pergunta[4] = "Qual é o antônimo de malograr?";
pergunta[5] = "Qual foi o último Presidente do período da ditadura militar no Brasil?";
pergunta[6] = "Seguindo a sequência do baralho, qual carta vem depois do dez?";
pergunta[7] = "O adjetivo venoso está relacionado a:";
pergunta[8] = "Em que parte do corpo se encontra a epiglote?";
pergunta[9] = "Como se chama o alimento extraído pelas plantas do solo?";
pergunta[10] = "Quantos signos astrológicos formam o zodíaco?";
pergunta[11] = "Quem é o 'patrono' do Exército Brasileiro?";
pergunta[12] = "Com quantos graus centígrados a água ferve?";
pergunta[13] = "Qual animal da fauna brasileira está retratado na nota de dez reais?";
pergunta[14] = "Uma pessoa que é cleptomaníaca é:";
pergunta[15] = "De onde era natural o pintor Picasso?";
pergunta[16] = "Que imperador tocou fogo em Roma?";
pergunta[17] = "Sashimi é um delicado prato originário de que país?";
pergunta[18] = "Qual é a capital dos Estados Unidos?";
pergunta[19] = "Qual sistema operacional da Microsoft?";

var opcaoA = new Array(20);
opcaoA[0] = "Pulga";
opcaoA[1] = "Caju";
opcaoA[2] = "Matilha";
opcaoA[3] = "Equilátero";
opcaoA[4] = "Perder";
opcaoA[5] = "Costa e Silva";
opcaoA[6] = "Rei";
opcaoA[7] = "Vela";
opcaoA[8] = "Estômago";
opcaoA[9] = "Celulose";
opcaoA[10] = "9 signos";
opcaoA[11] = "Marechal Deodoro";
opcaoA[12] = "200";
opcaoA[13] = "Jabuti";
opcaoA[14] = "Colecionadora";
opcaoA[15] = "Espanha";
opcaoA[16] = "César";
opcaoA[17] = "Japão";
opcaoA[18] = "Nova York";
opcaoA[19] = "Linux";

var opcaoB = new Array(20);
opcaoB[0] = "Barata";
opcaoB[1] = "Abóbora";
opcaoB[2] = "Rebanho";
opcaoB[3] = "Isóceles";
opcaoB[4] = "Fracassar";
opcaoB[5] = "João Figueiredo";
opcaoB[6] = "Valete";
opcaoB[7] = "Vento";
opcaoB[8] = "Pâncreas";
opcaoB[9] = "Seiva";
opcaoB[10] = "10 signos";
opcaoB[11] = "Barão de Mauá";
opcaoB[12] = "100";
opcaoB[13] = "Onça";
opcaoB[14] = "Decoradora";
opcaoB[15] = "Holanda";
opcaoB[16] = "Nero";
opcaoB[17] = "China";
opcaoB[18] = "Miami";
opcaoB[19] = "Windows";

var opcaoC = new Array(20);
opcaoC[0] = "Formiga";
opcaoC[1] = "Chuchu";
opcaoC[2] = "Alcateia";
opcaoC[3] = "Escaleno";
opcaoC[4] = "Conseguir";
opcaoC[5] = "Ernesto Geisel";
opcaoC[6] = "Nove";
opcaoC[7] = "Vênia";
opcaoC[8] = "Rim";
opcaoC[9] = "Mitose";
opcaoC[10] = "11 signos";
opcaoC[11] = "Duque de Caxias";
opcaoC[12] = "170";
opcaoC[13] = "Arara";
opcaoC[14] = "Médica";
opcaoC[15] = "França";
opcaoC[16] = "Brutus";
opcaoC[17] = "Índia";
opcaoC[18] = "Chicago";
opcaoC[19] = "MacOs";

var opcaoD = new Array(20);
opcaoD[0] = "Barbeiro";
opcaoD[1] = "Côco";
opcaoD[2] = "Manada";
opcaoD[3] = "Trapézio";
opcaoD[4] = "Desprezar";
opcaoD[5] = "Emílio Médici";
opcaoD[6] = "Ás";
opcaoD[7] = "Veia";
opcaoD[8] = "Boca";
opcaoD[9] = "Clorofila";
opcaoD[10] = "12 signos";
opcaoD[11] = "Marquês de Pombal";
opcaoD[12] = "220";
opcaoD[13] = "Tucano";
opcaoD[14] = "Doente";
opcaoD[15] = "Bélgica";
opcaoD[16] = "Calígula";
opcaoD[17] = "Indonésia";
opcaoD[18] = "Washington";
opcaoD[19] = "Opera";

var gabarito = new Array('D', 'B', 'A', 'C', 'C', 'B', 'B', 'D', 'D', 'B', 'D', 'C', 'B', 'C', 'D', 'A', 'B', 'A', 'D', 'B');

var questao = 0;
function sortearPergunta() {
	questao = Math.round(Math.random() * 19);

	document.getElementById('pergunta').innerHTML = pergunta[questao];

	document.getElementById('opcaoA').value = opcaoA[questao];
	document.getElementById('opcaoB').value = opcaoB[questao];
	document.getElementById('opcaoC').value = opcaoC[questao];
	document.getElementById('opcaoD').value = opcaoD[questao];
}

