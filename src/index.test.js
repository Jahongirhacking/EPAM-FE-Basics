const path = require('path');
const { HtmlValidate } = require('html-validate');

const htmlValidateConfig = require('../test-utils/htmlValidateConfig.json');
const { readTextFile } = require('../test-utils/readTextFile');
const { normalizeStringForTest } = require('../test-utils/normalizeStringForTest');
const { getChildCommentNodesInElement } = require('../test-utils/getChildCommentNodesInElement');

const { JSDOM } = require('jsdom');

describe('Linking and Images', () => {
    let htmlString;

    let dom;
    let document;

    describe('src/index.html', () => {
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

        describe('<header>', () => {
            let header;
            let links;
            
            beforeEach(() => {
                header = document.querySelector('body > header');
                links = header.querySelectorAll('nav > ul > li > a');
            });

            it('should have nav tag in the header', () => {
                const nav = header.querySelector('nav');

                expect(nav).not.toBeNull();
            });

            it('should have a list in the navigation menu', () => {
                const ul = header.querySelector('nav > ul');

                expect(ul).not.toBeNull();
            });

            it('links should be wrapped with list element tags', () => {
                expect(links.length >= 4).toBe(true);
            });

            describe('"Home" link', () => {
                let link;

                beforeEach(() => {
                    link = links[0];
                });

                it('should have "Home" title', () => {
                    const linkText = link.textContent.trim();

                    expect(linkText).toBe('Home');
                });

                it('should have "index.html" as an address', () => {
                    const linkHref = link.href;

                    expect(linkHref).toBe('index.html');
                });
            });

            describe('"About" link', () => {
                let link;

                beforeEach(() => {
                    link = links[1];
                });

                it('should have "About" title', () => {
                    const linkText = link.textContent.trim();

                    expect(linkText).toBe('About');
                });

                it('should use anchor to the page element with id="about" as an address', () => {
                    const linkHref = link.href;

                    expect(linkHref).toBe('about:blank#about');
                });
            });

            describe('"Gallery" link', () => {
                let link;

                beforeEach(() => {
                    link = links[2];
                });

                it('should have "Gallery" title', () => {
                    const linkText = link.textContent.trim();

                    expect(linkText).toBe('Gallery');
                });

                it('should have "gallery.html" as an address', () => {
                    const linkHref = link.href;

                    expect(linkHref).toBe('gallery.html');
                });
            });

            describe('"Help" link', () => {
                let link;

                beforeEach(() => {
                    link = links[3];
                });

                it('should have "Help" title', () => {
                    const linkText = link.textContent.trim();

                    expect(linkText).toBe('Help');
                });

                it('should have "https://www.w3.org/" as an address', () => {
                    const linkHref = link.href;

                    expect(linkHref).toBe('https://www.w3.org/');
                });

                it('should open in the new tab', () => {
                    const target = link.target;

                    expect(target).toBe('_blank');
                });
            });
        });
    });

    describe('src/gallery.html', () => {
        beforeEach(async () => {
            const filePath = path.join(__dirname, 'gallery.html');
            htmlString = await readTextFile(filePath);
    
            dom = new JSDOM(htmlString);
            document = dom.window.document;
        });

        it('html page should be valid', () => {
            const htmlvalidate = new HtmlValidate();
            const report = htmlvalidate.validateString(htmlString, htmlValidateConfig);
            
            expect(report).toEqual(expect.objectContaining({ valid: true }));
        });

        describe('<picture>', () => {
            let picture;
            let sources;
            
            beforeEach(() => {
                picture = document.querySelector('body > main > #picture > picture');

                sources = Array.from(picture.querySelectorAll('source'));
            });

            it('should have <picture> inside div with id="picture"', () => {
                expect(picture).not.toBeNull();
            });

            describe('if screen width is <= 480px', () => {
                it('the `img/pic1.jpg` should be shown', () => {
                    const source = sources
                        .find((item) => item.media.trim() === '(max-width: 480px)');

                    expect(source.srcset).toBe('img/pic1.jpg');
                });
            });

            describe('if screen width is <= 780px', () => {
                it('the `img/pic2.jpg` should be shown', () => {
                    const source = sources
                        .find((item) => item.media.trim() === '(max-width: 780px)');

                    expect(source.srcset).toBe('img/pic2.jpg');
                });
            });

            describe('if screen width is <= 1024px', () => {
                it('the `img/pic3.jpg` should be shown', () => {
                    const source = sources
                        .find((item) => item.media.trim() === '(max-width: 1024px)');

                    expect(source.srcset).toBe('img/pic3.jpg');
                });
            });

            describe('default image', () => {
                let img;

                beforeEach(() => {
                    img = picture.querySelector('img');
                });

                it('should be img/pic4.jpg', () => {
                    expect(img.src).toBe('img/pic4.jpg');
                });

                it('have an alternative text', () => {
                    expect(img.alt.trim()).toBe('Beauty of Nature');
                });
            });
        });
    });
});
