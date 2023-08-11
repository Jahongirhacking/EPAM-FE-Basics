const path = require('path');
const { HtmlValidate } = require('html-validate');

const htmlValidateConfig = require('../test-utils/htmlValidateConfig.json');
const { readTextFile } = require('../test-utils/readTextFile');
const { normalizeStringForTest } = require('../test-utils/normalizeStringForTest');

const { JSDOM } = require('jsdom');

describe('Accessibility fundamentals and HTML semantic', () => {
    let htmlString;

    let dom;
    let document;

    beforeEach(async () => {
        const filePath = path.join(__dirname, 'index.html');
        htmlString = await readTextFile(filePath);

        dom = new JSDOM(htmlString);
        document = dom.window.document;
    });

    it('html page should be valid', () => {
        const htmlvalidate = new HtmlValidate();
        const report = htmlvalidate.validateString(htmlString, htmlValidateConfig);
        
        expect(report).toEqual(expect.objectContaining({ valid: true }));
    });

    describe('semantic tags', () => {
        it('should replace <div id="header"> with <header> tag', () => {
            expect(document.querySelector('body > div#header')).toBeNull();
            expect(document.querySelector('body > header')).not.toBeNull();
        });

        it('should replace <div id="menu"> with <nav> tag', () => {
            expect(document.querySelector('div#menu')).toBeNull();
            expect('body > header > nav').not.toBeNull();
        });

        it('should replace <div id="main"> with <main> tag', () => {
            expect(document.querySelector('div#main')).toBeNull();
            expect(document.querySelector('body > main')).not.toBeNull();
        });

        it('should replace <div class="article"> with <article> tag', () => {
            expect(document.querySelector('div.article')).toBeNull();
            expect(document.querySelector('body > main > article')).not.toBeNull();
        });

        it('should replace <div id="footer"> with <footer> tag', () => {
            expect(document.querySelector('div#footer')).toBeNull();
            expect(document.querySelector('body > footer')).not.toBeNull();
        });

        it('should replace <div id="sidebar"> with <aside> tag', () => {
            expect(document.querySelector('div#sidebar')).toBeNull();
            expect(document.querySelector('body > aside')).not.toBeNull();
        });

        it('should replace all <div class="section"> with <section> tag', () => {
            expect(document.querySelectorAll('div.section').length).toBe(0);
            expect(document.querySelectorAll('body > main > article section').length).toBe(4);
        });
    });

    describe('<figure>', () => {
        let figure, image, figcaption;

        beforeEach(() => {
            figure = document.querySelector('body > main > article section > div#page_layouts > figure');
            image = figure.querySelector('img');
            figcaption = figure.querySelector('img ~ figcaption');
        });

        it('should add <figure> tag into proper section', () => {
            expect(figure).not.toBeNull();
        });

        it('should add <img> tag into proper section', () => {
            expect(image).not.toBeNull();
        });

        it('should add proper source to <img> tag', () => {
            expect(normalizeStringForTest(image.src.replace('./', ''))).toBe('images/code-example.png');
        });

        it('should add alt attribute to <img>', () => {
            expect(normalizeStringForTest(image.alt)).toBe('modern website structure example');
        });

        it('should add <figcaption> tag after <img> tag', () => {
            expect(figcaption).not.toBeNull();
        });

        it('should add proper text in <figcaption>', () => {
            expect(normalizeStringForTest(figcaption.textContent)).toBe('modern website structure example');
        });
    });

    describe('headings', () => {
        it('should leave only one <h1> tag on the page in header', () => {
            expect(document.querySelectorAll('h1').length).toBe(1);
            expect(normalizeStringForTest(document.querySelector('header > h1').textContent)).toBe('accessibility fundamentals and html semantic');
        });

        it('should show article header as <h2> tag', () => {
            expect(document.querySelectorAll('h2').length).toBe(1);
            expect(normalizeStringForTest(document.querySelector('main > article > h2').textContent)).toBe('html: a good basis for accessibility');
        });

        it('should show sections headers as <h3> tags', () => {
            expect(document.querySelectorAll('h3').length).toBe(2);
            expect(document.querySelectorAll('main > article > section > h3').length).toBe(2);
        });

        it('should show nested sections headers as <h4> tags', () => {
            expect(document.querySelectorAll('h4').length).toBe(2);
            expect(document.querySelectorAll('main > article > section > section > h4').length).toBe(2);
        });

        it('should not add other headers to the document', () => {
            expect(document.querySelectorAll('h5').length).toBe(0);
            expect(document.querySelectorAll('h6').length).toBe(0);
        })
    });

    describe('external links', () => {
        it('should add target attribute to all external links', () => {
            const externalLinks = [...document.querySelectorAll('a')].filter((link) => link.href.startsWith('http'));
            const targetAttributes = externalLinks.map((link) => link.target).filter((target) => target === '_blank');
            expect(targetAttributes.length).toEqual(externalLinks.length);
        })
    });

    describe('role attributes', () => {
        it('should leave all role="menu" in <nav>', () => {
            expect(document.querySelectorAll('header > nav ul[role="menu"]').length).toBe(2);
        });

        it('should leave all role="menuitem" in <nav>', () => {
            expect(document.querySelectorAll('header > nav li[role="menuitem"]').length).toBe(5);
        });

        it('should remove role attribute from <header>', () => {
            expect(document.querySelector('header').hasAttribute('role')).toBe(false);
        });

        it('should remove role attribute from <button>', () => {
            expect(document.querySelector('aside > button').hasAttribute('role')).toBe(false);
        });
    });
});
