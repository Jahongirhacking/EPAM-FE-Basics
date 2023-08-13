# HTML Text elements

## Add and edit HTML tags in the article about Apollo 11 mission.

## Before we start

1.This practical task is verified automatically with tests.
2.Please put all your `HTML` code in the `src/index.html` file. If you use any other file, we will not be able to verify it.
3. Please, don't change the page structure, it may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Add and update HTML tags in the text.

Please, note you should edit the `src/index.html` file. We can't verify your solution if you use a different file.

Don't change the overall page structure, it may break an automation check.

### You should add and edit:

1. **Headings**. Please, replace generic `<div>` elements with headings of the correct level.
    - `<h1>` should be used only once for the page heading.
    - Every `<article>` should have `<h2>` heading.
    - Every `<section>` should have `<h3>` heading.

2. **Lists**. Add HTML lists markup to the listed data. Please, use data that is already on the page.
    - In the `"Personnel"` article the `"Prime crew"` section should have an **ordered** list of all the crew members.
    - In the `"Personnel"` article the `"Backup crew"` section should have an **ordered** list of all the crew members.
    - In the `"Personnel"` article the `"Flight directors"` section should have an **unordered** list of all the flight directors who participated in the program.

3.  **Abbreviations, quotations, times, and dates.**
    - In the first `<p>` paragraph from the top (the one which starts with `"Apollo 11 (July 16–24, 1969) was the American spaceflight..."`) find the date and time: `July 20, 1969, at 20:17 UTC` and wrap it to the date-time tag with `datetime` attribute value: `1969-07-20T20:17:00.000Z`.
    - In the second `<p>` paragraph from the top (the one which starts with `"Apollo 11 was launched by a Saturn V rocket from Kennedy Space Center"`) wrap `NASA` text with an abbreviation tag with such text in the title attribute: `The National Aeronautics and Space Administration`.
    - In the `"Background"` `<article>` please, add a correct tag for a Kennedy quote. A quote starts with: `I believe that this nation should commit itself to achieving...` and ends with: `For all of us must work to put him there.`. Text `"Kennedy's speech to Congress"` - should be wrapped with `<cite>` tag.

4. **Emphasized, italic, superscript text**
    - In the third `<p>` paragraph from the top (the one which starts with `"Armstrong's first step onto the lunar surface..."`) find Armstrong's quote: `"one small step for [a] man, one giant leap for mankind."` and emphasize it by wrapping with `<em>` tag. Don't forget to include `"` at the start and at the end of the quote.
    - After Armstrong's quote find a link with text `[1]`. Make this link a superscript text by using the correct tag.
    - Make italic any 3 chunks of text on the page. Every text chunk should be at least 3 symbols long.
