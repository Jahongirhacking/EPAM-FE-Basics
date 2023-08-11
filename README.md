# Accessibility fundamentals and HTML semantic

## Change old-fashioned layout to create fancy landing and meet best practice of accessibility approach

## Before we start

1.	This practical task is verified automatically with tests.
2.	Please put all your `HTML` code in the `src/index.html` and `src/gallery.html` file. If you use any other file, we will not be able to verify it.
3. Please, don't change the page structure, it may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Replace non-semantic elements with proper semantic tags to make your web page more sophisticated. 

Please note you should edit the `src/index.html` file. Your solution cannot be verified if you use a different file. 


### Please, make next changes on this page:

1. **Replace the non-semantic tags with semantic tags. You may remove the id from each updated element after you finish, but you should leave all the other attributes (if there are any) as they are**
    - Replace `<div id="header">` with the proper semantic element. Don't remove the additional class from the element
    - Replace `<div id="menu">` with the proper semantic element. Don't remove the additional class from the element
    - Replace `<div id="main">` with the proper semantic element
    - Replace all instance of `<div class="section">` with the proper semantic elements
    - Replace `<div class="article">` with the proper semantic element
    - Replace `<div id="footer">` with the proper semantic element
    - Replace the sidebar (`<div id="sidebar">`) with the proper semantic element
2. **Add an image to `<div id="page_layouts>`"**
    - Use the `<figure>` element to encapsulate the image
    - The image source should be `./images/code-example.PNG`
    - Add an alt attribute with the image description `Modern website structure example`
    - Add an image description with the `<figcaption>` tag. Image description should be `Modern website structure example`
    - The image should be placed under the comment line in `<div id="page_layouts>`
3. **Fix the headings on the page:**
    - There should be only one `<h1>` element on the page: the article name in the page header. Replace other the`<h1>` headings with `<h2>`, `<h3>`, and `<h4>`
    - Please don't change text in the headings
4. **Update external links (http, https) so that they open in a new tab:**
    - Use the `target` attribute
    - There should be 3 updates
5. **Remove the redundant role attributes:**
    - There should be 2 delitions
