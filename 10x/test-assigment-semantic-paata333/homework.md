თავიდან ბოლომდე წაიკითხეთ დავალება, რომ არაფერი გამოგრჩეთ!
  * **Mission Name:** 🕸️ **Mission: The Hunter Exam Digital Archive**
  * **Theme:** Hunter x Hunter (The Exam Arc)
  * **Difficulty:** Intermediate | **Tech Stack:** HTML5 (Fundamentals + Semantics)

-----


**Congratulations, Applicant \#405\!**

You have survived the physical trials of the Hunter Exam—the marathon through the wetlands, the cooking contest, and the tower of tricks. But Chairman Netero has one final secret phase: **The Intelligence Test.**

You must compile a **Digital Field Report** summarizing your journey. This report will be stored in the Hunter Association’s database. If the HTML structure is weak, the database will reject it, and you will **fail** the exam immediately.

Your report must recount the dangers you faced, list the allies you made, and present video evidence of your combat skills. Netero is watching. Make sure your tags are semantic, your links work, and your "Nen" (code structure) is flawless.

**Your Goal:** Build a complete HTML page representing your Exam Report.

-----

#### **Phase 1: The Foundation (Document Structure)**

Every Hunter needs a strong foundation (Ten).

1.  Create your file. Start with the standard `<!DOCTYPE html>` declaration.
2.  Open your `<html>` tag and include the `<head>` and `<body>`.
3.  In the `<head>`, add a `<title>`: **Hunter Exam Report: [Your Name]**.

#### **Phase 2: Defining the Territories (Semantic Layout)**

We need to map out the zones of the document using Semantic Tags.

1.  Inside the `<body>`, create a `<header>`.
      * Inside it, add an `<h1>` with the text: **"Official Hunter Exam Report"**.
2.  Below the header, create a `<nav>` for your Hunter Compass.
      * Add three anchor `<a>` links pointing to internal IDs: `#bio`, `#inventory`, and `#evidence`.
3.  Create a `<main>` tag to hold the bulk of your journey.
4.  Create an `<aside>` tag insidethe main tag. This represents in `h2` "Hisoka's Secret Notes", add inside `<p>` "Hisoka's secret notes are hidden in the aside tag".
5.  At the bottom, add a `<footer>`.

#### **Phase 3: The Candidate Profile (Formatting & Attributes)**

Inside the `<main>` tag, let's detail who you are.

1.  Create a `<section>` with the `id="bio"`. Add an `<h2>` titled **"Applicant Profile"**.
2.  Add a `<p>` paragraph tags for each of your information describing yourself. You must use the following **formatting tags** to emphasize your traits:
      * Use `<b>` or `<strong>` for your **Name**.
      * Use `<i>` or `<em>` for your *Hunter Type* (e.g., Rookie).
      * Use `<mark>` to highlight your **Nen Category** (e.g., Enhancer).
      * Use `<del>` to cross out a weakness you have overcome (e.g., \~\~Fear of needles\~\~).
      * Use `<sub>` to show your chemical makeup: **Adrenaline\<sub\>C9H13NO3\</sub\>**.
      * Use `<sup>` to show your power level: **Power Level: 9000\<sup\>+\</sup\>**.

#### **Phase 4: The Survival Backpack (Lists)**

You can't survive the Dark Continent without supplies.

1.  Create a new `<section>` with `id="inventory"`.
2.  **Unordered List:** Create a `<ul>` listing 3 items you brought (e.g., Fishing Rod, Skateboard, Medicine).
3.  **Ordered List:** Create an `<ol>` listing the 3 stages of the Exam you passed (e.g., 1. The Run, 2. The Cooking, 3. The Tower).
4.  **Description List:** Create a `<dl>` to explain Nen concepts.
      * `<dt>` **Ten** `</dt>` -\> `<dd>` Shroud your aura. `</dd>`
      * `<dt>` **Ren** `</dt>` -\> `<dd>` Project your aura. `</dd>`

#### **Phase 5: Connecting the World (Links & Anchors)**

A Hunter must be connected.

1.  Inside your `<nav>` (created in Phase 2), ensure your links successfully jump to the sections you just created (`#bio`, `#inventory`).
2.  In the `<footer>`, add a link `<a>` to the "Hunter Association" (use `https://hunterxhunter.fandom.com` or any URL).
      * **Crucial:** Add `target="_blank"` so it opens in a new tab (we don't want to lose your report\!).
3.  Add a "Contact the Chairman" link using `href="mailto:netero@hunter.org"`.

#### **Phase 6: Visual Evidence (Images & Paths)**

Netero needs proof.

1.  In the `#bio` section, add an `<img>` of your Image(because its your bio) or any image(use a relative path like `images/gon.jpg`).
      * Add `alt="Applicant Face"` and a `title="Applicant #405"`.
      * Set `width="250"` and `height="250"`.
2.  **Image Link:** Wrap the image in an `<a>` tag so that clicking your face takes the user to the top of the page (`#`).

#### **Phase 7: The Tapes (Multimedia)**

Upload the recordings of your fights.

1.  Create a final `<section>` with `id="evidence"` with the title `<h2>` "Evidence".
2.  **Audio:** Add an `<audio>` tag with `controls`. (Assume you have a file named `heartbeat.mp3`).
3.  **Video:** Add a `<video>` tag with `controls`, `width="300"`. (Assume a file named `exam_fight.mp4`).
4.  **YouTube:** Embed an `<iframe>` of a Hunter x Hunter opening or fight scene from YouTube or use link below.
   `<iframe width="560" height="315" src="https://www.youtube.com/embed/faqmNf_fZlE?si=VhihdOp4hZ_lp8iD"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      * Include the `allowfullscreen` attribute.

#### **Phase 8: Zetsu & Runes (Comments, Entities)**

Finally, polish the code structure.

1.  **Comments:** In the code, add a comment \`\` anywhere in the body.
2.  **Entities:** In the `<footer>`, add the Copyright symbol `&copy;` 2025 and the Hunter Star `&starf;`.

-----

### 4\. ✅ Checklist for Success

**Fundamentals:**

  * [ ] Is the HTML skeleton correct (`<html>`, `<head>`, `<body>`)?
  * [ ] Are all 6 formatting tags used (`<b>`, `<i>`, `<mark>`, `<del>`, `<sub>`, `<sup>`)?
  * [ ] Did you include all three list types (`<ul>`, `<ol>`, `<dl>`)?
  * [ ] Does the External Link open in a new tab (`target="_blank"`)?
  * [ ] Is there a working Email link (`mailto:`)?
  * [ ] Are images included with `alt` text?
  * [ ] Is there an Image that acts as a Link?
  * [ ] Are Audio, Video, and Iframe tags present?

**Structure & Semantics:**

  * [ ] Did you use `<header>`, `<nav>`, `<main>`, and `<footer>`?
  * [ ] Are the sections clearly defined with `<section>` or `<article>`?
  * [ ] Is there a hidden HTML Comment?
  * [ ] Did you use HTML Entities (`&copy;`, `&starf;`) in the footer?

-----
 ***** AND FINALLY ***** 
 `add this line below inside teg <head> under <title>`

`<link rel="stylesheet" href="styles/styles.css">`

**Do You Like It? You Will Do Better Soon!**

**"You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want."**

