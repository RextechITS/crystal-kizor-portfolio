
import dinerImage from '../assets/dinNer.jpeg';
import gymImage from '../assets/Gym.jpeg';
import studioCokaImage from '../assets/studioCoka.jpeg';

export const projects = [
  {
    number: '01',
    title: 'Diner',
    category: 'Climate-responsive healthcare',
    location: 'Lagos, Nigeria',
    image: dinerImage,
  },
  {
    number: '02',
    title: 'Gym',
    category: 'Architecture & everyday life',
    location: 'Nigeria',
    image: gymImage,
  },
  {
    number: '03',
    title: 'Studio',
    category: 'Community & housing',
    location: 'Lagos, Nigeria',
    image: studioCokaImage,
  },
];


export const ecosystem = [
  {
    group: 'Build',
    eyebrow: '01 / BUILD',
    items: [
      { name: 'Studio COKA', desc: 'Architecture, interiors and construction shaped by climate, site and people.' },
      { name: 'ELEvated', desc: 'Contemporary furniture and products rooted in African context, materials and ideas.' },
    ],
  },
  {
    group: 'Learn',
    eyebrow: '02 / LEARN',
    items: [
      { name: 'The Effective Architect', desc: 'Education and media for architects and built-environment professionals.' },
      { name: 'Speaking', desc: 'Conversations on architecture, African cities, climate and entrepreneurship.' },
    ],
  },
  {
    group: 'Impact',
    eyebrow: '03 / IMPACT',
    items: [
      { name: 'AKO Alliance', desc: 'Expanding access to education and opportunities for children and young people.' },
      { name: 'Alive & Free', desc: 'Helping young people walk in truth, healing, freedom, identity and purpose.' },
    ],
  },
];

export const journal = [
  { date: '06.09.26', tag: 'Architecture', title: 'Why some rooms just feel cooler', text: 'Thinking about passive design, comfort and the intelligence already available in climate.' },
  { date: '22.08.26', tag: 'African Cities', title: 'Designing for the city we actually live in', text: 'A closer look at context, culture and what responsive architecture can mean in African cities.' },
  { date: '11.07.26', tag: 'Ideas', title: 'The work behind the work', text: 'On building a practice that moves between architecture, education, products and people.' },
];
