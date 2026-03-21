export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
};

export type Drink = {
  name: string;
  country: string;
  detail: string;
  price: string;
  image?: string;
};

const menuData = {
  food: [
    {
      id: "appetizers",
      title: "Appetizers",
      items: [
        {
          id: "bruschetta",
          name: "Bruschetta",
          description: "Toasted artisan bread topped with ripe tomatoes, fresh basil, garlic, and drizzled with balsamic glaze. Perfectly crispy and bursting with flavor.",
          price: 12,
          image: "/images/Menu/appetizers/bruschetta.jpg"
        },
        {
          id: "arancini",
          name: "Arancini",
          description: "Golden fried risotto balls stuffed with creamy mozzarella and peas, served with a side of tangy marinara sauce.",
          price: 15,
          image: "/images/Menu/appetizers/arancini.jpg"
        },
        {
          id: "focaccia",
          name: "Focaccia",
          description: "Freshly baked focaccia bread infused with rosemary and sea salt, brushed with rich olive oil. Soft on the inside, crispy outside.",
          price: 9,
          image: "/images/Menu/appetizers/focaccia.jpg"
        },
        {
          id: "caprese-salad",
          name: "Caprese Salad",
          description: "Juicy heirloom tomatoes layered with fresh mozzarella, fragrant basil leaves, and a drizzle of extra virgin olive oil and balsamic reduction.",
          price: 13,
          image: "/images/Menu/appetizers/caprese-salad.jpg"
        },
        {
          id: "garlic-butter-shrimp",
          name: "Garlic Butter Shrimp",
          description: "Succulent shrimp sautéed in a rich garlic butter sauce with a hint of lemon and parsley. A flavorful start to your meal.",
          price: 17,
          image: "/images/Menu/appetizers/garlic-butter-shrimp.jpg"
        },
        {
          id: "stuffed-mushrooms",
          name: "Stuffed Mushrooms",
          description: "Button mushrooms filled with a savory blend of cheese, garlic, herbs, and breadcrumbs, baked until golden and bubbling.",
          price: 14,
          image: "/images/Menu/appetizers/stuffed-mushrooms.jpg"
        },
        {
          id: "calamari",
          name: "Crispy Calamari",
          description: "Lightly battered calamari rings fried to perfection, served with a zesty lemon aioli and marinara dip.",
          price: 16,
          image: "/images/Menu/appetizers/calamari.jpg"
        },
      ]
    },
    {
      id: "pasta",
      title: "Pasta",
      items: [
        {
          id: "carbonara",
          name: "Spaghetti Carbonara",
          description: "Al dente spaghetti tossed with crispy pancetta, creamy egg sauce, freshly grated Parmesan, and cracked black pepper.",
          price: 22,
          image: "/images/Menu/pasta/carbonara.jpg"
        },
        {
          id: "bolognese",
          name: "Tagliatelle Bolognese",
          description: "Handmade tagliatelle pasta served with a slow-cooked, rich meat sauce, infused with tomatoes, onions, and herbs.",
          price: 24,
          image: "/images/Menu/pasta/bolognese.jpg"
        },
        {
          id: "pesto-penne",
          name: "Penne al Pesto",
          description: "Penne pasta coated in a vibrant basil pesto sauce, with pine nuts, garlic, and a sprinkle of Parmesan cheese.",
          price: 21,
          image: "/images/Menu/pasta/pesto-penne.jpg"
        },
        {
          id: "seafood-linguine",
          name: "Seafood Linguine",
          description: "Linguine pasta tossed with fresh clams, mussels, shrimp, and a light tomato and garlic sauce. A true taste of the sea.",
          price: 28,
          image: "/images/Menu/pasta/seafood-linguine.jpg"
        },
        {
          id: "truffle-pasta",
          name: "Truffle Cream Pasta",
          description: "Creamy pasta infused with black truffle, mushrooms, and parmesan. Rich, earthy, and insanely indulgent.",
          price: 29,
          image: "/images/Menu/pasta/truffle-pasta.jpg"
        },
        {
          id: "arrabbiata",
          name: "Penne Arrabbiata",
          description: "Penne pasta tossed in a spicy tomato sauce with garlic, chili flakes, and fresh parsley. Simple but packs a punch.",
          price: 20,
          image: "/images/Menu/pasta/arrabbiata.jpg"
        },
        {
          id: "lasagna",
          name: "Lasagna Classica",
          description: "Layers of pasta sheets with rich beef ragù, béchamel sauce, and melted cheese, baked to perfection.",
          price: 25,
          image: "/images/Menu/pasta/lasagna.jpg"
        },
        {
          id: "gnocchi",
          name: "Gnocchi al Parmigiano",
          description: "Soft potato dumplings tossed in a rich parmesan cream sauce, finished with aged Parmigiano Reggiano.",
          price: 22,
          image: "/images/Menu/pasta/gnocchi.jpg"
        },
        {
          id: "fettuccine-alfredo",
          name: "Fettuccine Alfredo",
          description: "Creamy alfredo sauce coating fresh fettuccine pasta, finished with butter and parmesan.",
          price: 24,
          image: "/images/Menu/pasta/fettuccine-alfredo.jpg"
        },
      ]
    },
    {
      id: "pizza",
      title: "Pizza",
      items: [
        {
          id: "margherita",
          name: "Margherita",
          description: "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.",
          price: 18,
          image: "/images/Menu/pizza/margherita.jpg"
        },
        {
          id: "pepperoni",
          name: "Pepperoni",
          description: "Crispy pepperoni slices over melted mozzarella and rich tomato sauce, baked to perfection.",
          price: 21,
          image: "/images/Menu/pizza/pepperoni.jpg"
        },
        {
          id: "quattro-formaggi",
          name: "Quattro Formaggi",
          description: "A rich blend of mozzarella, gorgonzola, parmesan, and fontina cheeses. Creamy and indulgent.",
          price: 23,
          image: "/images/Menu/pizza/quattro-formaggi.jpg"
        },
        {
          id: "prosciutto-arugula",
          name: "Prosciutto & Arugula",
          description: "Thin crust pizza topped with prosciutto, fresh arugula, shaved parmesan, and a drizzle of olive oil.",
          price: 24,
          image: "/images/Menu/pizza/prosciutto-arugula.jpg"
        }
      ]
    },
    {
      id: "main",
      title: "Main Courses",
      items: [
        {
          id: "ribeye",
          name: "Ribeye Steak",
          description: "Grilled ribeye steak cooked to perfection, served with roasted potatoes and seasonal vegetables. Juicy, tender, and full of flavor.",
          price: 36,
          image: "/images/Menu/mains/ribeye.jpg"
        },
        {
          id: "salmon",
          name: "Grilled Salmon",
          description: "Fresh salmon fillet grilled and glazed with lemon butter, accompanied by herbed quinoa and sautéed asparagus.",
          price: 28,
          image: "/images/Menu/mains/salmon.jpg"
        },
        {
          id: "chicken-parmigiana",
          name: "Chicken Parmigiana",
          description: "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with a side of spaghetti.",
          price: 26,
          image: "/images/Menu/mains/chicken-parmigiana.jpg"
        },
        {
          id: "lamb-chops",
          name: "Grilled Lamb Chops",
          description: "Juicy lamb chops grilled with rosemary and garlic, served with roasted vegetables and a red wine reduction.",
          price: 38,
          image: "/images/Menu/mains/lamb-chops.jpg"
        },
        {
          id: "osso-buco",
          name: "Osso Buco",
          description: "Slow-braised veal shanks cooked in white wine, vegetables, and broth, served with gremolata and creamy risotto Milanese.",
          price: 42,
          image: "/images/Menu/mains/osso-buco.jpg"
        },
        {
          id: "eggplant-parmigiana",
          name: "Eggplant Parmigiana",
          description: "Layers of fried eggplant, marinara sauce, mozzarella, and parmesan baked until bubbling and golden.",
          price: 23,
          image: "/images/Menu/mains/eggplant-parmigiana.jpg"
        },
        {
          id: "risotto-milanese",
          name: "Risotto Milanese",
          description: "Creamy saffron-infused risotto finished with butter and parmesan. Smooth, rich, and luxurious.",
          price: 26,
          image: "/images/Menu/mains/risotto-milanese.jpg"
        },
      ]
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          id: "tiramisu",
          name: "Tiramisu",
          description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
          price: 11,
          image: "/images/Menu/desserts/tiramisu.jpg"
        },
        {
          id: "gelato",
          name: "Italian Gelato",
          description: "Rich and creamy Italian ice cream in various flavors, made with the finest ingredients for a silky smooth texture.",
          price: 9,
          image: "/images/Menu/desserts/gelato.jpg"
        },
        {
          id: "panna-cotta",
          name: "Panna Cotta",
          description: "Silky smooth vanilla panna cotta served with a fresh berry coulis and a touch of mint. Light, creamy, and refreshing.",
          price: 10,
          image: "/images/Menu/desserts/panna-cotta.jpg"
        },
        {
          id: "chocolate-souffle",
          name: "Chocolate Soufflé",
          description: "Warm, airy chocolate soufflé with a molten center, served with a dollop of whipped cream. Rich indulgence in every bite.",
          price: 12,
          image: "/images/Menu/desserts/chocolate-souffle.jpg"
        },
        {
          id: "cannoli",
          name: "Cannoli",
          description: "Crispy pastry shells filled with sweet ricotta cream, and a dusting of powdered sugar.",
          price: 10,
          image: "/images/Menu/desserts/cannoli.jpg"
        },
        {
          id: "affogato",
          name: "Affogato",
          description: "A scoop of vanilla gelato drowned in a shot of hot espresso. Simple, bold, and addictive.",
          price: 9,
          image: "/images/Menu/desserts/affogato.jpg"
        },
        {
          id: "zeppole",
          name: "Zeppole",
          description: "Italian fried dough balls dusted with powdered sugar and served with chocolate dipping sauce.",
          price: 9,
          image: "/images/Menu/desserts/zeppole.jpg"
        },
      ]
    }
  ],

  drinks: [
    {
      id: "cocktails",
      title: "Cocktails",
      items: [
        { name: "Chapel Hill Shiraz", country: "AU", detail: "Bottle", price: "$10" },
        { name: "Caten Malbee", country: "AU", detail: "Bottle", price: "$49" },
        { name: "Rhino Pale Ale", country: "CA", detail: "750 ml", price: "$20" },
        { name: "Irish Guinness", country: "IE", detail: "600 ml", price: "$29" },
        { name: "Negroni", country: "IT", detail: "Classic", price: "$18" },
        { name: "Aperol Spritz", country: "IT", detail: "Glass", price: "$16" } 
      ]
    },
    {
      id: "mocktails",
      title: "Mocktails",
      items: [
        { name: "Tropical Bloom", country: "US", detail: "Bottle", price: "$10" },
        { name: "Passionfruit Mint", country: "US", detail: "Bottle", price: "$49" },
        { name: "Citrus Glow", country: "CA", detail: "750 ml", price: "$20" },
        { name: "Lavender Fizz", country: "IE", detail: "600 ml", price: "$29" },
        { name: "Berry Splash", country: "US", detail: "Glass", price: "$12" },
        { name: "Green Detox", country: "US", detail: "Fresh", price: "$11" }
      ]
    },
    {
      id: "wines",
      title: "Wines",
      items: [
        { name: "Chianti Classico", country: "IT", detail: "750 ml", price: "$34" },
        { name: "Pinot Grigio", country: "IT", detail: "Bottle", price: "$28" },
        { name: "Cabernet Sauvignon", country: "US", detail: "Bottle", price: "$42" },
        { name: "Rosé Provence", country: "FR", detail: "Bottle", price: "$30" },
        { name: "Merlot Reserve", country: "FR", detail: "Bottle", price: "$45" },
        { name: "Sauvignon Blanc", country: "NZ", detail: "Bottle", price: "$38" }
      ]
    }
  ]
};

export default menuData;