[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/D7wHRN95)
# Dwarf Galaxy Restaurant

**როგორც გახსოვთ ბოლოს გალაქტიკურ აეროპორტში ვიყავით, სანამ ჩვეს ფრენას ველოდებით იქამდე ინტერგალაქტიკური სნექები უნდა გავსინჯოთ... სამწუხაროთ აქაური ფული არ გვაქვს და რესტორნის მეპატრონემ შემოგვთავაზა - თუ ავუწყობთ მენიუს ფეიჯს, მაშინ უფასოდ გვაჭმევს და ფრენის ფულსაც გადაგვიხდის, სამწუხაროდ სხვა გამოსავალი არ არის, ამჯერად ამჯერად ასე იაფად გამოძვრება..**

**აბა თქვენ იცით, წარმატებები! დედამიწა გელოდებათ!**

Dwarf Galaxy Restaurant - Near Milky Way System

## Student Exercise: Rebuild the Menu

**Objective:** create the exact HTML structure for the "Interplanetary Menu" section.

### Instructions

1.  create HTML standart structure.
    1.1 inside `<body>` make `<header>` element
    if we need WOW effect we have to add some empty tags
    1.2 inside header add 3 `<div> with id of (stars, stars2, stars3)
1.3add one more `<div>`below this empty`<div>`-s and put inside 6 empty `<span>`tag and leave it.
1.4below this div add 2 more`<div>`element with classes
"comet comet-blue" and "comet comet-red".
1.5 add one more div with class "hero-content"
add inside h1 tag with class "glow-text and write a content "MILKY WAY"
add below`<p>`tag with class "subtitle" and add content in "Dining at the Edge of the Galaxy"
then add`<a>` tag with href-"menu" and class "cta-button" with cntent inside Engage Warp Drive.
    **here is our Header ends**
    **section id="menu"**

2.  add a `<section>` with id "menu"
    inside this section add title with `<h2>` tag with text "Iternplanetary Menu"
    for the menu grid and cards inside the `<div class="menu-grid">` container.
3.  Below is an example of the code for the first card ("Nebula Noodle Soup").
4.  Use the **Card Content Data** below to write the HTML for the remaining cards yourself.

### Example Code (Dish #1)

```html
<div class="card">
    <div class="card-image-wrapper">
        <img src="assets/nebula_nudles.jpeg" alt="Nebula Noodles" />
        <div class="ingredients-overlay">
            <h4>Scanner Analysis</h4>
            <ul>
                <li>Plasma Rice Noodles</li>
                <li>Bioluminescent Algae</li>
                <li>Void Broth</li>
                <li>Star Anise</li>
            </ul>
        </div>
    </div>
    <div class="card-content">
        <h3 class="card-title">Nebula Noodle Soup</h3>
        <p class="card-desc">
            Glowing purple broth with stardust spices. A local favorite in the
            Orion Belt.
        </p>
        <div class="card-footer">
            <span class="origin">ORION</span>
            <span class="price">15 Cr</span>
        </div>
    </div>
</div>
```

### Card Content Data

**2. Quantum Burger**

-   **Image:** `assets/QuantumBurger.jpeg`
-   **Ingredients:** Anti-Matter Patty, Gamma-Irradiated Lettuce, Levitation Yeast Bun, Neon Cheese
-   **Title:** Quantum Burger
-   **Description:** The patties levitate. Eat quickly before it phases into another dimension.
-   **Origin:** EARTH-616
-   **Price:** 22 Cr

**3. Solar Flare Wings**

-   **Image:** `assets/SolarFlareWings.jpeg`
-   **Ingredients:** Phoenix Poultry, Magma Hot Sauce, Solar Dust, Thermal Spices
-   **Title:** Solar Flare Wings
-   **Description:** Wings that emit actual heat and light. Served with thermal protective gloves.
-   **Origin:** THE SUN
-   **Price:** 18 Cr

**4. Void Steak**

-   **Image:** `assets/VoidSteak.jpeg`
-   **Ingredients:** Bovine from the Void, Dark Matter Rub, Electric Blue Jus
-   **Title:** Void Steak
-   **Description:** Pitch black crust with a glowing electric blue center. Tastes like infinity.
-   **Origin:** DEEP SPACE
-   **Price:** 45 Cr

**5. Asteroid Meatballs**

-   **Image:** `assets/AsteroidMeatballs.jpeg`
-   **Ingredients:** Ground Meteorite Beef, Crater Breadcrumbs, Molten Marinara
-   **Title:** Asteroid Meatballs
-   **Description:** Crunchy, cratered spheres served with a dipping lava sauce.
-   **Origin:** MARS BELT
-   **Price:** 19 Cr

**6. Zero-G Gelato**

-   **Image:** `assets/Zero-GGelato.jpeg`
-   **Ingredients:** Condensed Nebula Milk, Anti-Gravity Stabilizers, Frozen Nitrogen
-   **Title:** Zero-G Gelato
-   **Description:** Floating scoops of ice cream. You have to chase them to eat them.
-   **Origin:** STATION X
-   **Price:** 12 Cr

**7. Xeno-Eggs Benedict**

-   **Image:** `assets/Xeno-EggsBenedict.jpeg`
-   **Ingredients:** Reptilian Eggs, Green Hollandaise, Cyber-Ham
-   **Title:** Xeno-Eggs Benedict
-   **Description:** Spotted green eggs from an unknown species. Safe for human consumption (mostly).
-   **Origin:** KRYPTON
-   **Price:** 20 Cr

**8. Chromosphere Cocktail**

-   **Image:** `assets/ChromosphereCocktail.jpeg`
-   **Ingredients:** Liquid Prism, Dry Ice, Fermented Starfruit
-   **Title:** Chromosphere Cocktail
-   **Description:** A drink that shifts colors every time you take a sip.
-   **Origin:** BAR 99
-   **Price:** 14 Cr

**9. Lunar Cheese Fries**

-   **Image:** `assets/LunarCheeseFries.jpeg`
-   **Ingredients:** Vacuum Fried Potatoes, Grey Moon-Cheese, Regolith Salt
-   **Title:** Lunar Cheese Fries
-   **Description:** Fries covered in a grey powdery cheese that looks exactly like moon dust.
-   **Origin:** THE MOON
-   **Price:** 10 Cr

**10. Stardust Pancakes**

-   **Image:** `assets/StardustPancakes.jpeg`
-   **Ingredients:** Fluffy Cloud Batter, Edible Gold Glitter, Galactic Syrup
-   **Title:** Stardust Pancakes
-   **Description:** A fluffy stack served with glittering syrup that sparkles in the dark.
-   **Origin:** VENUS
-   **Price:** 16 Cr

**11. Black Hole Bagel**

-   **Image:** `assets/BlackHoleBagel.jpeg`
-   **Ingredients:** Vantablack Dough, Event Horizon Cream Cheese, Dark Seeds
-   **Title:** Black Hole Bagel
-   **Description:** Absorbs 99.9% of visible light. The densest bagel in the universe.
-   **Origin:** VOID SECTOR
-   **Price:** 8 Cr

**12. Radioactive Ramen**

-   **Image:** `assets/RadioactiveRamen.jpeg`
-   **Ingredients:** Uranium-Enriched Broth, Glowing Noodles, Mutated Pork
-   **Title:** Radioactive Ramen
-   **Description:** Neon green noodles in a dark oily broth. (Geiger counter not included).
-   **Origin:** CHERNOBYL-2
-   **Price:** 18 Cr

**13. Comet Curry**

-   **Image:** `assets/CometCurry.jpeg`
-   **Ingredients:** Icy Mint Yogurt, Red Tail Curry, Speed-Grown Rice
-   **Title:** Comet Curry
-   **Description:** Spicy red curry served with a cooling tail of mint yogurt.
-   **Origin:** HALLEY
-   **Price:** 21 Cr

**14. Dark Matter Mousse**

-   **Image:** `assets/DarkMatterMousse.jpeg`
-   **Ingredients:** Concentrated Cocoa, Gravity Waves, Silver Flakes
-   **Title:** Dark Matter Mousse
-   **Description:** A dessert so heavy it curves spacetime around your spoon.
-   **Origin:** LAB 1
-   **Price:** 13 Cr

**15. Hyperdrive Hotdog**

-   **Image:** `assets/HyperdriveHotdog.jpeg`
-   **Ingredients:** Sonic Sausage, Blue Relish Streaks, Chrome Bun
-   **Title:** Hyperdrive Hotdog
-   **Description:** Streaked with neon blue relish to look like it's moving at lightspeed.
-   **Origin:** REST STOP 5
-   **Price:** 9 Cr

**16. Supernova Sushi**

-   **Image:** `assets/SupernovaSushi.jpeg`
-   **Ingredients:** Exploding Roe, Stellar Salmon, Wasabi Flare
-   **Title:** Supernova Sushi
-   **Description:** The fish roe glows bright orange and pops with intense flavor.
-   **Origin:** NEO-TOKYO
-   **Price:** 25 Cr

**17. Orbital Onion Rings**

-   **Image:** `assets/Orbital.jpeg`
-   **Ingredients:** Saturn Onions, Magnetic Batter, Gravity Sauce
-   **Title:** Orbital Onion Rings
-   **Description:** Crispy rings suspended magnetically around a central sauce cup.
-   **Origin:** SATURN
-   **Price:** 11 Cr

**18. Mars-Dust Tacos**

-   **Image:** `assets/Mars-DustTacos.jpeg`
-   **Ingredients:** Red Corn Shells, Iron-Rich Meat, Spicy Dust
-   **Title:** Mars-Dust Tacos
-   **Description:** Red shells with a dusty texture, filled with spicy Martian meat.
-   **Origin:** MARS
-   **Price:** 14 Cr

**19. Cryo-Frozen Cake**

-   **Image:** `assets/Cryo-FrozenCake.jpeg`
-   **Ingredients:** Blue Velvet, Liquid Nitrogen Frosting, Edible Ice Shards
-   **Title:** Cryo-Frozen Cake
-   **Description:** Encased in thin ice, heavy cold vapor rolls off it as you eat.
-   **Origin:** HOTH
-   **Price:** 16 Cr

**20. Nano Banana Split**

-   **Image:** `assets/NanoBanana.jpeg`
-   **Ingredients:** Metallic Bananas, Pixelated Cherries, Synth-Cream
-   **Title:** Nano Banana Split
-   **Description:** Metallic gold bananas with toppings that look like pixel blocks.
-   **Origin:** CYBERTRON
-   **Price:** 17 Cr

**add a footer with the following content inside of p tag:**
"&copy; 3025 Milky Way Restaurant. Nowhere, Coordinates X-99."

**არ დაგავიწყდეთ მაგიური ლინკი :P**
`<link rel="stylesheet" href="styles/styles.css">`
