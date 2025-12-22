# 📜 Exercise: The Gondor Tactical Dashboard

**Mission:** Build a semantic, data-rich HTML dashboard for the defense of Middle-earth.
**Role:** You are the Chief Tactician. Denethor requires a live status report.

---

### 1. 🔨 Phase 1: The Prophecy (Text Formatting)

**Objective:** Set up the document and format the ancient texts.

1.  **Skeleton:** Create an `index.html` file with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
2.  **Meta:** Set the title to: **Gondor Archive: The War of the Ring**.
3.  **The Inscription:** Inside the `<body>`, create a `div` with class `prophecy-container`.
    -   **Paragraph 1:** Copy the text below:
        > "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the Darkness bind them."
    -   **Formatting:**
        -   "One Ring to rule them all" → `<strong>`
        -   ", One Ring to find them" → `<i>`
        -   "Darkness" → `<mark>`
    -   **Paragraph 2:** Create a new `<p>` inside the current div. Write:
        > GoldAu Power Level: 10 / 9
    -   **Formatting:** "Au" → `<sup>`, "10" → `<sup>`, "9" → `<sub>`.

---

### 2. 🗺️ Phase 2: Command Navigation

**Objective:** Build the header and navigation links.

1.  **Header:** Create a `<header>`. Inside it, add an `<h2>` titled: **Expedition Report**.
2.  **Navigation:** Inside the header, create a `<nav>`.
3.  **Links:** Add `<div>` tag with class `nav-container` and put this 3 anchor`<a>` tags pointing to these sections:
    -   `href="#heroes-mission"` (Text: **Heroes**)
    -   `href="#quest-log"` (Text: **Quests**)
    -   `href="#fellowship-table"` (Text: **Logistics**)

### 3. 🏰 Phase 3: The Hero Section !USE A `<main>` TAG to contain the all sections!

1.  **Container:** Below the prophecy, create a `<section>` with class `hero-banner`.
2.  **Main Title:** Inside the div, add an `<h1>` with the text: **The Lord of the Rings**.
    -   Add `style="font-size: 60px; margin: 0;"` to the h1.
3.  **Topics:** Below the title, add a `<p>` with the text:
    > **The Shadow Lengthens | The Free Peoples Unite | The Battle Begins**

---

### 4. ⚔️ Phase 4: The Heroes (Images & Content)

**Objective:** Display the Fellowship status using semantic figures.

1.  **Section:** Create a `<section>` with id `heroes-mission`.
2.  **Heading:** Inside, add an `<h2>` titled **Current Mission**.
3.  **Story:** Add an `<h3>`:
    > "The Fellowship has broken at Parth Galen. Boromir has fallen. Aragorn, Legolas, and Gimli hunt the Uruk-hai."
4.  **Hero Cards:** Create a `div` with class `heroes-container`. Inside, create **4** `<figure>` elements. Each must have an `<img>` (leave src empty) and a `<figcaption>`.
    -   **Aragorn:** "I am Aragorn, son of Arathorn. This is the Sword that was Broken!"
    -   **Legolas:** "The Elves see both very swift and very slow."
    -   **Gimli:** "I am Gimli, son of Glóin. This is the Axe of the Iron Hills!"
    -   **Boromir:** "No heir of Minas Tirith has ever been so hardy in toil."

---

### 5. 📜 Phase 5: The Quest Log (Lists)

**Objective:** Use ordered, unordered, and nested lists.

1.  **Section:** Create a `<section>` with id `quest-log`.
2.  **Heading:** Add an `<h2>` titled **Active Quest Log**.
3.  **Main Quest:** Create an **Ordered List** `<ol>`:
    1.  Cross the Dead Marshes.
    2.  Climb the Stairs of Cirith Ungol.
    3.  **Cast the Ring into the Fire.** (Make this item `<strong>`)
4.  **Side Quests:** Create an **Unordered List** `<ul>`:
    -   Locate the Rohirrim Riders.
    -   Defeat Saruman.
    -   Beat Gimli in a drinking contest.
    -   Smoke pipe with Gendalf.

---

### 6. 👁️ Phase 6: Enemy Intel (Interactive Details)

**Objective:** Use details and summary tags.

1.  **Section:** Create a `<section>` with id `enemy-intel`.
2.  **Heading:** Add an `<h2>` titled **Known Threats**.
3.  **Uruk-hai Dossier:** Create a `<details>` tag.
    -   **Summary:** `Target: Uruk-hai Berserker`
    -   **Text:** "Weakness: Small gap in neck armor."
4.  **Cave Troll Dossier:** Create a `<details>` tag.
    -   **Summary:** `Target: Cave Troll`
    -   **Text:** "Weakness: Turns to stone in sunlight."

---

### 7. 📊 Phase 7: The Logistics (Complex Table)

**Objective:** Build the RPG stats table.

1.  **Section:** Create a `<section>` with id `fellowship-table`.
2.  **Heading:** Add an `<h2>` titled **Fellowship Resource & Gear Ledger**.
3.  **Table:** Create a `<table>` with `border="1"`, `width="100%"`.
4.  **Header (`<thead>`):** One row with 7 headers:
    -   **Hero | Gold | Food | Arrows | Health | Shield | Weapon**
5.  **Body (`<tbody>`):**
6.  **The Body (`<tbody>`):** Create rows for the data below:
    | Hero | Gold | Food | Arrows | Health | Shield | Weapon |
    | --- | --- | --- | --- | --- | --- | --- |
    | Aragorn | 10 | 20 | 0 | 100 | 50 | 100 |
    | Legolas | 10 | 20 |**999+**| 100 | 20 | 100 |
    | Gimli | 10 | 50 | 0 | 150 | 100 | 100 |
    | Boromir | 13 | 20 | 0 | 100 | 30 | 100 |
7.  **Footer (`<tfoot>`):**
    -   One row. One cell with `colspan="7"`.
    -   Text: **Total Active Members: 3** (Align Center).

---

### 8. 🦶 Phase 8: Footer

1.  **Tag:** Create a `<footer>` at the bottom.
2.  **Link:** Create a mailto link (`href="mailto:elrond@rivendell.com"`) with text: **Send Raven to Rivendell**.

**AND FINAL**
use link below, put it inside `<head>` tag`under`<title  >` tag and enjoy!

`<link rel="stylesheet" href="../styles/styles.css">`
