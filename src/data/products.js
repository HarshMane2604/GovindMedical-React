export const products = [
  {
    id: 'p1',
    name: 'Paracetamol 500mg',
    category: 'Medicines',
    shortDescription: 'Effective relief from fever and mild to moderate pain.',
    description: 'Paracetamol 500mg is a widely used over-the-counter medication to reduce fever and relieve mild to moderate pain such as headache, toothache, muscle ache, and backache. It is gentle on the stomach and works quickly.',
    benefits: ['Fast pain relief', 'Reduces fever safely', 'Gentle on stomach'],
    usage: 'Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.',
    mrp: 50,
    price: 45,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p2',
    name: 'Vitamin C Tablets 500mg',
    category: 'Vitamins & Supplements',
    shortDescription: 'Immunity booster with antioxidant properties.',
    description: 'Daily Vitamin C supplement to support immune system function, promote healthy skin, and provide antioxidant protection against free radicals. Chewable tablets with a pleasant orange flavor.',
    benefits: ['Boosts immunity', 'Antioxidant protection', 'Supports collagen production'],
    usage: 'Chew 1 tablet daily after meals.',
    mrp: 120,
    price: 99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p3',
    name: 'Digital Blood Pressure Monitor',
    category: 'Healthcare Devices',
    shortDescription: 'Accurate home BP monitoring with large LCD display.',
    description: 'Fully automatic upper arm blood pressure monitor. Features one-touch operation, irregular heartbeat detection, and memory storage for past readings. Essential for daily heart health tracking.',
    benefits: ['Clinically validated accuracy', 'Easy one-touch operation', 'Large readable display'],
    usage: 'Wrap the cuff around your upper arm, rest your arm on a table, and press the start button. Avoid eating or exercising 30 mins before.',
    mrp: 2500,
    price: 1850,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p4',
    name: 'Digital Thermometer',
    category: 'Healthcare Devices',
    shortDescription: 'Fast and accurate temperature reading with fever alarm.',
    description: 'Reliable digital thermometer for oral, underarm, or rectal use. Provides readings in 60 seconds with an audible beeper when the reading is complete. Waterproof and easy to clean.',
    benefits: ['Fast 60s reading', 'Fever alarm', 'Memory recall of last reading'],
    usage: 'Place under the tongue or armpit and wait for the beep. Clean with alcohol swab before and after use.',
    mrp: 350,
    price: 290,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p5',
    name: 'Baby Care Bath Kit',
    category: 'Baby Care',
    shortDescription: 'Gentle, tear-free bath essentials for your newborn.',
    description: 'A complete bath time kit for your baby, including tear-free baby wash, gentle shampoo, moisturizing lotion, and a soft sponge. Formulated specifically for delicate newborn skin.',
    benefits: ['Tear-free formula', 'Hypoallergenic', 'Dermatologist tested'],
    usage: 'Use a small amount on a wet sponge for bath, and apply lotion gently on dry skin after bathing.',
    mrp: 850,
    price: 720,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p6',
    name: 'Advanced Hand Sanitizer 500ml',
    category: 'Personal Care',
    shortDescription: 'Kills 99.9% of germs instantly without water.',
    description: 'Alcohol-based hand sanitizer gel infused with Aloe Vera to keep your hands moisturized while effectively killing 99.9% of harmful bacteria and viruses.',
    benefits: ['70% Alcohol content', 'Non-sticky formula', 'Contains soothing Aloe Vera'],
    usage: 'Apply a dime-sized amount to the palm of one hand and rub hands together until dry.',
    mrp: 250,
    price: 199,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p7',
    name: 'Comprehensive First Aid Box',
    category: 'First Aid Essentials',
    shortDescription: 'Essential emergency medical supplies for home or travel.',
    description: 'A durable, portable first aid kit containing bandages, antiseptic wipes, gauze pads, medical tape, scissors, and a basic first aid guide. Perfect for home, car, or office.',
    benefits: ['Compact & Portable', 'Contains all basic emergency supplies', 'Durable case'],
    usage: 'Keep in a readily accessible place. Refer to the included manual for basic wound care and emergency response.',
    mrp: 999,
    price: 750,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'p8',
    name: 'Daily Multivitamin Capsules (60 caps)',
    category: 'Vitamins & Supplements',
    shortDescription: 'Complete daily nutrition with essential vitamins and minerals.',
    description: 'A comprehensive daily multivitamin formula providing 100% of the daily value for essential vitamins and minerals to support energy, immunity, and overall well-being.',
    benefits: ['Supports energy metabolism', 'Fills dietary gaps', 'Promotes bone and muscle health'],
    usage: 'Take 1 capsule daily with a meal and a full glass of water.',
    mrp: 650,
    price: 520,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1550572017-edb799988cb6?w=500&auto=format&fit=crop&q=60'
  }
];

export const categories = [
  'All',
  'Medicines',
  'Vitamins & Supplements',
  'Personal Care',
  'Baby Care',
  'Healthcare Devices',
  'First Aid Essentials'
];
