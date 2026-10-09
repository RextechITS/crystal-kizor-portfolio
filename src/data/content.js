import { image } from "framer-motion/client";


export const projects = [
  {
    number: '01',
    title: 'Diner',
    category: 'Climate-responsive healthcare',
    location: 'Lagos, Nigeria',
    // image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=85',
    image: 'src/assets/dinNer.jpeg',
  },
  {
    number: '02',
    title: 'Gym',
    category: 'Architecture & everyday life',
    location: 'Nigeria',
    // image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    image: '/src/assets/Gym.jpeg',
  },
  {
    number: '03',
    title: 'Studio',
    category: 'Community & housing',
    location: 'Lagos, Nigeria',
    // image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    image: '/src/assets/studioCoka.jpeg',
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
