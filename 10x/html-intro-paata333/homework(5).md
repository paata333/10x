"Why are you worrying about You-Know-Who? You should be worrying about U-NO-POO!"

Fred and George Weasley have a problem. Their shop, Weasleys' Wizard Wheezes, is so successful that the owls are exhausted delivering paper catalogs. They need to go digital.

Hermione Granger has set up the server (she read Hogwarts: A History of the Internet). Your job is to code the Product Landing Page for their best-selling items. It must be catchy, colorful, and organized, or Mrs. Weasley will come down there and shout at you herself.

Constraints:

Use text formatting to highlight sales (<del>, <ins>).

Use a Description List (<dl>) for magical effects.

No inline CSS allowed except for the main header color.

🔨 Step-by-Step Instructions
Part 1: The Shop Front (Structure)
Build the foundation of the shop.

Create your standard HTML boilerplates (<html>, <head>, <body>).

In the <head>, set the title to "Weasleys' Wizard Wheezes".

In the <body>, add a main <div> with id="shop-container".

Part 2: The Flashy Header (Headings & Style)
Grab the customer's attention immediately.

Create an <h1> with the text "Weasleys' Wizard Wheezes".

Add a style attribute to make the color purple and text-align center.

Add an <h2> underneath: "Proprietors: Fred & George Weasley".

Add a marquee warning using <p> and <strong>:

"WARNING: DO NOT SELL TO RON WEASLEY (HE WANTS A DISCOUNT)."

Part 3: The "Skiving Snackbox" (Text Formatting)
Highlight the best-seller using HTML formatting tags.

Create a section for "Skiving Snackboxes".

Write a description paragraph:

Use <mark> to highlight the word "NEW!".

Use <i> for the slogan: "Why go to class when you can be sick?"

Price Check:

Write "Original Price: 10 Galleons" but wrap "10 Galleons" in a <del> tag (strikethrough).

Write "Sale Price: 5 Galleons" and wrap "5 Galleons" in an <ins> tag (inserted/underlined).

Use <sub> to write "vat included" in tiny text next to the price.

Part 4: The Inventory (Complex Lists)
Organize the chaos.

The WonderWitch Collection (Unordered List): Create a <ul>.

Pygmy Puffs

Love Potions

10-Second Pimple Vanisher

How to Use "Fainting Fancies" (Ordered List): Create an <ol> for the instructions.

Eat the orange half of the sweet.

Faint dramatically in front of Snape.

Eat the purple half to restore health.

Product Effects (Description List): Create a <dl> to explain what things do.

<dt> U-No-Poo

<dd> The constipation sensation that's gripping the nation!

<dt> Extendable Ears

<dd> Great for eavesdropping on Order of the Phoenix meetings.

Part 5: Magical Illustrations (Images & Paths)
Show the goods.

Product Image (Absolute Path):

Embed an image of a Pygmy Puff. Use a web link for the src (e.g., https://example.com/pygmy.jpg).

Alt Text: "A pink, fluffy Pygmy Puff looking cute".

Title: "Best Seller!".

Width: Set to 200.

Shop Logo (Relative Path):

Embed the logo using a local path: src="images/weasley_logo.png".

Alt Text: "W logo".

Part 6: Owl Post (Links)
Set up the delivery network.

External Link: Create a link to "Gringotts Bank" (use https://google.com).

Ensure it opens in a new tab (target="\_blank") so customers don't leave the shop.

Email Link: Create a link with text "Complain to our Mother".

Set the href to mailto:molly@burrow.com.

Internal Navigation:

Add id="potions" to your "WonderWitch Collection" list <ul>.

At the top of the page, add a link "Jump to Love Potions" that points to #potions.

✅ Checklist for Success
Mischief Managed? Check your work.

[ ] Is the main header purple and centered?

[ ] Did you use <del> for the old price and <ins> for the new price?

[ ] Are the "Fainting Fancies" instructions in an Ordered List (1, 2, 3)?

[ ] Does the Description List (<dl>) correctly pair items (<dt>) with definitions (<dd>)?

[ ] Does the Pygmy Puff image include alt text and a title?

[ ] Does the "Gringotts" link open in a new tab?

[ ] Does the "Complain" link open an email draft?
