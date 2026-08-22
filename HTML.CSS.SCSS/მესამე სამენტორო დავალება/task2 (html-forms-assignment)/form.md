The Scenario
You have just been hired as a Junior Frontend Developer at "TechHire," a recruitment agency. The design team has asked you to build the HTML structure for their new Candidate Application Page.

Step 1: Project Setup
Create a new folder named html-forms-assignment.

Inside, create an index.html file.

Set up your standard HTML5 boilerplate (! + Tab in VS Code).

Inside the <body>, add a main Heading (<h1>) that says "Job Application Form".

Step 2: The Form Container
Create a <form> element.

Requirement: Since this form handles file uploads (resumes), you must add the correct enctype attribute: enctype="multipart/form-data".

Set the method to POST.

Step 3: Personal Details (Text Inputs)
Grouping: Use a <fieldset> tag to group these inputs.

Legend: Add a <legend> with the text "Personal Details".

Fields required:

Full Name: Standard text input.

Email: Use the specific input type for emails (this helps mobile phones show the @ key). Make this field required.

Phone: Use the tel input type.

💡 Pro Tip: Every input needs a <label>. Do not just type text next to a box. Link them using the for="id" attribute on the label and id="id" on the input.

Step 4: Job Preferences (Select & Radio)
Create a new <fieldset> with the legend "Job Details".

Role Selection: Create a dropdown menu (<select>) labeled "Position Applied For".

Options: Frontend Dev, Backend Dev, Full Stack Dev.

Experience Level: Create a set of Radio Buttons.

Options: Junior, Mid-Level, Senior.

Critical: Ensure a user can only select one option. (Hint: Check the name attribute).

Step 5: Skills Assessment (Checkboxes)
Create a new <fieldset> with the legend "Skills".

Create Checkboxes for at least 4 different technologies (e.g., HTML, CSS, JS, Python, React).

Requirement: Users should be able to check as many as they want.

Step 6: Documents & Final touches
Create a final section (no fieldset needed, or optional).

Resume Upload: Add an input that accepts files. Restrict it to only accept PDF files if you can!

Cover Letter: Add a <textarea> for users to write a message. Give it a default height of 5 rows.

Submission: Add a <button> with the type submit labeled "Send Application".

✅ Self-Check Checklist
Before submitting, test your code against these rules:

[ ] Can I click on the text "Full Name" and see the cursor jump into the input box? (If not, your labels are broken).

[ ] When I select "Junior," does "Mid-Level" automatically uncheck? (If not, your radio button name attributes are wrong).

[ ] Is the email field preventing me from submitting if I don't type an email?

[ ] Is the code indented properly?

🚀 Bonus Challenge (Optional)
If you finish early:

Add a placeholder to the phone number field to show the required format (e.g., +995-555-00-00).

Use the value attribute on the submit button to change the text to "Apply Now".

Add a "Terms and Conditions" checkbox at the bottom that must be checked before the form can be submitted (Hint: use the required attribute).
