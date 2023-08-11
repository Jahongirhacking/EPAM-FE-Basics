# Linking and Images

## Creating Menu and adding Images

## Before we start

1.	This practical task is verified automatically with tests.
2.	Please put all your `HTML` code in the `src/index.html` and `src/gallery.html` file. If you use any other file, we will not be able to verify it.
3. Please, don't change the page structure, it may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

This task consists of two parts. In the first part, you will try your hand at linking web pages by creating a navigation menu. In the second part, you will add to the page an image that responds to screen size. 

Please note that there are specific requirements for structure and content. 

### 1. Create Navigation menu

**In the `src/index.html` file:**
    - Add the navigation menu to the `header` tag.
        - The menu should consist of the four items listed below:
            - Title: `Home`, link address: `index.html`
            - Title: `About`, link address: anchor to the page element with `id="about"` 
            - Title: `Gallery`, link address: `gallery.html`
            - Title: `Help`, link address: `https://www.w3.org/`, **opens in the new tab** 
    - The menu items should not be numbered. 
    - **The order of the links is important**; the menu will not pass testing if the order is different from the one above. 

### 2. Add a responsive image

**In the `src/gallery.html` file:**
    - Using the `picture` tag, add the image to the `div` element with the attribute `id="picture"` 
    - The image should have the alternative text `Beauty of Nature`. 
    - Depending on the screen size, the page should display the proper images from the `src/img` folder:  
        - If the screen width is `<= 480px`, the `img/pic1.jpg` should be displayed. 
        - If the screen width is `<= 780px`, the `img/pic2.jpg` should be displayed. 
        - If the screen width is `<= 1024px`, the `img/pic3.jpg` should be displayed. 
        - The default image should be `img/pic4.jpg` with the alternative text `Beauty of Nature`. 
