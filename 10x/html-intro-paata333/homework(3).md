System Alert: [Player Found] Status: Glitch Detected

You are the Architect of the "System." Hunter Sung Jin-Woo has just experienced the Double Dungeon Incident and re-awakened as a "Player." However, the magical interface that displays his stats, quests, and inventory is corrupted. He cannot see his Daily Quests or access the Item Shop!

Your mission is to rebuild the System Interface (webpage) from scratch using HTML. You must structure the data correctly so Jin-Woo can track his growth from the "Weakest Hunter of All Mankind" to the Shadow Monarch.

Constraint: The System only accepts valid HTML5 tags. Broken tags will result in a System Failure Penalty.

🔨 Step-by-Step Instructions
Part 1: Constructing the Interface Frame (Structure)
The System needs a container to exist in reality.

Initialize the document with the standard HTML boilerplate (<html>, <head>, <body>).

In the <head>, set the <title> to: "System Interface: Sung Jin-Woo".

In the <body>, create a main container using a <div> tag. Give it an id attribute of "system-window".

Part 2: Player Status Profile (Headings & Formatting)
Jin-Woo needs to know who he is. Inside your main <div>:

Use an <h1> tag to display his name: "Player: Sung Jin-Woo".

Use a <p> tag to display his current title. Use the <del> tag to cross out ~~"E-Rank Hunter"~~ and use <ins> to insert "Shadow Monarch".

Display his Level. Use the <strong> tag to make the text "Level:" bold, and use the <sup> tag to display his level number "100" slightly above the text (e.g., Level<sup>100</sup>).

Add a quote using <em> (emphasis) to italicize: "I alone level up."

Part 3: The "Daily Quest: Strength" (Lists)
The System demands training. Create the "Daily Quest" list.

Create an <h2> sub-heading titled "Daily Quest: Strength Training".

Create an Ordered List (<ol>) to track the mandatory exercises:

Push-ups: 100

Sit-ups: 100

Squats: 100

Run: 10km

Create an Unordered List (<ul>) titled "Rewards":

Status Recovery

Ability Points +3

Random Cursed Box

Part 4: The Inventory & Skills (Images & Attributes)
Visuals are critical for identifying weapons.

Use an <img> tag to display his weapon, "Kasaka's Venom Fang".

Source (src): Use a relative path (e.g., ../images/dagger.jpg).

Alt Text (alt): Set this to "A dagger dripping with purple venom".

Styling (style): Set the width to 300px and add a border of 2px solid purple.

Use a Description List (<dl>) to detail the dagger's stats:

<dt> Item Name: Kasaka's Venom Fang

<dd> Effect: Paralyzes enemies and bleeds them over time.

Part 5: Gate Navigation (Links)
Jin-Woo needs to travel between the Human World and Dungeons.

Create a navigation section using a <div>.

Add an anchor link (<a>) with the text "Enter Red Gate".

Set the href to an external link (e.g., https://dungeon.com).

Add the target="\_blank" attribute so the gate opens in a new tab (dimension).

Add a title attribute that says "Warning: S-Rank Difficulty".

Add an internal link (<a>) that points to the top of the page (using href="#system-window") with the text "Return to Status".

✅ Checklist for Success
Verify your code before the System locks you out.

[ ] Does the page have a valid <html>, <head>, and <body> structure?

[ ] Is the "E-Rank" crossed out (<del>) and "Shadow Monarch" inserted (<ins>)?

[ ] Is the "Daily Quest" strictly ordered (<ol>)?

[ ] Does the Weapon Image have valid alt text for accessibility?

[ ] Does the "Enter Red Gate" link open in a new tab (target="\_blank")?

[ ] Are inline styles used to set the image width to 300px?
