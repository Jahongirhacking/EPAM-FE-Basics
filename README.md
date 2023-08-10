# Introduction to HTML

## Create an HTML page with your CV(Resume)

## Before we start

1.	This practical task is verified automatically with tests.
2.	Please put all your `HTML` code in the `src/index.html` file. If you use any other file, we will not be able to verify it.


## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Create a simple HTML page with basic information about yourself (aka a `CV` or `resume`).

A `CV` (curriculum vitae) or `resume` is a short, written summary of a person's career, qualifications, and education. In the description, we will use the term CV for simplicity. You can find more details here:  [Curriculum vitae Wikipedia](https://en.wikipedia.org/wiki/Curriculum_vitae).

In this task, you are to create a web version of your CV—in other words, a simple HTML page about you and your skills. However, it must be structured according to the requirements below.

### This page must have:
1.	HTML5 `Doctype`
2.	A root `HTML` tag with a language attribute with `"en-US"` value and `dir` attribute with `ltr` value.
3.	A `head` tag with:
    - A `title` tag with the text `"Web CV - YOUR FULL NAME"`. For example: `"Web CV - John Doe"`
    - A `meta` tag with `UTF-8` encoding
    - A `link` tag for adding a `favicon` of the type `"image/x-icon"` and href `"images/favicon.ico"`.
4.	A `body` tag with all the required content
    - A comment at the top with the text `"This page is created for the 'Introduction to HTML' training course."`
    - A `header` tag with: 
        A `level 1 heading` with the text `"Web CV - YOUR FULL NAME"` (The text in `h1` should be the same as in the `title` tag in the `head`.)
        An `aside` tag with a `level 2 heading` with the text `"Phone number"` and a `paragraph` tag after the heading with phone number in it (You can use your real number or any other number, but it must have at least five numbers to pass the test.)
    - A `main` tag with the main part of your CV containing three `section` tags with l`evel 2 headings` inside *(**Please note that the order of these sections is important**. It will be checked in the tests.) 
        - A summary `section` with the text "Summary" in the heading and two paragraphs with the appropriate `paragraph` tag about you in general (Each `paragraph` should have at least 10 characters, including spaces. However, spaces at the beginning and the end do not count.)
        - An education `section` with the text "Education" in the heading and two paragraphs with the appropriate `paragraph` tag about your education (Each `paragraph` should have at least 10 characters, including spaces.)
        - A work experience `section` with the text "Work Experience" in the heading and one `paragraph` with the appropriate `paragrap`h tag about your work experience (If you don't have any work experience, please use the text "None" for the content of this paragraph.)
    - A `footer` tag with a paragraph inside it with the text `"© My Copyright"`

