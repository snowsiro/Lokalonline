window.SITE_DATA = {
  template: 'retail',
  slug: 'boutique-muster',

  name: 'Boutique Muster',
  tagline: { de: 'Ausgewählte Mode & Accessoires in Wien', en: 'Curated fashion & accessories in Vienna' },
  type:    { de: 'Boutique', en: 'Boutique' },

  colors: {
    primary: '#E85D26',
    accent:  '#E85D26',
    bg:      '#FFFFFF',
    dark:    '#0A0A0A',
    mid:     '#6B6B6B',
    dim:     '#9A9A9A',
    line:    '#E8E8E8'
  },

  fonts: { heading: 'Space Grotesk', body: 'Inter' },

  address:        'Neubaugasse 5, 1070 Wien',
  phone:          '+43 1 987 65 43',
  email:          'info@boutique-muster.at',
  instagram:      '@boutiquemuster',
  googleMapsUrl:  'https://maps.google.com/?q=Neubaugasse+5+Wien',
  googleMapsEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1!2d16.3500!3d48.1990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNeubaugasse%205%2C%201070%20Wien!5e0!3m2!1sde!2sat!4v1700000000000',

  hours: [
    { day: { de: 'Mo–Fr', en: 'Mon–Fri' }, time: '10:00–19:00' },
    { day: { de: 'Samstag', en: 'Saturday' }, time: '10:00–18:00' },
    { day: { de: 'Sonntag', en: 'Sunday' }, closed: true }
  ],

  announcementBar: { de: 'Neue Kollektion eingetroffen — Jetzt entdecken', en: 'New collection arrived — Discover now' },

  slides: [
    { img: 'img/slide1.jpg', eyebrow: { de: 'Neue Kollektion', en: 'New Collection' }, title: { de: 'Stil &<br><em>Charakter</em>', en: 'Style &<br><em>Character</em>' }, desc: { de: 'Ausgewählte Mode für Wien', en: 'Curated fashion for Vienna' } },
    { img: 'img/slide2.jpg', eyebrow: { de: 'Entdecken Sie', en: 'Discover' }, title: { de: 'Einzigartige<br><em>Stücke</em>', en: 'Unique<br><em>Pieces</em>' }, desc: { de: 'Jedes Stück sorgfältig ausgewählt', en: 'Every piece carefully selected' } }
  ],

  about: {
    img: 'img/iroom.jpg',
    text: { de: 'Boutique Muster ist mehr als ein Geschäft — es ist ein Ort, an dem Mode zur Persönlichkeit wird. Seit über einem Jahrzehnt kuratieren wir im Herzen Wiens eine Auswahl an zeitloser Mode und besonderen Accessoires.', en: 'Boutique Muster is more than a shop — it is a place where fashion becomes personality. For over a decade, we have been curating a selection of timeless fashion and special accessories in the heart of Vienna.' },
    highlights: [
      { de: 'Sorgfältig kuratiert', en: 'Carefully curated' },
      { de: 'Faire & nachhaltige Marken', en: 'Fair & sustainable brands' },
      { de: 'Persönliche Beratung', en: 'Personal styling advice' },
      { de: 'Österreichische Designer', en: 'Austrian designers' }
    ]
  },

  categories: [
    { name: { de: 'Neuheiten', en: 'New Arrivals' }, img: 'img/slide1.jpg', cta: { de: 'Jetzt entdecken', en: 'Discover now' } },
    { name: { de: 'Bestseller', en: 'Best Sellers' }, img: 'img/slide2.jpg', cta: { de: 'Jetzt entdecken', en: 'Discover now' } },
    { name: { de: 'Sale', en: 'Sale' }, img: 'img/iroom.jpg', cta: { de: 'Zum Sale', en: 'View sale' } }
  ],

  highlights: [
    { icon: '◈', title: { de: 'Faire Produkte', en: 'Fair Products' }, desc: { de: 'Nachhaltig produziert, fair gehandelt', en: 'Sustainably produced, fairly traded' } },
    { icon: '◈', title: { de: 'Persönliche Beratung', en: 'Personal Advice' }, desc: { de: 'Wir finden gemeinsam Ihren Stil', en: 'Together we find your personal style' } },
    { icon: '◈', title: { de: 'Wiener Qualität', en: 'Viennese Quality' }, desc: { de: 'Ausgewählte Marken mit Haltung', en: 'Selected brands with values' } }
  ],

  services: [
    { name: { de: 'Damenbekleidung', en: "Women's Clothing" }, desc: { de: 'Zeitlose Pieces für jeden Anlass', en: 'Timeless pieces for every occasion' }, price: 'ab €39', img: 'img/slide1.jpg' },
    { name: { de: 'Accessoires', en: 'Accessories' }, desc: { de: 'Das besondere Etwas für Ihr Outfit', en: 'The special touch for your outfit' }, price: 'ab €19', img: 'img/slide2.jpg' },
    { name: { de: 'Schmuck', en: 'Jewellery' }, desc: { de: 'Handgefertigte Einzelstücke', en: 'Handcrafted individual pieces' }, price: 'ab €29', img: 'img/iroom.jpg' },
    { name: { de: 'Taschen', en: 'Bags' }, desc: { de: 'Von klassisch bis modern', en: 'From classic to contemporary' }, price: 'ab €59', img: 'img/food.jpg' }
  ],

  photos: ['img/slide1.jpg','img/slide2.jpg','img/iroom.jpg','img/food.jpg','img/slide1.jpg','img/slide2.jpg'],
  supabase: { url: 'https://vhnourjddnlslgabrasb.supabase.co', key: 'sb_publishable_y5l1cAZXoAj8xaSVXUkBfw_Pk9pxb6H' },
  reviewSlug: 'boutique-muster',
  instagramPhotos: ['img/slide1.jpg','img/slide2.jpg','img/iroom.jpg','img/food.jpg','img/slide1.jpg','img/slide2.jpg'],

  seo: {
    title: 'Boutique Muster — Wien 7',
    description: { de: 'Ausgewählte Mode & Accessoires im 7. Bezirk Wien.', en: 'Curated fashion & accessories in Vienna\'s 7th district.' },
    ogImage: 'img/og-image.jpg'
  }
};
