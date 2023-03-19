import expressoImg from './imageMock/expresso.png'
import expressoAmericanoImg from './imageMock/expressoAmericano.png'
import expressoCremosoImg from './imageMock/expressoCremoso.png'
import expressoGeladoImg from './imageMock/expressoGelado.png'
import cafeComLeiteImg from './imageMock/cafeComLeite.png'
import latteImg from './imageMock/latte.png'
import capuccinoImg from './imageMock/capuccino.png'
import macchiatoImg from './imageMock/macchiato.png'
import mocaccinoImg from './imageMock/mocaccino.png'
import chocolateQuenteImg from './imageMock/chocolateQuente.png'
import cubanoImg from './imageMock/cubano.png'
import havaianoImg from './imageMock/havaiano.png'
import arabeImg from './imageMock/arabe.png'
import irlandesImg from './imageMock/irlandes.png'

export const coffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
    tags: ['TRADICIONAL'],
    imageUrl: expressoImg,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 990,
    tags: ['TRADICIONAL'],
    imageUrl: expressoAmericanoImg,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 990,
    tags: ['TRADICIONAL'],
    imageUrl: expressoCremosoImg,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 990,
    tags: ['TRADICIONAL', 'GELADO'],
    imageUrl: expressoGeladoImg,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: cafeComLeiteImg,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: latteImg,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: capuccinoImg,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: macchiatoImg,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    priceInCents: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    imageUrl: mocaccinoImg,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 990,
    tags: ['ESPECIAL', 'COM LEITE'],
    imageUrl: chocolateQuenteImg,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 990,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    imageUrl: cubanoImg,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 990,
    tags: ['ESPECIAL'],
    imageUrl: havaianoImg,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 990,
    tags: ['ESPECIAL'],
    imageUrl: arabeImg,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 990,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    imageUrl: irlandesImg,
  },
]
