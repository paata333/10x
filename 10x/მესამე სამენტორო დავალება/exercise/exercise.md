# HTML Step-by-Step Guide: The "Future Tech" Conference

## The Scenario
You have just been hired as a Web Developer at "FutureWeb Agency." The event organizers for "Future Tech 2025" need a modern landing page structure to announce their conference.
Your task is to build the semantic HTML skeleton for the page.

## Step 1: Project Setup
Create a new file named [index.html]

Inside, set up your standard HTML5 boilerplate.
*   **Tip**: If you are using VS Code, type `!` and hit `Tab`.

**Requirement**:
*   Set the `lang` attribute in the `<html>` tag to "en" or "ka".
*   Inside `<head>`, change the `<title>` to **"Future Tech 2025"**.

**Connecting the Design**:
We need to link our HTML to the CSS file and import a cool font (Inter) from Google.
Inside `<head>`, add these lines:
1.  **CSS Link**:
    ```html
    <link rel="stylesheet" href="style.css">
    ```
2.  **Fonts**:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    ```

## Step 2: The Header (Navigation)
We need a top bar that allows users to travel around the page.

1.  Inside `<body>`, create a `<header>` element.
2.  Inside the header, create a `<div>` with the class `logo` and the text **"FUTURE TECH"**.
3.  Create a `<nav>` element for navigation.
4.  Inside the nav, create an unordered list (`<ul>`).
5.  Add 3 list items (`<li>`), each containing an anchor link (`<a href="...">`):
    *   Home (`#home`)
    *   Schedule (`#schedule`)
    *   Register (`#register`)

## Step 3: Main Content & Hero Section
We need a container for the page's unique content.

1.  Create a `<div class="container">` wrapper.
2.  Inside it, create a `<main>` element.

**The Hero Section**:
1.  Inside `<main>`, create a `<section>` with `id="home"`.
2.  Add an `<h1>` heading: **"The Future Starts Here"**.
3.  Add a `<p>` tag with a short welcoming description.
4.  Group 3 key stats (e.g., "50+ Speakers") using `<div>` or `<span>` tags.

## Step 4: The Schedule (Tables)
The organizers provided a timetable. We need to display it structured.

1.  Create a new `<section>` with `id="schedule"`.
2.  Add an `<h2>` heading: **"Event Schedule"**.
3.  Create a `<table>` element.
    *   **Heads Up**: Use `<thead>` for the top row (headers) and `<tbody>` for the data rows.
4.  In `<thead>`, create a row (`<tr>`) with 4 headers (`<th>`): **Time, Topic, Speaker, Hall**.
5.  In `<tbody>`, add at least 3 rows (`<tr>`) with data cells (`<td>`) filling in the details.

## Step 5: Registration (Forms)
They need to collect attendee information.

1.  Create a new `<section>` with `id="register"`.
2.  Add an `<h2>` heading: **"Register Now"**.
3.  Create a `<form>` element.
4.  **Fields Required**:
    *   **Name**: `<input type="text">` (Required).
    *   **Email**: `<input type="email">` (Crucial for validation).
    *   **Ticket Type**: A `<select>` dropdown with options (Standard, VIP).
    *   **Interests**: A group of Checkboxes (`<input type="checkbox">`) for topics like AI or Web.
    *   **Message**: A `<textarea>` for comments.
5.  **Submission**: Add a `<button type="submit">` labeled **"Sign Up"**.

## Step 6: Sidebar & Footer
Finally, let's wrap up logically.

**The Sidebar**:
1.  Go outside `<main>`, but stay inside `.container`.
2.  Create an `<aside>` element.
3.  Add a small widget (like a "News" or "Sponsors" list) using `<h3>` and `<ul>`.

**The Footer**:
1.  Go outside `.container`.
2.  Create a `<footer>` element.
3.  Add a copyright notice (`<p>`) and links to social media.

## ✅ Self-Check Checklist
Before submitting, test your code against these rules:

- [ ] Does clicking "Home" in the nav scroll you to the Hero section? (Check your `href="#home"` vs `id="home"`).
- [ ] Is there only **one** `<h1>` tag on the entire page?
- [ ] Do all your form inputs have a corresponding `<label>` linked by `for` and `id`?
- [ ] Did you use `<th>` for table headers and `<td>` for the body cells?
- [ ] Is the code indented properly?

## 🚀 Bonus Challenge (Optional)
If you finish early:
1.  Add a `<tfoot>` to your table with a note like "* Schedule subject to change".
2.  Add a `placeholder` attribute to your text inputs to give users a hint.
3.  Group your form inputs visually using `<div>` wrappers (e.g., `<div class="form-group">`).
