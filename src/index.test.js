const path = require('path');
const { HtmlValidate } = require('html-validate');

const htmlValidateConfig = require('../test-utils/htmlValidateConfig.json');
const { readTextFile } = require('../test-utils/readTextFile');
const { normalizeStringForTest } = require('../test-utils/normalizeStringForTest');
const { getChildCommentNodesInElement } = require('../test-utils/getChildCommentNodesInElement');

const { JSDOM } = require('jsdom');

describe('Introduction to HTML', () => {
    let indexHtmlString;

    let dom;
    let document;

    let expectedCommentText;

    beforeEach(async () => {
        expectedCommentText = 'This page is created for "Introduction to HTML" training course.';
        const filePath = path.join(__dirname, 'index.html');
        indexHtmlString = await readTextFile(filePath);

        dom = new JSDOM(indexHtmlString);
        document = dom.window.document;
    });

    describe('HTML page', () => {
        it('should be valid and include Doctype', () => {
            const htmlvalidate = new HtmlValidate();
            const report = htmlvalidate.validateString(indexHtmlString, htmlValidateConfig);
            
            expect(report).toEqual(expect.objectContaining({ valid: true }));
        });

        describe('<html>', () => {
            let html;

            beforeEach(() => {
                html = document.querySelector('html');
            });

            it('<html> tag should have lang attribute with "en-US" inside', () => {
                const charsetAttributeValue = html.getAttribute('lang');
    
                expect(charsetAttributeValue).toBe('en-US');
            });
    
            it('<html> tag should have dir attribute with "ltr" inside', () => {
                const charsetAttributeValue = html.getAttribute('dir');
        
                expect(charsetAttributeValue).toBe('ltr');
            });
        });

        describe('<body>', () => {
            it(`should have comment with the text: 
                'This page is created for "Introduction to HTML" training course." training course.'`, () => {
                const body = document.querySelector('body');
                const commentNodes = getChildCommentNodesInElement(body);
                const firstCommentNode = commentNodes[0];
                const commentText = firstCommentNode ? 
                    firstCommentNode.textContent.trim() : '';

                expect(commentText).toBe(expectedCommentText);
            });
        });

        describe('<head>', () => {
            let head;

            beforeEach(() => {
                head = document.querySelector('head');
            });

            it('should have "Web CV - YOUR FULL NAME" title', () => {
                const titleLowerCased = document.title.toLowerCase();

                expect(titleLowerCased.startsWith('web cv - '))
                    .toEqual(true)
            });

            it('should have meta tag with "UTF-8" encoding', () => {
                const meta = head.querySelector('meta');
                const charsetAttributeValue = meta.getAttribute('charset');
        
                expect(charsetAttributeValue).toBe('UTF-8');
            });

            it('should have a link tag with an "favicon"', async () => {
                const link = head.querySelector('link[rel=icon]');

                const type = link.getAttribute('type');
                const href = link.getAttribute('href');
    
                const linkAttributes = { type, href };
        
                expect(linkAttributes).toEqual({
                    type: 'image/x-icon',
                    href: 'images/favicon.ico'
                });
            });
        });
    
        describe('<header>', () => {
            let header;
            
            beforeEach(() => {
                header = document.querySelector('body > header');
            });

            it('should have "Web CV - YOUR FULL NAME" level 1 heading', () => {
                const h1 = header.querySelector('h1');
        
                const h1InnerText = h1.textContent;
                const h1InnerTextNormalized = normalizeStringForTest(h1InnerText);
        
                expect(h1InnerTextNormalized.startsWith('web cv -')).toBe(true);
            });

            it('should have aside level 2 heading with "Phone number" text', () => {
                const h2 = header.querySelector('aside > h2');
        
                const h2InnerText = h2.textContent;
                const h2InnerTextNormalized = normalizeStringForTest(h2InnerText);
        
                expect(h2InnerTextNormalized).toBe('phone number');
            });

            it('should have a paragraph inside aside with a number with at least 5 characters', () => {
                const p = header.querySelector('aside > p');
        
                const pInnerText = p.textContent;
                const pInnerTextNormalized = normalizeStringForTest(pInnerText);
        
                expect(pInnerTextNormalized.length >= 5).toBe(true);
            });
        });

        describe('<main>', () => {
            let main;
            let h2s;
            let sections;

            beforeEach(() => {
                main = document.querySelector('body > main');
                h2s = main.querySelectorAll('section > h2');
                sections = main.querySelectorAll('section');
            });

            describe('"Summary" section', () => {
                it('should have a level 2 heading with "Summary" text', () => {
                    const h2 = h2s[0];
            
                    const h2InnerText = h2.textContent;
                    const h2InnerTextTrimmed = h2InnerText.trim();
            
                    expect(h2InnerTextTrimmed).toBe('Summary');
                });

                it('should have the first paragraph with at least 10m characters of text', () => {
                    const section = sections[0];

                    const paragraphs = section.querySelectorAll('p');
                    const p = paragraphs[0]; // the first p

                    const pInnerText = p.textContent;

                    const pInnerTextTrimmed = pInnerText.trim();
                
                    expect(pInnerTextTrimmed.length >= 10).toBe(true);
                });

                it('should have the seconds paragraph with at least 10m characters of text', () => {
                    const section = sections[0];

                    const paragraphs = section.querySelectorAll('p');
                    const p = paragraphs[1]; // the second p

                    const pInnerText = p.textContent;

                    const pInnerTextTrimmed = pInnerText.trim();
                
                    expect(pInnerTextTrimmed.length >= 10).toBe(true);
                });
            });

            describe('"Education" section', () => {
                it('should have a level 2 heading with "Education" text', () => {
                    const h2 = h2s[1];
            
                    const h2InnerText = h2.textContent;
                    const h2InnerTextTrimmed = h2InnerText.trim();
            
                    expect(h2InnerTextTrimmed).toBe('Education');
                });

                it('should have the first paragraph with at least 10m characters of text', () => {
                    const section = sections[1];

                    const paragraphs = section.querySelectorAll('p');
                    const p = paragraphs[0]; // the first p

                    const pInnerText = p.textContent;

                    const pInnerTextTrimmed = pInnerText.trim();
                
                    expect(pInnerTextTrimmed.length >= 10).toBe(true);
                });

                it('should have the seconds paragraph with at least 10m characters of text', () => {
                    const section = sections[1];

                    const paragraphs = section.querySelectorAll('p');
                    const p = paragraphs[1]; // the second p

                    const pInnerText = p.textContent;

                    const pInnerTextTrimmed = pInnerText.trim();
                
                    expect(pInnerTextTrimmed.length >= 10).toBe(true);
                });
            });

            describe('"Work Experience" section', () => {
                it('should have a level 2 heading with "Work Experience" text', () => {
                    const h2 = h2s[2];
            
                    const h2InnerText = h2.textContent;
                    const h2InnerTextTrimmed = h2InnerText.trim();
            
                    expect(h2InnerTextTrimmed).toBe('Work Experience');
                });

                it('should have the first paragraph with at least 10 characters or none of text', () => {
                    const section = sections[2];

                    const paragraphs = section.querySelectorAll('p');
                    const p = paragraphs[0]; // the first p

                    const pInnerText = p.textContent;

                    const pInnerTextTrimmed = pInnerText.trim();
                    const isValidContent = pInnerTextTrimmed.length >= 10 || 
                        pInnerTextTrimmed === 'None';
                
                    expect(isValidContent).toBe(true);
                });
            });
        });

        describe('<footer>', () => {
            it('should have a level 2 heading with "Summary" text', () => {
                const p = document.querySelector('body > footer > p');
        
                const pInnerText = p.textContent;
                const pInnerTextTrimmed = pInnerText.trim();
        
                expect(pInnerTextTrimmed).toBe('© My Copyright');
            });
        });
    });

});
