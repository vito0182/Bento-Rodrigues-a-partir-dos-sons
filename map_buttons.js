var map_buttons = {
    'Torcida': {
      pos: [0.310752677233843, 0.17357687598409668, 0.38781360913348456, 0.26564758289106394],
      audio: "audios/torcida.mp3",
      text: "É legal quando a gente vai jogar e ouve a torcida vibrar.",
      image: 'torcida.jpg',
      image_description: 'Referência: Time feminino de Bento Rodrigues\nFoto: Joyce Valverde – Jornal A Sirene – disponível em: https://jornalasirene.com.br/esporte/2021/02/17/o-futebol-feminino-do-unidos-de-bento-rodrigues acesso: 24/10/2022',
      icon: 'torcida.jpg'
    },
    'Futebol': {
      pos: [0.353763429922015, 0.31522411737943096, 0.4182795589542731, 0.4002124622166315],
      audio: "",
      text: "A bola batendo no travessão dá uma acelerada no coração.",
      image: 'futebol.png',
      image_description: ' Referência:  Time de Futebol de Bento Rodrigues\nFoto cedida por Júlia Silva\n15 de maio de 2022',
      icon: 'futebol.png'
    },
    'Apito': {
      pos: [0.5007168349399361, 0.33411041623214216, 0.5419354729327677, 0.3978516748600426],
      audio: "",
      text: "Quando o apito sopra dá pra saber quando é o pênalti.",
      image: 'apito.jpg',
      image_description: 'Referência: Jogo de futebol entre Paracatu e Santa Rita Durão\nFoto: Daniela Felix/Jornal A Sirene\nVisualizado em: https://www.facebook.com/JornalSirene/photos/a.1910601809203321/1910601935869975 acesso 24 out. 2022',
      icon: 'apito.jpg'
    },
    'Bateia': {
      pos: [0.6280653612502644, 0.3110399529376733, 0.6961852508423256, 0.3784253958339531],
      audio: "audios/bateia.mp3",
      text: "É bom porque a gente sabe que tem ouro.",
      image: 'bateia.jpg',
      image_description: 'Referência: Bateia\nFoto: Sérgio Papagaio\nAcesso: https://jornalasirene.com.br/papo-cumadres/2018/08/28/papo-de-cumadres-o-garimpo/attachment/papo-2-1-de-1-bateia acesso em \nout. 2022',
      icon: 'bateia.jpg'
    },
    'Boi': {
      pos: [0.6995912453219287, 0.40762575442234106, 0.7745231238731961, 0.4660264715991169],
      audio: "audios/boi.mp3",
      text: "O mugido do boi não me assusta.",
      image: 'boi.png',
      image_description: 'Referência:  Vanessa Arcanjo – 6º ano\nVacas em seu sítio\nout. 2022',
      icon: 'boi.png'
    },
    'Maritaca': {
      pos: [0.8627700127064803, 0.5644182073326175, 0.9085133418043202, 0.6706576677036125],
      audio: "audios/maritaca.mp3",
      text: "A gente conhece o barulho da maritaca de longe.",
      image: 'maritaca.png',
      image_description: 'Referência: Luís Fernando Coelho\nMaritaca da sua casa\nOut. 2022',
      icon: 'maritaca.png'
    },
    'Sirene da escola': {
      pos: [0.3243512825872022, 0.4312057404193834, 0.3742514799083102, 0.4957779456187629], 
      audio: "",
      text: "O barulho é irritante, mas é legal quando é hora do recreio.",
      image: 'sirene.png',
      image_description: 'Referência: Escola de Bento Rodrigues é reinaugurada. Jornal O Liberal, 25 dez. 2012. Disponível em: http://antigo.jornaloliberal.net/noticia/escola-de-bento-rodrigues-e-inaugurada/. Acesso em: 26 set. 2022.',
      icon: 'sirene.jpg'
    },
    'Galinha': {
      pos: [0.6689372950055011, 0.5311657330655208,0.7353541873577609, 0.6277515345501886],
      audio: "audios/galinheiro.mp3",
      text: "Galinha quando cacareja acorda a gente.",
      image: 'galinha.jpg',
      image_description: 'Referência: Viver e ser assim. O cotidiano de seu Pascoal. Jornal A Sirene, março de 2018. Foto de Artur Dinardo. Disponível em: http://jornalasirene.com.br/galeria-de-imagens/2018/03/01/viver-e-ser-assim. Acesso em: 26 set. 2022.',
      icon: 'galinha.jpg'
    },
    'Pessoas conversando': {
      pos: [0.4940119534789695, 0.5487602678336384,0.550149675465216, 0.6265780535867367],
      audio: "audios/pessoas conversando.mp3",
      text: "É bom quando tem fofoca.",
      image: 'conversa.jpg',
      image_description: 'Referência: Alunos da Escola passeando em Bandeirantes. https://www.facebook.com/photo/?fbid=2127135580651399&set=pb.100057286097232.-2207520000.\nAcesso em: 19 out. 2022',
      icon: 'person.png'
    },
    'Festas juninas': {
      pos: [0.49650696334502487, 0.6977730490629757, 0.537674626134939, 0.7689680445392145],
      audio: "audios/fogo.mp3",
      text: "O barulho da fogueira é relaxante.",
      image: 'festa_junina.jpg',
      image_description: 'Referência: Festa Junina da Escola de Bento Rodrigues\nArquivo da Escola de Bento Rodrigues\n30/07/2017',
      icon: 'person.png'
    },
    'Bandas de música': {
      pos: [0.6636726243707368, 0.7341983955857025, 0.7460079499505651, 0.8037376934927266],
      audio: "audios/banda.mp3",
      text: "Lá no Bento, quando passava, eu tinha medo do barulho.",
      image: 'banda.png',
      image_description: 'Referência: Banda de música Senhor Bom Jesus de Matozinhos; Filomeno da Silva, 82 anos, toca clarineta na segunda fila, ao centro (Foto: Arquivo pessoal/Mauro da Silva)\nhttps://g1.globo.com/minas-gerais/desastre-ambiental-em-mariana/noticia/2016/07/povoado-festeja-1-dia-do-padroeiro-apos-destruicao-de-bento-rodrigues.html',
      icon: 'person.png'
    },
    'Garfo batendo no prato': {
      pos: [0.3455588664486731, 0.7606895519561515, 0.4079341131000581, 0.8269174547247459],
      audio: "",
      text: "Parece que o prato vai quebrar na hora que arranha.",
      image: 'prato.jpg',
      image_description: '',
      icon: 'person.png'
    },
    'Explicação Professor': {
      pos: [0.3143712431229806, 0.6017425853115251, 0.36926146017619943, 0.6596920002340452],
      audio: "audios/professores.mp3",
      text: "São inteligentes, é bom que a gente aprende, mas tem alguns estressados.",
      image: 'professor.png',
      image_description: 'Referência:  Professores de Bento Rodrigues\nTirada em 02/09/2017\nAcervo pessoal',
      icon: 'person.png'
    },
    'Cachoeira': {
      pos: [0.7909181275395623, 0.5040564160958785, 0.8320857903294764, 0.5735957140029025],
      audio: "audios/cachoeira.mp3",
      text: "O barulho é bom e quando ouço eu quero pular.",
      image: 'cachoeira.jpg',
      image_description: 'Referência: Cachoeira de Bento Rodrigues \nFotografia Lucas Godoy\n10 de março de 2016',
      icon: 'person.png'
    },
  }
