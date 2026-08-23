Understood. Let's pivot completely. We are leaving the dungeons and setting sail for the Grand Line.

Here is your new mission profile, Recruit.

🏴‍☠️ Mission: The "Wanted" Poster Protocol
Theme: One Piece Difficulty: Recruit (Beginner) | Tech Stack: HTML5 (Structure, Formatting, Lists, Links, Images)

📝 The Scenario (The Hook)
"Moshi moshi! This is Marine Headquarters."

A Buggy Ball explosion has wiped the World Government's database! The Bounty Posters for the Straw Hat Pirates have been deleted. If the civilians don't know who to fear, the Great Pirate Era will descend into chaos.

Fleet Admiral Akainu has ordered you to hand-code a new Digital Wanted Poster for Monkey D. Luffy. You must structure the data correctly so it displays on every Transponder Snail screen in the world.

Constraints:

You must use semantic tags (<h1> for the "WANTED" title).

The Bounty amount must be clearly formatted (don't miss a zero!).

You must link the poster to the Marine Database.

🔨 Step-by-Step Instructions
Part 1: The Paper Structure (HTML Skeleton)
Lay the foundation of the poster.

Create the standard <!DOCTYPE html>, <html>, <head>, and <body> tags.

In the <head>, set the <title> to "Marine Database: Straw Hat".

Inside the <body>, create a main <div> with id="poster-container" to hold the content.

Part 2: The Headline & Suspect (Text & Attributes)
Make it loud and clear.

Inside your container, create an <h1> tag with the text "WANTED".

Add a style attribute to the <h1> to make it font-family: serif and color: brown.

Add an <h2> for the suspect's name: Monkey D. Luffy.

Add a paragraph <p> below the name with the text: "DEAD OR ALIVE".

Use <strong> (Bold) on the words "DEAD OR ALIVE".

Use <sub> (Subscript) to write "Reward valid only for capture" in small text next to it.

Part 3: The Bounty & Details (Formatting)
The world needs to know his value.

Create a paragraph <p> for the Bounty.

Write: 3,000,000,000 Berries.

Wrap the number in a <mark> tag so it looks highlighted (Yellow).

Use <i> (Italic) for the currency word "Berries".

Add a generic description using <small> text: "Consumer of the Hito Hito no Mi, Model: Nika."

Part 4: The Criminal Record (Lists)
List his crew and crimes so citizens stay away.

The Crew (Unordered List): Create a <ul> listing his commanders.

Roronoa Zoro

Nami

Sanji

Known Crimes (Ordered List): Create an <ol> listing his worst offenses in chronological order.

Declared war on the World Government (Enies Lobby).

Breached Impel Down.

Defeated Kaido in Wano.

Devil Fruit Powers (Description List): Create a <dl>.

<dt> Gomu Gomu no Mi

<dd> Gives the user a rubber body.

Part 5: Visual Identification (Images & Paths)
We need a face to the name.

Add an <img> tag for Luffy's face.

Source (src): Use an absolute path (e.g., https://onepiece.com/luffy.jpg).

Alt Text: "Straw Hat Luffy laughing".

Size: Set width="300px".

Add a second <img> for the Marine Logo at the bottom.

Source: Use a relative path (imagine it's in a local folder: images/marine_logo.png).

Part 6: The Den Den Mushi Network (Links)
Connect the poster to the network.

Report Sighting: Create a mailto: link.

Text: "REPORT TO MARINES".

Href: mailto:akainu@marines.gov.

Internal Navigation:

Add id="crimes" to your Ordered List of crimes.

At the very top of the page, add a link <a> that says "Skip to Crimes" and points to #crimes.

External Database:

Create a link to the "Grand Line News".

Set target="\_blank" so it opens in a new window (we don't want to lose the poster view!).

✅ Checklist for Success
Check your work before the Fleet Admiral arrives!

[ ] Did you use <h1> for "WANTED" and center it or color it?

[ ] Is "DEAD OR ALIVE" bolded (<strong>)?

[ ] Is the Bounty amount highlighted (<mark>)?

[ ] Is the list of Crimes Ordered (1, 2, 3...)?

[ ] Does the Luffy Image have alt text for accessibility?

[ ] Did you use an Absolute Path for the main image and a Relative Path for the logo?

[ ] Does the "Report" link open an email window?
