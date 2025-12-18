The protagonist of the animation is fading away, transforming into nature elements—rain, snow, and memories. The original reel is degrading. The Great Animator has tasked you, a Digital Archivist, to preserve this story in the only format that lasts forever: The Web.

You must build the "Memory Canvas" (a webpage). You need to structure the lyrics so they carry emotion, list the transformations so they aren't lost, and embed the original melody so the song never ends. If you fail, the rain stops falling, and the memory vanishes.

Constraints:

You must use Semantic HTML (meaningful tags).

Your code must be clean; the Archivist does not tolerate messy indentation.

🔨 The Mission Walkthrough
Part 1: Constructing the Canvas (Structure)
Every memory needs a container. Create your main file index.html.

Initialize the document with <!DOCTYPE html> and your root <html> tag.

In the <head>, give your page a <title>: "I Turned Into Rain - A Tribute".

Open the <body>. This is where the animation comes to life.

Part 2: The Title of Longing (Headings & Text)
The audience needs to know what story they are witnessing.

Create a main header <h1> with the text: "Tsvimad gadaviketsi".

Add a subtitle <h3> with the text: "A Story of Transformation".

Use a <hr> (horizontal rule) to separate the title from the story—representing the horizon line.

Part 3: Transcribing the Emotions (Formatting)
The lyrics are not just plain text; they have feelings. You must code the nuances using Text Formatting tags.

Create a paragraph <p> for the first verse.

Wrap the phrase "I turned into rain" in <b> or <strong> tags. It is the core truth.

Wrap the phrase "I am waiting for you" in <i> or <em> tags. It is a whispered thought.

Add a sentence: "I will not disappear." Use the <mark> tag on "not" to highlight the determination.

Part 4: The Cycle of Nature (Lists)
The character transforms into many things. We need an Unordered List to track these forms so the user can see them clearly.

Create a <ul> (Unordered List).

Add <li> items for each form:

Rain 🌧️

Snow ❄️

Tears 💧

Memories

Bonus: Create an <ol> (Ordered List) representing the timeline: 1. Leaving, 2. Transforming, 3. Waiting.

Part 5: The Visual Echo (Images & Attributes)
A memory is nothing without a picture.

Find an image URL that represents rain or a sad cartoon character (or use link like https://i1.sndcdn.com/artworks-A9tgQai8jznzIXWs-8RzrFQ-t500x500.jpg).

Insert it using the <img> tag.

CRITICAL: You must include the alt attribute describing the scene (e.g., alt="Sad character"). This is for the "Blind Oracles" (Screen Readers) to understand the story.

Set the width attribute to 400 so it doesn't take up the whole screen.

Part 6: The Eternal Melody (Multimedia & Iframes)
The song must play for the user.

The Portal: Use an <iframe> to embed the YouTube video you provided.

Source (src): https://youtu.be/cYromVOQMn0?si=KfDr5bzoWIInkQxX (Note: Use the embed link, not the watch link).

Set the width to 560 and height to 315.

Add the title attribute: "tsvimad gadaviketsi".

The Link Back: Create an anchor tag <a> at the bottom.

Text: "Watch on YouTube".

href: Point it to the original link (https://www.youtube.com/watch?v=cYromVOQMn0).

target: Set it to `_blank` so it opens in a new tab (leaving your memory canvas open).

✅ Checklist for Success
Mark these off as you code to ensure the memory is preserved:

[ ] Does the page have a valid <html>, <head>, and <body> structure?

[ ] Is the title "Tsvimad gadaviketsi" displayed as the largest heading (<h1>)?

[ ] Are the lyrics formatted with <b> (Bold) and <i> (Italic) to show emotion?

[ ] Is there a bulleted list (<ul>) showing the different transformations (Rain, Snow, etc.)?

[ ] Does the <img> tag have a working src and a descriptive alt text?

... (4 lines left)