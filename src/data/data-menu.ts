export type AdditionId = keyof typeof additions;
export type RemovableId = keyof typeof removables;

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
  removableIds: RemovableId[];
};

export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
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
    removableIds: ['tomate', 'alho', 'ervas'],
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
    removableIds: ['tomate', 'queijo', 'rucula'],
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
    removableIds: ['queijo', 'ervas'],
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
    removableIds: ['ervas'],
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
    removableIds: ['molho', 'ervas', 'legumes'],
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
    removableIds: ['alho', 'ervas'],
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
    removableIds: ['molho', 'rucula'],
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
    removableIds: ['molho', 'trufas', 'ervas'],
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
    removableIds: ['molho', 'ervas'],
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
    removableIds: ['queijo', 'ervas'],
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
    removableIds: ['ervas', 'legumes'],
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
    removableIds: ['tomate', 'queijo', 'ervas'],
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
    removableIds: ['molho', 'queijo', 'ervas'],
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
    removableIds: ['queijo', 'molho'],
  },
  {
    id: 15,
    name: 'Bolo de Chocolate Vulcão',
    shortDescription: 'Bolo quente com centro cremoso',
    description: 'Prepare-se para uma erupção de sabor...',
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
    removableIds: ['chocolate', 'calda', 'ovo'],
  },
  {
    id: 16,
    name: 'Tiramisu',
    shortDescription: 'Sobremesa italiana clássica',
    description: 'A sobremesa italiana mais amada...',
    price: 14.0,
    image:
      'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/6BE1C69C-69FB-4957-96EA-D76159076661/Derivates/BA406212-38AE-4EA0-B4D5-591514C21C2D.jpg',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: ['chantilly', 'raspasChocolate'],
    removableIds: ['chocolate'],
  },
  {
    id: 17,
    name: 'Cheesecake de Morango',
    shortDescription: 'Cremoso com calda de morango',
    description: 'Nossa cheesecake tem uma base crocante...',
    price: 13.5,
    image:
      'https://i.pinimg.com/1200x/8b/c4/e6/8bc4e6c9daa778c290fdb1722b6eb420.jpg',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: ['caldaMorango', 'chantilly'],
    removableIds: ['calda'],
  },
  {
    id: 18,
    name: 'Coca-Cola',
    shortDescription: 'Lata gelada 350ml',
    description: 'O sabor inconfundível...',
    price: 6.0,
    image: 'https://jpimg.com.br/uploads/2022/03/000_9zn3lb.jpg',
    categoryId: 'bebidas',
    subCategoryId: 'refrigerantes',
    additionalIds: [],
    removableIds: [],
  },
  {
    id: 19,
    name: 'Suco de Laranja',
    shortDescription: 'Natural espremido na hora',
    description: 'Pura vitamina e frescor...',
    price: 8.0,
    image:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80',
    categoryId: 'bebidas',
    subCategoryId: 'sucos',
    additionalIds: [],
    removableIds: [],
  },
  {
    id: 20,
    name: 'Água com Gás',
    shortDescription: 'Garrafa 500ml',
    description: 'A escolha perfeita...',
    price: 4.0,
    image:
      'https://s2-receitas.glbimg.com/32CCRFrcIh4_QHAROTnyg9E8nzg=/0x0:1000x673/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/l/c/Dru9B2SZSxiPS7XjUgBw/agua-com-gas-hidrata-faz-mal-nutricionista-esclarece.jpg',
    categoryId: 'bebidas',
    subCategoryId: 'agua',
    additionalIds: [],
    removableIds: [],
  },
  {
    id: 21,
    name: 'Burrata ao Pesto',
    shortDescription: 'Cremosa com pesto e tomate cereja',
    description: 'Uma generosa porção de queijo burrata...',
    price: 29.0,
    image:
      'https://delicious.com.br/wp-content/uploads/2020/12/a29a1485-c8b4-42f9-9429-ba8241401b4b.jpg',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: ['paoExtra', 'tomateSeco', 'molhoPesto'],
    removableIds: ['queijo', 'rucula', 'tomate', 'molho'],
  },
  {
    id: 22,
    name: 'Dadinhos de Tapioca',
    shortDescription: 'Crocantes com queijo coalho',
    description: 'Clássico da culinária brasileira...',
    price: 16.5,
    image:
      'https://s2-receitas.glbimg.com/D4BgwlmmJDWtjPxG4T9_8OwGPGY=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/J/7/Gj5zz6SmOaY3jRJ1z9mQ/capa-materia-gshow-16-.png',
    categoryId: 'entradas',
    subCategoryId: 'petiscos',
    additionalIds: ['geleiaExtra', 'mel'],
    removableIds: ['queijo', 'molho'],
  },
  {
    id: 23,
    name: 'Polvo Grelhado com Batatas',
    shortDescription: 'Tentáculos macios com batatas',
    description: 'Tentáculos de polvo cozidos...',
    price: 42.0,
    image:
      'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/10/5605a459-polvo-no-alho-com-batatas-coradas-_-tm-camarao-polvo-lula-_-heleninha-drumond-_-alta1.jpg',
    categoryId: 'frutos-do-mar',
    subCategoryId: 'mariscos',
    additionalIds: ['azeitonasPretas', 'legumesExtras', 'paoExtra'],
    removableIds: ['alho', 'azeitonas', 'legumes'],
  },
  {
    id: 24,
    name: 'Bife Ancho Grelhado',
    shortDescription: 'Corte nobre com chimichurri',
    description: 'Um corte nobre e suculento...',
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
    removableIds: ['molho', 'bacon', 'legumes', 'ovo'],
  },
  {
    id: 25,
    name: 'Risoto de Camarão com Limão Siciliano',
    shortDescription: 'Cremoso com camarões e toque cítrico',
    description: 'Um risoto vibrante...',
    price: 34.0,
    image: 'https://www.revistagula.com.br/uploads/CAA05790.jpg',
    categoryId: 'pratos-principais',
    subCategoryId: 'risotos',
    additionalIds: ['queijoParmesao', 'pimentaCalabresa', 'ervasFrescas'],
    removableIds: ['queijo', 'pimenta', 'ervas'],
  },
  {
    id: 26,
    name: 'Lasanha à Bolonhesa',
    shortDescription: 'Clássica lasanha gratinada',
    description: 'Uma porção generosa da nossa lasanha caseira...',
    price: 26.5,
    image:
      'https://moinhoglobo.com.br/wp-content/uploads/2018/07/LASANHA-DESTAQUE-1.jpg',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: ['queijoParmesao', 'molhoExtra'],
    removableIds: ['queijo', 'molho'],
  },
  {
    id: 27,
    name: 'Gnocchi ao Molho de Gorgonzola',
    shortDescription: 'Massa de batata com molho cremoso',
    description: 'Nhoque de batata artesanal...',
    price: 28.0,
    image:
      'https://massasaojudas.com.br/wp-content/uploads/2020/05/Nhoque_gorgonzola-1024x1024.png',
    categoryId: 'massas',
    subCategoryId: null,
    additionalIds: ['nozes', 'queijoParmesao', 'azeiteTrufado'],
    removableIds: ['queijo', 'nozes', 'trufas'],
  },
  {
    id: 28,
    name: 'Panna Cotta com Frutas Vermelhas',
    shortDescription: 'Doce italiano com calda',
    description: 'Uma sobremesa clássica...',
    price: 15.0,
    image:
      'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/cooking/4LTIRaZr18LKdMHxjNTE09T8B32enzlT7y7Q9hGn.jpeg',
    categoryId: 'sobremesas',
    subCategoryId: null,
    additionalIds: ['caldaMorango', 'chantilly'],
    removableIds: ['calda'],
  },
  {
    id: 29,
    name: 'Caipirinha de Limão',
    shortDescription: 'Clássica com cachaça, limão e açúcar',
    description: 'O drink mais famoso do Brasil...',
    price: 14.5,
    image:
      'https://i.panelinha.com.br/i1/bk-8730-blog-caipirinha-de-limao.webp',
    categoryId: 'bebidas',
    subCategoryId: 'drinks',
    additionalIds: ['adocante', 'frutaExtra'],
    removableIds: [],
  },
  {
    id: 30,
    name: 'Cerveja Heineken Long Neck',
    shortDescription: 'Garrafa 330ml',
    description: 'Aprecie a mundialmente famosa Heineken...',
    price: 9.0,
    image:
      'https://zaffari.vtexassets.com/arquivos/ids/251014-800-450?v=638554610864900000&width=800&height=450&aspect=true',
    categoryId: 'bebidas',
    subCategoryId: 'cervejas',
    additionalIds: [],
    removableIds: [],
  },
];

export const additions = {
  adocante: { id: 'adAdocante', name: 'Adoçante', price: 0.0 },
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

export const removables = {
  tomate: { id: 'tomate', name: 'Tomate', removable: true },
  cebola: { id: 'cebola', name: 'Cebola', removable: true },
  pimenta: { id: 'pimenta', name: 'Pimenta', removable: true },
  azeitonas: { id: 'azeitonas', name: 'Azeitonas', removable: true },
  queijo: { id: 'queijo', name: 'Queijo', removable: true },
  rucula: { id: 'rucula', name: 'Rúcula', removable: true },
  molho: { id: 'molho', name: 'Molho', removable: true },
  alho: { id: 'alho', name: 'Alho', removable: true },
  ervas: { id: 'ervas', name: 'Ervas', removable: true },
  bacon: { id: 'bacon', name: 'Bacon', removable: true },
  legumes: { id: 'legumes', name: 'Legumes', removable: true },
  trufas: { id: 'trufas', name: 'Trufas', removable: true },
  chocolate: { id: 'chocolate', name: 'Chocolate', removable: true },
  calda: { id: 'calda', name: 'Calda', removable: true },
  ovo: { id: 'ovo', name: 'Ovo', removable: true },
  nozes: { id: 'nozes', name: 'Nozes', removable: true },
};
