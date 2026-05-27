window.MENU_DATA = {
  categories: [
    {
      name: { de: 'Kaffee', en: 'Coffee' },
      items: [
        { name: { de: 'Espresso', en: 'Espresso' }, desc: { de: 'Kleiner schwarzer, kräftig & aromatisch', en: 'Small black coffee, bold & aromatic' }, price: '€ 2,80' },
        { name: { de: 'Doppelter Espresso', en: 'Double Espresso' }, desc: { de: 'Zwei Shots, intensiver Genuss', en: 'Two shots, intense pleasure' }, price: '€ 3,80' },
        { name: { de: 'Wiener Melange', en: 'Viennese Melange' }, desc: { de: 'Traditioneller Milchkaffee, aufgeschäumte Milch', en: 'Traditional milk coffee, steamed milk foam' }, price: '€ 3,80', allergen: { de: 'Milch', en: 'Milk' } },
        { name: { de: 'Flat White', en: 'Flat White' }, desc: { de: 'Doppelter Ristretto, samtiger Mikroschaum', en: 'Double ristretto, silky microfoam' }, price: '€ 4,20', allergen: { de: 'Milch', en: 'Milk' } },
        { name: { de: 'Cappuccino', en: 'Cappuccino' }, desc: { de: 'Klassisch mit flauschigem Milchschaum', en: 'Classic with fluffy milk foam' }, price: '€ 3,90', allergen: { de: 'Milch', en: 'Milk' } },
        { name: { de: 'Latte Macchiato', en: 'Latte Macchiato' }, desc: { de: 'Geschichteter Milchkaffee im hohen Glas', en: 'Layered milk coffee in a tall glass' }, price: '€ 4,50', allergen: { de: 'Milch', en: 'Milk' } },
        { name: { de: 'Oat Flat White', en: 'Oat Flat White' }, desc: { de: 'Doppelter Ristretto mit Bio-Hafermilch', en: 'Double ristretto with organic oat milk' }, price: '€ 5,00' },
        { name: { de: 'Cold Brew', en: 'Cold Brew' }, desc: { de: '12 Stunden kalt gebrüht, über Eis', en: '12-hour cold brewed, over ice' }, price: '€ 4,80' }
      ]
    },
    {
      name: { de: 'Tee & Kaltgetränke', en: 'Tea & Cold Drinks' },
      items: [
        { name: { de: 'Schwarzer Tee', en: 'Black Tea' }, desc: { de: 'Darjeeling First Flush, heiß serviert', en: 'Darjeeling first flush, served hot' }, price: '€ 3,20' },
        { name: { de: 'Grüner Tee', en: 'Green Tea' }, desc: { de: 'Japanischer Gyokuro, fein & grasig', en: 'Japanese gyokuro, fine & grassy' }, price: '€ 3,50' },
        { name: { de: 'Kräutertee', en: 'Herbal Tea' }, desc: { de: 'Saisonale Kräutermischung, täglich wechselnd', en: 'Seasonal herbal blend, changes daily' }, price: '€ 3,20' },
        { name: { de: 'Matcha Latte', en: 'Matcha Latte' }, desc: { de: 'Zeremonieller Matcha mit Bio-Hafermilch', en: 'Ceremonial matcha with organic oat milk' }, price: '€ 5,50' },
        { name: { de: 'Kardamom-Milch', en: 'Cardamom Milk' }, desc: { de: 'Hausgemachte Gewürzmilch nach orientalischer Art', en: 'House-made spiced milk, oriental style' }, price: '€ 4,80', allergen: { de: 'Milch', en: 'Milk' } },
        { name: { de: 'Frisch gepresste Limonade', en: 'Fresh Lemonade' }, desc: { de: 'Zitrone, Minze, Ingwer & Agavensirup', en: 'Lemon, mint, ginger & agave syrup' }, price: '€ 4,50' }
      ]
    },
    {
      name: { de: 'Frühstück', en: 'Breakfast' },
      items: [
        { name: { de: 'Wiener Frühstück', en: 'Viennese Breakfast' }, desc: { de: 'Semmel, Butter, Marmelade, Ei, Kaffee oder Tee', en: 'Roll, butter, jam, egg, coffee or tea' }, price: '€ 9,80', allergen: { de: 'Gluten, Milch, Ei', en: 'Gluten, milk, egg' } },
        { name: { de: 'Avocado Toast', en: 'Avocado Toast' }, desc: { de: 'Sauerteig, Avocado, Ei, Chiliflocken, Microgreens', en: 'Sourdough, avocado, egg, chilli flakes, microgreens' }, price: '€ 10,50', allergen: { de: 'Gluten, Ei', en: 'Gluten, egg' } },
        { name: { de: 'Granola Bowl', en: 'Granola Bowl' }, desc: { de: 'Hausgemachtes Granola, Joghurt, saisonale Früchte', en: 'House-made granola, yoghurt, seasonal fruit' }, price: '€ 8,50', allergen: { de: 'Gluten, Milch, Nüsse', en: 'Gluten, milk, nuts' } },
        { name: { de: 'Rührei auf Toast', en: 'Scrambled Eggs on Toast' }, desc: { de: 'Cremige Bio-Eier, Schnittlauch, Butter-Sauerteig', en: 'Creamy organic eggs, chives, buttered sourdough' }, price: '€ 9,00', allergen: { de: 'Gluten, Milch, Ei', en: 'Gluten, milk, egg' } }
      ]
    },
    {
      name: { de: 'Kuchen & Gebäck', en: 'Cakes & Pastries' },
      items: [
        { name: { de: 'Apfelstrudel', en: 'Apple Strudel' }, desc: { de: 'Täglich frisch gebacken, mit Vanillesauce', en: 'Freshly baked daily, served with vanilla sauce' }, price: '€ 4,90', allergen: { de: 'Gluten, Milch, Ei', en: 'Gluten, milk, egg' } },
        { name: { de: 'Sachertorte', en: 'Sacher Torte' }, desc: { de: 'Das Original — hausgemacht nach Familienrezept', en: 'The original — homemade from a family recipe' }, price: '€ 5,20', allergen: { de: 'Gluten, Milch, Ei', en: 'Gluten, milk, egg' } },
        { name: { de: 'Croissant', en: 'Croissant' }, desc: { de: 'Butterreiches Plundergebäck, knusprig frisch', en: 'Butter-rich puff pastry, crisp and fresh' }, price: '€ 3,20', allergen: { de: 'Gluten, Milch', en: 'Gluten, milk' } },
        { name: { de: 'Mohnkuchen', en: 'Poppy Seed Cake' }, desc: { de: 'Saftiger Mohnkuchen mit Zitronenglasur', en: 'Moist poppy seed cake with lemon glaze' }, price: '€ 4,50', allergen: { de: 'Gluten, Milch, Ei', en: 'Gluten, milk, egg' } },
        { name: { de: 'Vegane Schoko-Torte', en: 'Vegan Chocolate Cake' }, desc: { de: 'Reichhaltig, ohne Milch und Ei', en: 'Indulgent, dairy-free and egg-free' }, price: '€ 5,00' }
      ]
    }
  ]
};
