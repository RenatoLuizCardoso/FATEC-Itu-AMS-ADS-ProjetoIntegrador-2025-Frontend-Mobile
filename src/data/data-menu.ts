export type AdditionId = keyof typeof additions;

export type MenuItem = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  subCategoryId: string | null;
  additionalIds: AdditionId[];
};

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
}

export const categories = [
  {
    id: 'entradas',
    name: 'Entradas',
    subCategories: [
      { id: 'saladas', name: 'Saladas' },
      { id: 'petiscos', name: 'Petiscos' },
    ],
  },
  {
    id: 'frutos-do-mar',
    name: 'Frutos do Mar',
    subCategories: [
      { id: 'peixes', name: 'Peixes' },
      { id: 'mariscos', name: 'Mariscos' },
    ],
  },
  {
    id: 'pratos-principais',
    name: 'Pratos Principais',
    subCategories: [
      { id: 'carnes', name: 'Carnes' },
      { id: 'aves', name: 'Aves' },
      { id: 'risotos', name: 'Risotos' },
    ],
  },
  {
    id: 'massas',
    name: 'Massas',
    subCategories: [],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    subCategories: [],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    subCategories: [
      { id: 'refrigerantes', name: 'Refrigerantes' },
      { id: 'sucos', name: 'Sucos' },
      { id: 'agua', name: 'Águas' },
      { id: 'cervejas', name: 'Cervejas' },
      { id: 'drinks', name: 'Drinks' },
    ],
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Bruschetta',
    shortDescription: 'Pão torrado com tomate e manjericão',
    description:
      'Uma entrada clássica e irresistível. Começamos com fatias generosas de pão italiano rústico, que são delicadamente torradas até atingirem a crocância perfeita. Em seguida, cobrimos com uma mistura vibrante de tomates frescos picados, alho, folhas de manjericão e um fio generoso do melhor azeite de oliva extra virgem. É o sabor autêntico da Itália em cada mordida.',
    price: 9.5,
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: [
      'queijoParmesao',
      'azeitonasPretas',
      'tomateSeco',
      'molhoPesto',
      'pimentaCalabresa',
    ],
  },
  {
    id: 2,
    name: 'Salada Caprese',
    shortDescription: 'Mussarela, tomate e manjericão',
    description:
      'Uma celebração de ingredientes frescos e de alta qualidade. Esta salada icônica combina fatias macias e suculentas de mussarela de búfala com rodelas de tomates maduros e perfumadas folhas de manjericão. Finalizada com um fio de azeite de oliva extra virgem e um toque de sal e pimenta, a Salada Caprese é a personificação da simplicidade e elegância da culinária italiana.',
    price: 13.0,
    image:
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80',
    categoryId: 'entradas',
    subCategoryId: 'saladas',
    additionalIds: [
      'azeitonasVerdes',
      'rucula',
      'molhoExtra',
      'queijoParmesao',
      'tomateSeco',
    ],
  },
  {
    id: 3,
    name: 'Carpaccio',
    shortDescription: 'Finíssimas fatias de carne',
    description:
      'Uma entrada sofisticada e cheia de sabor. Finíssimas lâminas de carne bovina de alta qualidade são dispostas delicadamente sobre o prato, regadas com um molho clássico à base de azeite de oliva extra virgem e suco de limão fresco. A finalização com alcaparras e lascas de queijo parmesão genuíno adiciona uma complexidade salgada que equilibra perfeitamente a suavidade da carne.',
    price: 18.5,
    image:
      'https://cdn.pixabay.com/photo/2018/10/18/14/43/carpaccio-3756600_1280.jpg',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: ['queijoParmesao', 'rucula', 'azeitonasPretas'],
  },
  {
    id: 4,
    name: 'Cesta de Pães',
    shortDescription: 'Pães artesanais variados',
    description:
      'Perfeita para compartilhar ou para começar sua refeição. Nossa cesta apresenta uma seleção variada de pães artesanais, incluindo ciabatta macia e focaccia aromatizada, todos assados na casa. São servidos quentinhos, acompanhados de uma cremosa manteiga de ervas frescas e um azeite de oliva de alta qualidade para uma experiência acolhedora.',
    price: 8.0,
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: ['molhoPesto', 'ervasFrescas'],
  },
  {
    id: 5,
    name: 'Salmão Grelhado',
    shortDescription: 'Ao molho de manteiga e limão',
    description:
      'Uma opção leve e saborosa. Um generoso filé de salmão do Atlântico, selecionado pela sua frescura, é grelhado com perfeição para manter sua suculência. O prato é finalizado com um delicado e cítrico molho de manteiga e limão fresco. Acompanha um mix de legumes da estação cozidos no vapor, garantindo uma refeição equilibrada e deliciosa.',
    price: 24.95,
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80',
    categoryId: 'frutos-do-mar',
    subCategoryId: 'peixes',
    additionalIds: ['molhoTartaro', 'arrozCoco', 'pureBatata', 'legumesExtras'],
  },
  {
    id: 6,
    name: 'Camarão ao Alho',
    shortDescription: 'Camarões salteados no alho',
    description:
      'Um clássico que nunca decepciona. Camarões grandes e frescos são salteados em azeite de oliva extra virgem com lâminas de alho douradas, até ficarem rosados e macios. Finalizado com salsinha fresca picada, este prato é uma explosão de sabor e aroma, ideal para ser apreciado com um bom pão para absorver o delicioso molho.',
    price: 29.9,
    image:
      'https://feed.continente.pt/media/zgcl3wkd/camaroes-ao-alho.jpg?anchor=center&mode=crop&width=826&height=620&rnd=133511677492270000&format=webp',
    categoryId: 'frutos-do-mar',
    subCategoryId: 'mariscos',
    additionalIds: ['arrozCoco', 'azeitonasVerdes', 'legumesExtras'],
  },
  {
    id: 7,
    name: 'Lula Empanada',
    shortDescription: 'Anéis crocantes de lula',
    description:
      'Um petisco crocante e irresistível. Selecionamos anéis de lula frescos e macios, que são passados em uma massa leve antes de serem fritos até atingirem uma cor dourada. São servidos bem quentes, acompanhados de um delicioso molho tártaro artesanal, cremoso e com o equilíbrio certo de acidez.',
    price: 21.5,
    image:
      'https://cdn.pixabay.com/photo/2022/02/14/09/20/buffet-7012759_1280.jpg',
    categoryId: 'frutos-do-mar',
    subCategoryId: 'mariscos',
    additionalIds: ['molhoTartaro', 'rucula', 'molhoExtra'],
  },
  {
    id: 8,
    name: 'Filé Mignon',
    shortDescription: 'Corte nobre com vinho e trufas',
    description:
      'O ápice da sofisticação para os amantes de carne. Um medalhão alto de filé mignon de corte nobre é grelhado ao ponto de sua preferência, garantindo maciez e suculência. O prato é coroado com um molho aveludado, feito a partir de uma lenta redução de vinho tinto encorpado. Para acompanhar, um purê de batatas cremoso, enriquecido com o sabor inconfundível do azeite trufado.',
    price: 35.95,
    image:
      'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80',
    categoryId: 'pratos-principais',
    subCategoryId: 'carnes',
    additionalIds: [
      'molhoGorgonzola',
      'arrozGrega',
      'legumesAssados',
      'farofaBacon',
    ],
  },
  {
    id: 9,
    name: 'Costela Barbecue',
    shortDescription: 'Costela ao molho barbecue',
    description:
      'Uma experiência para se deliciar. Nossa costela bovina é temperada com especiarias e assada lentamente por horas, um processo que a deixa tão macia que a carne desmancha do osso. Para finalizar, pincelamos generosamente com nosso molho barbecue artesanal, que tem o equilíbrio perfeito entre o doce e o defumado.',
    price: 32.0,
    image:
      'https://msabores.com/wp-content/uploads/2025/01/Design-sem-nome.webp',
    categoryId: 'pratos-principais',
    subCategoryId: 'carnes',
    additionalIds: ['pureBatata', 'legumesAssados', 'farofaBacon'],
  },
  {
    id: 10,
    name: 'Risoto de Cogumelos',
    shortDescription: 'Risoto cremoso de cogumelos',
    description:
      'Um prato sinônimo de conforto e sabor. Utilizamos o autêntico arroz arbóreo, cozido lentamente em um caldo de legumes. Incorporamos uma seleção especial de cogumelos frescos (Paris, Shiitake e Portobello), salteados para liberar seu sabor. A finalização com manteiga e queijo parmesão garante uma cremosidade inigualável.',
    price: 27.5,
    image:
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80',
    categoryId: 'pratos-principais',
    subCategoryId: 'risotos',
    additionalIds: ['queijoParmesao', 'ervasFrescas'],
  },
  {
    id: 11,
    name: 'Frango Grelhado',
    shortDescription: 'Peito de frango com ervas',
    description:
      'Uma opção saudável e cheia de sabor. O peito de frango é marinado em ervas finas e azeite antes de ser grelhado cuidadosamente para manter toda a sua suculência. É servido com um acompanhamento colorido de legumes frescos da estação, grelhados ou cozidos no vapor, tornando-se uma refeição completa e balanceada.',
    price: 22.0,
    image:
      'https://static.vecteezy.com/ti/fotos-gratis/p2/4419646-file-frango-grelhado-com-massa-lacos-gratis-foto.jpg',
    categoryId: 'pratos-principais',
    subCategoryId: 'aves',
    additionalIds: ['pureBatataDoce', 'legumesAssados', 'arrozGrega'],
  },
  {
    id: 12,
    name: 'Ravioli de Lagosta',
    shortDescription: 'Massa recheada com lagosta',
    description:
      'Nossa massa fresca e artesanal é delicadamente moldada em raviolis e recheada com uma mistura luxuosa de carne de lagosta fresca. Para realçar o sabor do mar, o prato é servido com um molho leve de tomates cereja frescos e manjericão, permitindo que o recheio seja a estrela principal.',
    price: 28.5,
    image:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: [
      'molhoBranco',
      'queijoParmesao',
      'ervasFrescas',
      'azeiteTrufado',
    ],
  },
  {
    id: 13,
    name: 'Spaghetti à Bolonhesa',
    shortDescription: 'Clássico molho de carne',
    description:
      'A receita que abraça a alma, preparada como manda a tradição. Nosso molho à bolonhesa é feito com carnes selecionadas, cozido lentamente por horas com tomates italianos e vegetais frescos, resultando em um sabor rico e profundo que envolve perfeitamente o espaguete de grano duro.',
    price: 19.9,
    image:
      'https://cdn.pixabay.com/photo/2022/10/12/22/09/spaghetti-bolognese-7517639_1280.jpg',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: ['queijoParmesao', 'molhoExtra', 'ervasFrescas'],
  },
  {
    id: 14,
    name: 'Fettuccine Alfredo',
    shortDescription: 'Molho cremoso de parmesão',
    description:
      'A personificação da indulgência. Nossa fettuccine fresca e artesanal é o veículo perfeito para o clássico molho Alfredo. Preparado na hora, o molho é uma emulsão rica e cremosa de manteiga de alta qualidade, creme de leite fresco e queijo parmesão genuíno, finalizado com uma pitada de noz-moscada. Simples e delicioso.',
    price: 21.5,
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: ['queijoParmesao', 'molhoBranco', 'azeiteTrufado'],
  },
  {
    id: 15,
    name: 'Bolo de Chocolate Vulcão',
    shortDescription: 'Bolo quente com centro cremoso',
    description:
      'Prepare-se para uma erupção de sabor. Este bolinho individual de chocolate intenso é assado na hora, resultando em uma casquinha macia por fora e um interior líquido e cremoso que escorre ao primeiro toque. Servido quente, o contraste com uma bola de sorvete de creme gelado cria uma experiência inesquecível.',
    price: 12.0,
    image:
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: [
      'sorveteExtra',
      'caldaMorango',
      'nozes',
      'chantilly',
      'raspasChocolate',
    ],
  },
  {
    id: 16,
    name: 'Tiramisu',
    shortDescription: 'Sobremesa italiana clássica',
    description:
      'A sobremesa italiana mais amada, em sua versão autêntica. Delicadas camadas de biscoitos de champanhe são embebidas em café expresso e intercaladas com um creme aveludado de queijo mascarpone. A finalização com uma generosa camada de cacau em pó amargo equilibra a doçura e adiciona um toque de sofisticação.',
    price: 14.0,
    image:
      'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/6BE1C69C-69FB-4957-96EA-D76159076661/Derivates/BA406212-38AE-4EA0-B4D5-591514C21C2D.jpg',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: ['chantilly', 'raspasChocolate'],
  },
  {
    id: 17,
    name: 'Cheesecake de Morango',
    shortDescription: 'Cremoso com calda de morango',
    description:
      'Nossa cheesecake tem uma base crocante de biscoito que sustenta um recheio incrivelmente cremoso à base de cream cheese. O doce é assado lentamente para garantir uma textura perfeita e coberto com uma generosa calda caseira de morangos frescos, que traz o equilíbrio ideal de doçura e acidez.',
    price: 13.5,
    image:
      'https://i.pinimg.com/1200x/8b/c4/e6/8bc4e6c9daa778c290fdb1722b6eb420.jpg',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: ['caldaMorango', 'chantilly'],
  },
  {
    id: 18,
    name: 'Coca-Cola',
    shortDescription: 'Lata gelada 350ml',
    description:
      'O sabor inconfundível que acompanha momentos especiais. Desfrute de uma lata de 350ml da Coca-Cola Original, servida bem gelada para refrescar e complementar perfeitamente qualquer um dos nossos pratos. A bebida ideal para quem busca o clássico e amado sabor do refrigerante mais famoso do mundo.',
    price: 6.0,
    image: 'https://jpimg.com.br/uploads/2022/03/000_9zn3lb.jpg',
    categoryId: 'bebidas',
    subCategoryId: 'refrigerantes',
    additionalIds: [],
  },
  {
    id: 19,
    name: 'Suco de Laranja',
    shortDescription: 'Natural espremido na hora',
    description:
      'Pura vitamina e frescor em um copo. Nosso suco de laranja é preparado na hora, utilizando laranjas frescas e selecionadas, espremidas minutos antes de chegar à sua mesa. Sem adição de açúcar ou conservantes, é a forma mais natural e deliciosa de se refrescar.',
    price: 8.0,
    image:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80',
    categoryId: 'bebidas',
    subCategoryId: 'sucos',
    additionalIds: [],
  },
  {
    id: 20,
    name: 'Água com Gás',
    shortDescription: 'Garrafa 500ml',
    description:
      'A escolha perfeita para purificar o paladar e acompanhar sua refeição. Servimos uma garrafa de 500ml de água mineral de alta qualidade, com uma gaseificação equilibrada que refresca e ajuda a realçar os sabores dos pratos. Ideal para quem busca uma bebida leve e sem calorias.',
    price: 4.0,
    image:
      'https://s2-receitas.glbimg.com/32CCRFrcIh4_QHAROTnyg9E8nzg=/0x0:1000x673/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/l/c/Dru9B2SZSxiPS7XjUgBw/agua-com-gas-hidrata-faz-mal-nutricionista-esclarece.jpg',
    categoryId: 'bebidas',
    subCategoryId: 'agua',
    additionalIds: [],
  },
  {
    id: 21,
    name: 'Burrata ao Pesto',
    shortDescription: 'Cremosa com pesto e tomate cereja',
    description:
      'Uma generosa porção de queijo burrata fresco e cremoso, servida sobre uma cama de rúcula, regada com molho pesto de manjericão artesanal e finalizada com tomates cereja confitados e torradas crocantes.',
    price: 29.0,
    image:
      'https://delicious.com.br/wp-content/uploads/2020/12/a29a1485-c8b4-42f9-9429-ba8241401b4b.jpg',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: ['paoExtra', 'tomateSeco', 'molhoPesto'],
  },
  {
    id: 22,
    name: 'Dadinhos de Tapioca',
    shortDescription: 'Crocantes com queijo coalho',
    description:
      'Clássico da culinária brasileira, nossos dadinhos de tapioca granulada com queijo coalho são fritos até ficarem dourados e crocantes por fora, mantendo a maciez por dentro. Acompanha uma deliciosa geleia de pimenta agridoce.',
    price: 16.5,
    image:
      'https://s2-receitas.glbimg.com/D4BgwlmmJDWtjPxG4T9_8OwGPGY=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/J/7/Gj5zz6SmOaY3jRJ1z9mQ/capa-materia-gshow-16-.png',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: ['geleiaExtra', 'mel'],
  },

  {
    id: 23,
    name: 'Polvo Grelhado com Batatas',
    shortDescription: 'Tentáculos macios com batatas',
    description:
      'Tentáculos de polvo cozidos à perfeição para garantir a maciez e depois grelhados com azeite e páprica, resultando em um sabor defumado. Servido com batatas ao murro, alho confitado e azeitonas pretas.',
    price: 42.0,
    image:
      'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/10/5605a459-polvo-no-alho-com-batatas-coradas-_-tm-camarao-polvo-lula-_-heleninha-drumond-_-alta1.jpg',
    categoryId: 'frutos-do-mar',
    subCategoryId: 'mariscos',
    additionalIds: ['azeitonasPretas', 'legumesExtras', 'paoExtra'],
  },

  {
    id: 24,
    name: 'Bife Ancho Grelhado',
    shortDescription: 'Corte nobre com chimichurri',
    description:
      'Um corte nobre e suculento de 300g de Bife Ancho (entrecôte), grelhado na brasa ao ponto de sua preferência. Acompanha batatas rústicas douradas e um autêntico molho chimichurri argentino para realçar o sabor.',
    price: 38.5,
    image:
      'https://www.minhareceita.com.br/app/uploads/2024/05/mobile-Bife-ancho-com-pure-de-batatas.jpg',
    categoryId: 'pratos-principais',
    subCategoryId: 'carnes',
    additionalIds: [
      'farofaBacon',
      'molhoGorgonzola',
      'legumesAssados',
      'ovoFrito',
    ],
  },
  {
    id: 25,
    name: 'Risoto de Camarão com Limão Siciliano',
    shortDescription: 'Cremoso com camarões e toque cítrico',
    description:
      'Um risoto vibrante, preparado com arroz arbóreo, camarões frescos salteados, e o toque refrescante de raspas e suco de limão siciliano. Finalizado com manteiga e parmesão para máxima cremosidade.',
    price: 34.0,
    image: 'https://www.revistagula.com.br/uploads/CAA05790.jpg',
    categoryId: 'pratos-principais',
    subCategoryId: 'risotos',
    additionalIds: ['queijoParmesao', 'pimentaCalabresa', 'ervasFrescas'],
  },

  {
    id: 26,
    name: 'Lasanha à Bolonhesa',
    shortDescription: 'Clássica lasanha gratinada',
    description:
      'Uma porção generosa da nossa lasanha caseira, com camadas de massa fresca, um rico molho à bolonhesa, molho bechamel cremoso e queijo mussarela. Gratinada no forno até dourar para uma casquinha irresistível.',
    price: 26.5,
    image:
      'https://moinhoglobo.com.br/wp-content/uploads/2018/07/LASANHA-DESTAQUE-1.jpg',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: ['queijoParmesao', 'molhoExtra'],
  },
  {
    id: 27,
    name: 'Gnocchi ao Molho de Gorgonzola',
    shortDescription: 'Massa de batata com molho cremoso',
    description:
      'Nhoque de batata artesanal, macio e que derrete na boca, envolto em um molho aveludado e potente de queijo gorgonzola. Para equilibrar, o prato é finalizado com nozes crocantes salpicadas por cima.',
    price: 28.0,
    image:
      'https://massasaojudas.com.br/wp-content/uploads/2020/05/Nhoque_gorgonzola-1024x1024.png',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: ['nozes', 'queijoParmesao', 'azeiteTrufado'],
  },

  {
    id: 28,
    name: 'Panna Cotta com Frutas Vermelhas',
    shortDescription: 'Doce italiano com calda',
    description:
      'Uma sobremesa clássica, delicada e elegante. Feita com creme de leite fresco, resulta em uma textura sedosa. É servida gelada com uma calda artesanal de frutas vermelhas que adiciona um contraste azedinho e doce.',
    price: 15.0,
    image:
      'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/cooking/4LTIRaZr18LKdMHxjNTE09T8B32enzlT7y7Q9hGn.jpeg',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: ['caldaMorango', 'chantilly'],
  },

  {
    id: 29,
    name: 'Caipirinha de Limão',
    shortDescription: 'Clássica com cachaça, limão e açúcar',
    description:
      'O drink mais famoso do Brasil em sua versão mais tradicional. Preparada com cachaça de qualidade, limão taiti fresco macerado com açúcar e muito gelo. Refrescante, potente e a cara do Brasil.',
    price: 14.5,
    image:
      'https://i.panelinha.com.br/i1/bk-8730-blog-caipirinha-de-limao.webp',
    categoryId: 'bebidas',
    subCategoryId: 'drinks',
    additionalIds: ['adocante', 'frutaExtra'],
  },
  {
    id: 30,
    name: 'Cerveja Heineken Long Neck',
    shortDescription: 'Garrafa 330ml',
    description:
      'Aprecie a mundialmente famosa Heineken, uma lager premium com sabor puro e refrescante, reconhecida por sua icônica garrafa verde. Servida perfeitamente gelada para o seu brinde.',
    price: 9.0,
    image:
      'https://zaffari.vtexassets.com/arquivos/ids/251014-800-450?v=638554610864900000&width=800&height=450&aspect=true',
    categoryId: 'bebidas',
    subCategoryId: 'cervejas',
    additionalIds: [],
  },
];

export const additions = {
  adocante: { id: 'adocante', name: 'Adoçante', price: 0.0 },
  aguaComGas: { id: 'aguaComGas', name: 'Água com gás', price: 4.0 },
  arrozCoco: { id: 'arrozCoco', name: 'Arroz de coco', price: 6.0 },
  arrozGrega: { id: 'arrozGrega', name: 'Arroz à grega', price: 5.0 },
  azeiteTrufado: { id: 'azeiteTrufado', name: 'Azeite trufado', price: 5.0 },
  azeitonasPretas: {
    id: 'azeitonasPretas',
    name: 'Azeitonas pretas',
    price: 2.5,
  },
  azeitonasVerdes: {
    id: 'azeitonasVerdes',
    name: 'Azeitonas verdes',
    price: 2.5,
  },
  caldaMorango: { id: 'caldaMorango', name: 'Calda de morango', price: 4.0 },
  chantilly: { id: 'chantilly', name: 'Chantilly', price: 3.0 },
  cocaCola: { id: 'cocaCola', name: 'Coca-Cola lata', price: 6.0 },
  ervasFrescas: { id: 'ervasFrescas', name: 'Ervas frescas', price: 2.0 },
  farofaBacon: { id: 'farofaBacon', name: 'Farofa de bacon', price: 3.5 },
  frutaExtra: {
    id: 'frutaExtra',
    name: 'Fruta extra (morango/kiwi)',
    price: 4.5,
  },
  geleiaExtra: {
    id: 'geleiaExtra',
    name: 'Geleia de pimenta extra',
    price: 2.0,
  },
  legumesAssados: { id: 'legumesAssados', name: 'Legumes assados', price: 4.5 },
  legumesExtras: { id: 'legumesExtras', name: 'Legumes extras', price: 4.0 },
  mel: { id: 'mel', name: 'Mel', price: 2.0 },
  molhoBranco: { id: 'molhoBranco', name: 'Molho branco extra', price: 4.0 },
  molhoExtra: { id: 'molhoExtra', name: 'Molho extra', price: 1.5 },
  molhoGorgonzola: {
    id: 'molhoGorgonzola',
    name: 'Molho gorgonzola',
    price: 6.0,
  },
  molhoPesto: { id: 'molhoPesto', name: 'Molho pesto', price: 3.5 },
  molhoTartaro: { id: 'molhoTartaro', name: 'Molho tártaro', price: 3.0 },
  nozes: { id: 'nozes', name: 'Nozes', price: 6.0 },
  ovoFrito: { id: 'ovoFrito', name: 'Ovo frito', price: 3.0 },
  paoExtra: { id: 'paoExtra', name: 'Pão extra (porção)', price: 2.5 },
  pimentaCalabresa: {
    id: 'pimentaCalabresa',
    name: 'Pimenta calabresa',
    price: 1.5,
  },
  pureBatata: { id: 'pureBatata', name: 'Purê de batata', price: 4.5 },
  pureBatataDoce: {
    id: 'pureBatataDoce',
    name: 'Purê de batata doce',
    price: 4.0,
  },
  queijoParmesao: { id: 'queijoParmesao', name: 'Queijo parmesão', price: 3.0 },
  raspasChocolate: {
    id: 'raspasChocolate',
    name: 'Raspas de chocolate',
    price: 2.5,
  },
  rucula: { id: 'rucula', name: 'Rúcula', price: 2.0 },
  sorveteExtra: { id: 'sorveteExtra', name: 'Sorvete extra', price: 5.0 },
  sucoLaranja: {
    id: 'sucoLaranja',
    name: 'Suco de laranja natural',
    price: 8.0,
  },
  tomateSeco: { id: 'tomateSeco', name: 'Tomate seco', price: 4.0 },
};
