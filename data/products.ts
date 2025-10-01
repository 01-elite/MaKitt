import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'shadu-mati-ganpati',
    name: 'Shadu Mati Ganpati Kit',
    price: 899,
    tagline: 'Sculpt your own sacred idol.',
    shortDescription: 'Experience a spiritual and creative journey as you handcraft a beautiful Ganpati idol from eco-friendly Shadu Mati clay.',
    images: [
      'images/ganpatikit.png', 'https://images.unsplash.com/photo-1662547982627-2e2e2e2e2e2e?q=80&w=1200&auto=format&fit=crop',
    ],
    flatLayImage: 'images/GK2.jpg',
    // ...existing code...
    // ...existing code...
journeyImages: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop', // clay hands
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800&auto=format&fit=crop', // sculpting
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop', // painting
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop', // finished Ganpati idol
],
// ...existing code...
// ...existing code...
    detailedDescription: 'Connect with tradition and artistry through our Shadu Mati Ganpati Kit. Shadu Mati is a type of natural clay found by the riverbanks, revered for its purity and eco-friendly properties. This kit is more than just a craft; it\'s a meditative practice, a celebration of culture, and a personal act of creation. We provide everything you need to sculpt, detail, and paint a divine idol that is uniquely yours.',
    inTheBox: [
      'DIY Kit Box',
      'Shadu Mati Clay (2 packs)',
      'Instruction Manual',
      'Wooden Base',
      'Messy Cloth',
      'Puja Cloth',
      'Paint Brushes',
      'Sculpting Tools',
      'Acrylic Colours',
      'Colour Palette',
    ],
    whatYoullLearn: [
      'Preparing the sacred Shadu Mati clay.',
      'Fundamental sculpting techniques for divine forms.',
      'Detailing methods to bring your idol to life.',
      'Painting vibrant, professional finishes.'
    ],
  },
  {
    id: 'artisan-stamped-jewelry',
    name: 'Orna Tray Kit',
    price: 699,
    tagline: 'Stamp your story in metal.',
    shortDescription: 'Design and create personalized metal jewelry from scratch. A perfect way to craft meaningful gifts.',
    images: [
      'images/ornakit.png',
      'images/GK2.jpg',
      'images/GK2.jpg',            
      'images/GK2.jpg',    ],
    flatLayImage:  'images/orna2.jpg',
     journeyImages: [
    'https://images.unsplash.com/photo-1519864600265-abbf6c7c2c7e?q=80&w=800&auto=format&fit=crop', // stamping tools
    'https://images.unsplash.com/photo-1519864600265-abbf6c7c2c7e?q=80&w=800&auto=format&fit=crop', // stamping process
    'https://images.unsplash.com/photo-1506612957362-9599395f1950?q=80&w=800&auto=format&fit=crop', // assembling jewelry
    'https://images.unsplash.com/photo-1611591437341-35489a547d3e?q=80&w=800&auto=format&fit=crop', // finished necklace
  ],
    detailedDescription: 'Unleash your inner jeweler with the Artisan Stamped Jewelry Kit. This all-in-one set provides everything you need to hammer out personalized messages, names, or designs on beautiful metal blanks. Create meaningful, handcrafted necklaces for yourself or as heartfelt gifts for loved ones.',
    inTheBox: [
     'Resin and Butter Paper',
'A Palette',
'Moulding Clay',
'Acrylic Colors',
'Paint Brushes',
'Tools for Shaping'
    ],
    whatYoullLearn: [
      'Stamping Your Story in Metal',
      'Assembling Your Creation',
      'Adding the Finishing Touches',
    ],
  },
  {
    id: 'kintsugi-repair-kit',
    name: 'Fridge Magnet Kit',
    price: 749,
    tagline: 'Mend with gold, beautifully.',
    shortDescription: 'Embrace the Japanese art of kintsugi and transform broken pottery into beautiful, unique art pieces.',
    images: [
      'images/fridgekit.PNG',
      'https://img.freepik.com/free-photo/diy-equipment-paintbrush-clothespin-needle-safety-pins-acrylic-paint-tube-buttons-diy-blocks-measuring-tape-isolated-white-backdrop_4380409.jpg',
      'https://images.unsplash.com/photo-1615022561214-039c9b4e5b9e?q=80&w=1200&h=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589257328282-271d5389a073?q=80&w=1200&h=1200&auto=format&fit=crop',
    ],
    flatLayImage:  'images/fridge 2.PNG',
    journeyImages: [
    'https://images.unsplash.com/photo-1601704532539-5235a4d9526e?q=80&w=800&auto=format&fit=crop', // broken pottery
    'https://images.unsplash.com/photo-1589257328282-271d5389a073?q=80&w=800&auto=format&fit=crop', // applying gold
    'https://images.unsplash.com/photo-1615022561214-039c9b4e5b9e?q=80&w=800&auto=format&fit=crop', // repairing
    'https://images.unsplash.com/photo-1606041282635-c99a4c3303c7?q=80&w=800&auto=format&fit=crop', // finished kintsugi
  ],
    detailedDescription: 'Discover the philosophy of wabi-sabi by repairing your cherished ceramics with gold. Our Kintsugi Kit provides non-toxic, food-safe materials to help you celebrate imperfections and create stunning, resilient works of art.',
    inTheBox: [
     'Pre-packaged Air-drying Clay',
'A Variety of Sculpting Tools',
'A Palette',
'Poster Colors',
'A Paint Brush',
'A Glue Bottle',
'Magnets',
'A Booklet with Instructions and Design Ideas'
    ],
    whatYoullLearn: [
      'The philosophy of Kintsugi',
      'Safely mixing and applying epoxy',
      'Creating beautiful golden seams'
    ],
  },
  {
    id: 'diy-terrarium-kit',
    name: 'Rangoli Kit',
    price: 649,
    tagline: 'Build your own tiny world.',
    shortDescription: 'Create a beautiful, self-sustaining ecosystem in a stylish glass container. A perfect touch of green for any space.',
    images: [
      'images/rangolikit.PNG',
      'https://images.unsplash.com/photo-1512428286944-c21d8b275b94?q=80&w=1200&h=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1200&h=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509424727443-376041844b33?q=80&w=1200&h=1200&auto=format&fit=crop',
    ],
    flatLayImage:  'images/rangoli2.JPG',
    journeyImages: [
    'https://images.unsplash.com/photo-1536069221202-8e8354148e48?q=80&w=800&auto=format&fit=crop', // glass container
    'https://images.unsplash.com/photo-1593950987349-2a9d282e70e3?q=80&w=800&auto=format&fit=crop', // adding soil
    'https://images.unsplash.com/photo-1512428286944-c21d8b275b94?q=80&w=800&auto=format&fit=crop', // planting
    'https://images.unsplash.com/photo-1509424727443-376041844b33?q=80&w=800&auto=format&fit=crop', // finished terrarium
  ],
    detailedDescription: 'Bring nature indoors with our all-in-one DIY Terrarium Kit. Layer soil, sand, and moss to create a nourishing base for your succulent plants. It\'s a relaxing, meditative project that results in a stunning piece of living decor.',
    inTheBox: [
      'Two Packs of Colored Sand or Powder in Various Colors',
'Pre-cut Rangoli Stencils Made of Wood or Cardboard'
    ],
    whatYoullLearn: [
      'Layering for a healthy ecosystem',
      'Planting and caring for succulents',
      'Designing a beautiful miniature landscape'
    ],
  },
    {
    id: 'diya-painting-kit',
    name: 'Diya Painting Kit',
    price: 699,
    tagline: 'Build your own tiny world.',
    shortDescription: 'Create a beautiful, self-sustaining ecosystem in a stylish glass container. A perfect touch of green for any space.',
    images: [
      'images/diya kit.png',
      'https://images.unsplash.com/photo-1512428286944-c21d8b275b94?q=80&w=1200&h=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1200&h=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509424727443-376041844b33?q=80&w=1200&h=1200&auto=format&fit=crop',
    ],
    flatLayImage:  'images/Diya1.jpg',
    journeyImages: [
    'https://images.unsplash.com/photo-1536069221202-8e8354148e48?q=80&w=800&auto=format&fit=crop', // glass container
    'https://images.unsplash.com/photo-1593950987349-2a9d282e70e3?q=80&w=800&auto=format&fit=crop', // adding soil
    'https://images.unsplash.com/photo-1512428286944-c21d8b275b94?q=80&w=800&auto=format&fit=crop', // planting
    'https://images.unsplash.com/photo-1509424727443-376041844b33?q=80&w=800&auto=format&fit=crop', // finished terrarium
  ],
    detailedDescription: 'Bring nature indoors with our all-in-one DIY Terrarium Kit. Layer soil, sand, and moss to create a nourishing base for your succulent plants. It\'s a relaxing, meditative project that results in a stunning piece of living decor.',
    inTheBox: [
      'A Variety of Clay Diyas',
'A Set of Paint Brushes',
'A Color Palette',
'Acrylic Colors',
'A Glue Bottle',
'Decorative Rhinestones and Beads'
    ],
    whatYoullLearn: [
      'Layering for a healthy ecosystem',
      'Planting and caring for succulents',
      'Designing a beautiful miniature landscape'
    ],
  },
];