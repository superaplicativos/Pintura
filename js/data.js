/**
 * Catálogo de Obras - Guilherme Miranda
 */

const ARTWORKS = [
  {
    id: "CR-001",
    slug: "planeta-aurora",
    title: { pt: "Planeta Aurora", en: "Planet Aurora" },
    year: 2024,
    series: { pt: "Série Cosmos", en: "Cosmos Series" },
    technique: { pt: "Óleo sobre tela", en: "Oil on canvas" },
    dimensions: "120 × 90 cm",
    price: "R$ 25.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "Primeira obra da Série Cosmos, Planeta Aurora investiga o nascimento de um corpo celeste através de camadas sobrepostas de óleo que simulam a expansão de uma nebulosa protoestelar. A composição central gira em torno de um núcleo dourado irradiante, cercado por halos concêntricos de azul profundo e ocre. A obra foi executada em sete sessões consecutivas, cada uma adicionando uma camada de atmosfera planetária.",
      en: "The first work in the Cosmos Series, Planet Aurora investigates the birth of a celestial body through overlapping layers of oil that simulate the expansion of a protostellar nebula. The central composition revolves around a radiant golden core, surrounded by concentric halos of deep blue and ochre."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2024.", en: "Artist's studio, São Paulo, 2024." },
    exhibitions: [{ pt: "Web Summit Lisboa 2024", en: "Web Summit Lisbon 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-002",
    slug: "dadaismo-estelar",
    title: { pt: "Dadaísmo Estelar", en: "Stellar Dadaism" },
    year: 2023,
    series: { pt: "Série Dada", en: "Dada Series" },
    technique: { pt: "Acrílica e colagem sobre tela", en: "Acrylic and collage on canvas" },
    dimensions: "100 × 100 cm",
    price: "R$ 18.000",
    status: "available",
    medium: "mixed",
    description: {
      pt: "Homenagem ao movimento dadaísta de Tristan Tzara, esta obra justapõe recortes de mapas astronômicos do século XIX com gestos pictóricos espontâneos. A colagem central, um fragmento de atlas celeste de 1872, é cercada por jorros de tinta acrílica magenta que evocam erupções solares.",
      en: "A tribute to Tristan Tzara's Dadaist movement, this work juxtaposes cutouts of 19th-century astronomical maps with spontaneous pictorial gestures. The central collage, a fragment of an 1872 celestial atlas, is surrounded by bursts of magenta acrylic paint evoking solar eruptions."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2023.", en: "Artist's studio, São Paulo, 2023." },
    exhibitions: [{ pt: "Galeria Beco, São Paulo, 2023", en: "Galeria Beco, São Paulo, 2023" }],
    bibliography: ["Revista Arte Brasileira, Edição 47, 2023"],
    signature: { pt: "Assinado no frontal", en: "Signed on front" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-003",
    slug: "saturno-invertido",
    title: { pt: "Saturno Invertido", en: "Inverted Saturn" },
    year: 2024,
    series: { pt: "Série Cosmos", en: "Cosmos Series" },
    technique: { pt: "Óleo sobre linho", en: "Oil on linen" },
    dimensions: "150 × 100 cm",
    price: "R$ 32.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "Saturno Invertido apresenta o planeta dos anéis em uma configuração impossível, com os anéis verticais e a atmosfera em turbulência cromática. A obra utiliza uma técnica de veladura em doze camadas para criar profundidade atmosférica.",
      en: "Inverted Saturn presents the ringed planet in an impossible configuration, with vertical rings and a chromatically turbulent atmosphere. The work uses a glazing technique in twelve layers to create atmospheric depth."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2024.", en: "Artist's studio, São Paulo, 2024." },
    exhibitions: [{ pt: "Exposição individual, 2024", en: "Solo exhibition, 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-004",
    slug: "invencao-eclipse",
    title: { pt: "A Invenção do Eclipse", en: "The Invention of Eclipse" },
    year: 2023,
    series: { pt: "Série Invenções", en: "Inventions Series" },
    technique: { pt: "Técnica mista sobre painel", en: "Mixed media on panel" },
    dimensions: "80 × 80 cm",
    price: "R$ 15.000",
    status: "sold",
    medium: "mixed",
    description: {
      pt: "Da Série Invenções, esta obra imagina o eclipse solar não como fenômeno astronômico, mas como máquina inventada pelo observador. A composição apresenta um dispositivo mecânico em ouro que 'produz' o eclipse, com engrenagens douradas e uma lua artificial cobrindo o sol central.",
      en: "From the Inventions Series, this work imagines the solar eclipse not as an astronomical phenomenon, but as a machine invented by the observer. The composition presents a golden mechanical device that 'produces' the eclipse, with golden gears and an artificial moon covering the central sun."
    },
    provenance: { pt: "Vendido para coleção particular, 2024.", en: "Sold to private collection, 2024." },
    exhibitions: [{ pt: "SP-Arte 2024", en: "SP-Arte 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no frontal", en: "Signed on front" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-005",
    slug: "nebulosa-tinta",
    title: { pt: "Nebulosa de Tinta", en: "Ink Nebula" },
    year: 2024,
    series: { pt: "Série Cosmos", en: "Cosmos Series" },
    technique: { pt: "Acrílica sobre tela", en: "Acrylic on canvas" },
    dimensions: "200 × 150 cm",
    price: "R$ 45.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "A maior obra da Série Cosmos, Nebulosa de Tinta é um mural de escala monumental que traduz imagens do Telescópio James Webb em gestos pictóricos abstratos. A tela, com mais de dois metros, foi executada no chão do atelier com técnica de derramamento e aerógrafo.",
      en: "The largest work in the Cosmos Series, Ink Nebula is a monumental-scale mural that translates James Webb Telescope imagery into abstract pictorial gestures. The canvas, over two meters, was executed on the studio floor using pouring and airbrush techniques."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2024.", en: "Artist's studio, São Paulo, 2024." },
    exhibitions: [{ pt: "Exposição 'Cosmos', 2024", en: "Exhibition 'Cosmos', 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-006",
    slug: "mercurio-transe",
    title: { pt: "Mercúrio em Transe", en: "Mercury in Trance" },
    year: 2022,
    series: { pt: "Série Cosmos", en: "Cosmos Series" },
    technique: { pt: "Óleo sobre madeira", en: "Oil on wood" },
    dimensions: "60 × 80 cm",
    price: "R$ 12.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "Mercúrio em Transe captura o menor planeta do sistema solar em estado de fusão alucinógena. A superfície craterada do planeta se dissolve em padrões psicodélicos de laranjas e marrons quentes, sugerindo uma transcendência da matéria.",
      en: "Mercury in Trance captures the smallest planet in the solar system in a hallucinogenic state of fusion. The planet's cratered surface dissolves into psychedelic patterns of warm oranges and browns, suggesting a transcendence of matter."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2022.", en: "Artist's studio, São Paulo, 2022." },
    exhibitions: [{ pt: "Coletiva 'Planetas', Rio, 2023", en: "Group show 'Planets', Rio, 2023" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-007",
    slug: "constelacao-dada",
    title: { pt: "Constelação Dada", en: "Dada Constellation" },
    year: 2024,
    series: { pt: "Série Dada", en: "Dada Series" },
    technique: { pt: "Colagem e tinta sobre papel", en: "Collage and ink on paper" },
    dimensions: "90 × 120 cm",
    price: "R$ 22.000",
    status: "available",
    medium: "mixed",
    description: {
      pt: "Constelação Dada mapeia estrelas imaginárias conectando recortes de jornais antigos, bilhetes de supermercado e fragmentos de partituras musicais. As linhas que unem os pontos formam uma constelação que só existe na imaginação do artista.",
      en: "Dada Constellation maps imaginary stars by connecting cutouts from old newspapers, supermarket receipts, and fragments of musical scores. The lines connecting the points form a constellation that exists only in the artist's imagination."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2024.", en: "Artist's studio, São Paulo, 2024." },
    exhibitions: [{ pt: "Beco Street Showcase, 2024", en: "Beco Street Showcase, 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no frontal", en: "Signed on front" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-008",
    slug: "planeta-vermelho",
    title: { pt: "Planeta Vermelho", en: "Red Planet" },
    year: 2023,
    series: { pt: "Série Cosmos", en: "Cosmos Series" },
    technique: { pt: "Óleo sobre tela", en: "Oil on canvas" },
    dimensions: "100 × 80 cm",
    price: "R$ 20.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "Planeta Vermelho é uma meditação sobre Marte como arquétipo de fronteira humana. A obra apresenta o planeta não como objetivos científico, mas como vazio existencial - uma esfera vermelha flutuando em um campo de tinta negra profunda.",
      en: "Red Planet is a meditation on Mars as an archetype of human frontier. The work presents the planet not as scientific objective, but as existential void - a red sphere floating in a field of deep black paint."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2023.", en: "Artist's studio, São Paulo, 2023." },
    exhibitions: [{ pt: "Individual 'Cosmos', 2024", en: "Solo 'Cosmos', 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-009",
    slug: "maquina-cosmica",
    title: { pt: "A Máquina Cósmica", en: "The Cosmic Machine" },
    year: 2024,
    series: { pt: "Série Invenções", en: "Inventions Series" },
    technique: { pt: "Técnica mista sobre tela", en: "Mixed media on canvas" },
    dimensions: "110 × 110 cm",
    price: "R$ 28.000",
    status: "available",
    medium: "mixed",
    description: {
      pt: "A Máquina Cósmica imagina o universo como engenharia - uma estrutura de engrenagens douradas girando em torno de um núcleo escuro. A obra combina pintura a óleo com colagem de metal real e elementos em baixo relevo.",
      en: "The Cosmic Machine imagines the universe as engineering - a structure of golden gears rotating around a dark core. The work combines oil painting with real metal collage and bas-relief elements."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2024.", en: "Artist's studio, São Paulo, 2024." },
    exhibitions: [
      { pt: "Web Summit Lisboa 2024", en: "Web Summit Lisbon 2024" },
      { pt: "Beco Street Showcase, 2024", en: "Beco Street Showcase, 2024" }
    ],
    bibliography: ["Catálogo Raisonné Vol. I, 2024", "Catálogo Web Summit 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-010",
    slug: "venus-fragmentada",
    title: { pt: "Vênus Fragmentada", en: "Fragmented Venus" },
    year: 2023,
    series: { pt: "Série Cosmos", en: "Cosmos Series" },
    technique: { pt: "Acrílica sobre tela", en: "Acrylic on canvas" },
    dimensions: "70 × 90 cm",
    price: "R$ 14.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "Vênus Fragmentada apresenta o segundo planeta do sistema solar em estado de colapso cubista. A obra divide a esfera venusiana em facetas geométricas douradas e alaranjadas.",
      en: "Fragmented Venus presents the second planet of the solar system in a state of cubist collapse. The work divides the Venusian sphere into golden and orange geometric facets."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2023.", en: "Artist's studio, São Paulo, 2023." },
    exhibitions: [{ pt: "Coletiva 'Planetas', Rio, 2023", en: "Group show 'Planets', Rio, 2023" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-011",
    slug: "buraco-negro",
    title: { pt: "Invenção #7: Buraco Negro", en: "Invention #7: Black Hole" },
    year: 2024,
    series: { pt: "Série Invenções", en: "Inventions Series" },
    technique: { pt: "Óleo sobre tela", en: "Oil on canvas" },
    dimensions: "130 × 100 cm",
    price: "R$ 35.000",
    status: "available",
    medium: "painting",
    description: {
      pt: "Sétima obra da Série Invenções, Buraco Negro é uma pintura que se autodescreve como objeto impossível. O centro da tela é um vazio absoluto - tinta preta fosca aplicada em camadas até absorver 99% da luz visível.",
      en: "The seventh work in the Inventions Series, Black Hole is a painting that self-describes as an impossible object. The center of the canvas is an absolute void - matte black paint applied in layers until it absorbs 99% of visible light."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2024.", en: "Artist's studio, São Paulo, 2024." },
    exhibitions: [{ pt: "Exposição 'Cosmos', 2024", en: "Exhibition 'Cosmos', 2024" }],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no verso", en: "Signed on reverse" },
    condition: { pt: "Excelente", en: "Excellent" }
  },
  {
    id: "CR-012",
    slug: "jupiter-dadaista",
    title: { pt: "Júpiter Dadaísta", en: "Dadaist Jupiter" },
    year: 2022,
    series: { pt: "Série Dada", en: "Dada Series" },
    technique: { pt: "Técnica mista sobre tela", en: "Mixed media on canvas" },
    dimensions: "160 × 120 cm",
    price: "R$ 38.000",
    status: "available",
    medium: "mixed",
    description: {
      pt: "Júpiter Dadaísta é a obra mais ambiciosa da Série Dada. Apresenta o gigante gasoso como uma colagem de textos filosóficos, manchetes de jornais e imagens telescópicas recortadas.",
      en: "Dadaist Jupiter is the most ambitious work in the Dada Series. It presents the gas giant as a collage of philosophical texts, newspaper headlines, and cutout telescopic images."
    },
    provenance: { pt: "Atelier do artista, São Paulo, 2022.", en: "Artist's studio, São Paulo, 2022." },
    exhibitions: [
      { pt: "Individual 'Dada', 2022", en: "Solo 'Dada', 2022" },
      { pt: "SP-Arte 2023", en: "SP-Arte 2023" }
    ],
    bibliography: ["Catálogo Raisonné Vol. I, 2024"],
    signature: { pt: "Assinado no frontal", en: "Signed on front" },
    condition: { pt: "Excelente", en: "Excellent" }
  }
];

const BIO = {
  name: "Guilherme Miranda",
  role: { pt: "Pintor · Autor · Cofundador do Beco Street", en: "Painter · Author · Co-founder of Beco Street" },
  tagline: {
    pt: "Onde o cosmos encontra a pintura. Onde o dadaísmo encontra o infinito.",
    en: "Where cosmos meets painting. Where Dadaism meets infinity."
  },
  bio: {
    pt: "Guilherme Miranda é pintor, produtor editorial e cofundador do Beco Street, startup de arte premiada internacionalmente. Sua obra transita entre a tradição da pintura a óleo e a experimentação dadaísta, com temática dominante de planetas, cosmos e invenções impossíveis. Como autor, publicou mais de 250 livros na Amazon, conquistando posições de ranking global como 323 e 1450. Como empreendedor cultural, levou o Beco Street ao Web Summit em Lisboa e a primeiros lugares em diversos concursos e premiações.",
    en: "Guilherme Miranda is a painter, editorial producer, and co-founder of Beco Street, an internationally award-winning art startup. His work moves between the tradition of oil painting and Dadaist experimentation, with a dominant theme of planets, cosmos, and impossible inventions. As an author, he has published over 250 books on Amazon, achieving global ranking positions such as 323 and 1450. As a cultural entrepreneur, he took Beco Street to the Web Summit in Lisbon and to first places in various competitions and awards."
  },
  fullBio: {
    pt: [
      "Nascido em São Paulo, Guilherme Miranda desenvolveu desde cedo uma fascinação dupla: pela astronomia e pela pintura clássica. Esses dois interesses aparentemente distantes se fundiram em uma poética singular, na qual planetas, nebulosas e buracos negros se tornam pretextos para investigar as possibilidades da tinta óleo, da colagem e da técnica mista.",
      "Sua formação autodidata em pintura começou copiando mestres holandeses do século XVII em museus de São Paulo. A descoberta do dadaísmo de Tristan Tzara e Hugo Ball, ainda na juventude, abriu caminho para uma prática experimental que nunca abandonou. Hoje, sua obra oscila entre duas séries principais: a Série Cosmos, dedicada à pintura de corpos celestes, e a Série Dada, focada em colagens e justaposições irracionais. Uma terceira série, Invenções, explora máquinas impossíveis inspiradas em Da Vinci e Tinguely.",
      "Paralelamente à pintura, Guilherme construiu uma carreira editorial com mais de 250 livros publicados na Amazon, alcançando leitores em todo o mundo e posições de destaque em rankings globais da plataforma. Sua produção literária cobre ficção, ensaio e poesia, muitas vezes dialogando com os mesmos temas de sua pintura.",
      "Como cofundador do Beco Street, startup de arte que conecta artistas emergentes a colecionadores, Guilherme atuou como curador e diretor criativo. Sob sua liderança, o Beco Street conquistou primeiros lugares em concursos nacionais e foi selecionado para representar o Brasil no Web Summit de Lisboa em 2024, um dos maiores eventos de tecnologia e inovação do mundo.",
      "Hoje, Guilherme divide seu tempo entre o atelier em São Paulo, onde produz sua obra pictórica, e a gestão criativa do Beco Street. Suas obras estão em coleções particulares no Brasil, Portugal, Estados Unidos e Alemanha, e têm sido apresentadas em feiras como SP-Arte e em exposições individuais e coletivas em galerias independentes."
    ],
    en: [
      "Born in São Paulo, Guilherme Miranda developed an early dual fascination: with astronomy and classical painting. These two seemingly distant interests merged into a singular poetics, in which planets, nebulae, and black holes become pretexts for investigating the possibilities of oil paint, collage, and mixed media.",
      "His self-taught training in painting began by copying Dutch masters of the 17th century in São Paulo museums. The discovery of Tristan Tzara and Hugo Ball's Dadaism, still in his youth, opened the path to an experimental practice he never abandoned. Today, his work oscillates between two main series: the Cosmos Series, dedicated to painting celestial bodies, and the Dada Series, focused on collages and irrational juxtapositions. A third series, Inventions, explores impossible machines inspired by Da Vinci and Tinguely.",
      "In parallel to painting, Guilherme built an editorial career with over 250 books published on Amazon, reaching readers worldwide and achieving prominent positions in the platform's global rankings. His literary output covers fiction, essay, and poetry, often dialoguing with the same themes as his painting.",
      "As co-founder of Beco Street, an art startup that connects emerging artists with collectors, Guilherme served as curator and creative director. Under his leadership, Beco Street won first places in national competitions and was selected to represent Brazil at the Web Summit in Lisbon in 2024, one of the world's largest technology and innovation events.",
      "Today, Guilherme divides his time between his studio in São Paulo, where he produces his pictorial work, and the creative management of Beco Street. His works are in private collections in Brazil, Portugal, the United States, and Germany, and have been presented at fairs such as SP-Arte and in solo and group exhibitions at independent galleries."
    ]
  },
  stats: [
    { number: "250+", label: { pt: "Livros publicados", en: "Books published" } },
    { number: "12", label: { pt: "Obras em catálogo", en: "Works in catalogue" } },
    { number: "4", label: { pt: "Países com obras", en: "Countries with works" } },
    { number: "1º", label: { pt: "Lugar em concursos", en: "Place in competitions" } }
  ]
};

const EXHIBITIONS = [
  { year: "2024", title: { pt: "Web Summit Lisboa", en: "Web Summit Lisbon" }, venue: { pt: "Lisboa, Portugal", en: "Lisbon, Portugal" }, type: { pt: "Exposição internacional", en: "International exhibition" } },
  { year: "2024", title: { pt: "Exposição Individual 'Cosmos'", en: "Solo Exhibition 'Cosmos'" }, venue: { pt: "Galeria Beco, São Paulo", en: "Galeria Beco, São Paulo" }, type: { pt: "Individual", en: "Solo" } },
  { year: "2024", title: { pt: "SP-Arte", en: "SP-Arte" }, venue: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" }, type: { pt: "Feira internacional", en: "International fair" } },
  { year: "2023", title: { pt: "Coletiva 'Planetas'", en: "Group Show 'Planets'" }, venue: { pt: "Rio de Janeiro, Brasil", en: "Rio de Janeiro, Brazil" }, type: { pt: "Coletiva", en: "Group" } },
  { year: "2023", title: { pt: "Beco Street Showcase", en: "Beco Street Showcase" }, venue: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" }, type: { pt: "Coletiva", en: "Group" } },
  { year: "2022", title: { pt: "Individual 'Dada'", en: "Solo 'Dada'" }, venue: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" }, type: { pt: "Individual", en: "Solo" } }
];

const BECO_STREET = {
  description: {
    pt: "Beco Street é uma startup de arte fundada com a missão de democratizar o acesso ao mercado de arte para artistas emergentes brasileiros. Como cofundador, Guilherme Miranda liderou a curadoria e direção criativa da empresa desde sua fundação. Sob sua gestão, o Beco Street conquistou primeiros lugares em diversos concursos e premiações nacionais, e foi selecionado para representar o Brasil no Web Summit de Lisboa 2024.",
    en: "Beco Street is an art startup founded with the mission of democratizing access to the art market for emerging Brazilian artists. As co-founder, Guilherme Miranda led the company's curation and creative direction from its founding. Under his management, Beco Street won first places in various national competitions and was selected to represent Brazil at the Web Summit in Lisbon 2024."
  },
  highlights: [
    { pt: "1º lugar em múltiplos concursos nacionais de startups culturais", en: "1st place in multiple national cultural startup competitions" },
    { pt: "Selecionado para o Web Summit Lisboa 2024", en: "Selected for Web Summit Lisbon 2024" },
    { pt: "Mais de 200 artistas emergentes conectados a colecionadores", en: "Over 200 emerging artists connected to collectors" },
    { pt: "Reconhecimento internacional pela inovação no mercado de arte", en: "International recognition for innovation in the art market" }
  ],
  website: "https://becostreet.com"
};

const BOOKS = {
  description: {
    pt: "Com mais de 250 livros publicados na Amazon, Guilherme Miranda construiu uma carreira editorial paralela à sua prática pictórica. Sua produção literária abrange ficção, ensaio, poesia e obras ilustradas, muitas vezes dialogando diretamente com os temas de sua pintura. Conquistou posições de destaque em rankings globais da Amazon, incluindo posições 323 e 1450 em categorias competitivas.",
    en: "With over 250 books published on Amazon, Guilherme Miranda has built an editorial career parallel to his pictorial practice. His literary output spans fiction, essay, poetry, and illustrated works, often dialoguing directly with the themes of his painting. He has achieved prominent positions in Amazon's global rankings, including positions 323 and 1450 in competitive categories."
  },
  stats: [
    { number: "250+", label: { pt: "Livros publicados", en: "Books published" } },
    { number: "323", label: { pt: "Ranking global Amazon", en: "Global Amazon ranking" } },
    { number: "1450", label: { pt: "Ranking em categoria", en: "Category ranking" } },
    { number: "∞", label: { pt: "Países com leitores", en: "Countries with readers" } }
  ],
  link: "https://amazon.com/author/guimiranda"
};

const CONTACT = {
  email: "contato@guimiranda.tech",
  phone: "+55 11 99999-9999",
  instagram: "@GuiMiranda.tech",
  location: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
  formspree: "https://formspree.io/f/your-form-id"
};

if (typeof window !== 'undefined') {
  window.ARTWORKS = ARTWORKS;
  window.BIO = BIO;
  window.EXHIBITIONS = EXHIBITIONS;
  window.BECO_STREET = BECO_STREET;
  window.BOOKS = BOOKS;
  window.CONTACT = CONTACT;
}
