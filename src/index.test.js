const path = require('path');
const { HtmlValidate } = require('html-validate');

const htmlValidateConfig = require('../test-utils/htmlValidateConfig.json');
const { readTextFile } = require('../test-utils/readTextFile');

const { JSDOM } = require('jsdom');

describe('HTML Text elements', () => {
    let htmlString;

    let dom;
    let document;

    beforeEach(async () => {
        const filePath = path.join(__dirname, 'index.html');
        htmlString = await readTextFile(filePath);

        // Create fake DOM
        dom = new JSDOM(htmlString, {
            resources: 'usable'
        });
        document = dom.window.document;
    });

    // This test is mandatory for all the HTML related tasks
    it('html page should be valid', () => {
        const htmlvalidate = new HtmlValidate();
        const report = htmlvalidate.validateString(htmlString, htmlValidateConfig);
        
        expect(report).toEqual(expect.objectContaining({ valid: true }));
    });

    describe('Headings', () => {
        describe('<h1>', () => {
            it('should have only one such heading', () => {
                const h1s = document.querySelectorAll('body h1');
        
                expect(h1s.length).toBe(1);
            });


            it('should be used for a main heading on the page', () => {
                const h1 = document.querySelector('body h1');
        
                expect(h1.textContent.trim()).toBe('Apollo 11');
            });
        });

        describe('<h2>', () => {
            let h2s;

            beforeEach(() => {
                h2s = document.querySelectorAll('body > article > h2');
            });

            it('should have such heading for each article', () => {
                expect(h2s.length).toBe(2);
            });

            it('should be used for a "Background" article', () => {
                const h2 = h2s[0];
        
                expect(h2.textContent.trim()).toBe('Background');
            });

            it('should be used for a "Personnel" article', () => {
                const h2 = h2s[1];
        
                expect(h2.textContent.trim()).toBe('Personnel');
            });
        });

        describe('<h3>', () => {
            let h3s;

            beforeEach(() => {
                h3s = document.querySelectorAll('body section > h3');
            });

            it('should have such heading for each section', () => {
                expect(h3s.length).toBe(4);
            });

            it.each([
                ['Prime crew', 0],
                ['Backup crew', 1],
                ['Flight directors', 2],
                ['Citations', 3]
            ])('should have "%s" heading in section', (expectedText, index) => {
                h3s = document.querySelectorAll('body section > h3');

                expect(h3s[index].textContent.trim()).toBe(expectedText);
            })
        });
    });

    describe('Lists', () => {
        describe('Prime crew list', () => {
            it.each([
                ['Commander - Neil A. Armstrong, Second and last spaceflight', 0],
                ['Command Module Pilot - Michael Collins, Second and last spaceflight', 1],
                ['Lunar Module Pilot - Edwin "Buzz" E. Aldrin Jr., Second and last spaceflight', 2],
            ])('ordered list item should have correct text: "%s"', (expectedText, index) => {
                const personnelArticle = document.querySelectorAll('body > article')[1];
                const section = personnelArticle.querySelectorAll('section')[0];
                const listItems = section.querySelectorAll('ol > li');
                const li = listItems[index]

                expect(li.textContent.trim()).toBe(expectedText);
            });
        });

        describe('Backup crew list', () => {
            it.each([
                ['Commander - James A. Lovell Jr.', 0],
                ['Command Module Pilot - William A. Anders', 1],
                ['Lunar Module Pilot - Fred W. Haise Jr.', 2],
            ])('ordered list item should have correct text: "%s"', (expectedText, index) => {
                const personnelArticle = document.querySelectorAll('body > article')[1];
                const section = personnelArticle.querySelectorAll('section')[1];
                const listItems = section.querySelectorAll('ol > li');
                const li = listItems[index]

                expect(li.textContent.trim()).toBe(expectedText);
            });
        });

        describe('Flight directors list', () => {
            it.each([
                ['Clifford E. Charlesworth', 0],
                ['Gerald D. Griffin', 1],
                ['Gene Kranz', 2],
                ['Glynn Lunney', 3],
                ['Milton Windler', 4],
            ])('unordered list item should have correct text: "%s"', (expectedText, index) => {
                const personnelArticle = document.querySelectorAll('body > article')[1];
                const section = personnelArticle.querySelectorAll('section')[2];
                const listItems = section.querySelectorAll('ul > li');
                const li = listItems[index]

                expect(li.textContent.trim()).toBe(expectedText);
            });
        });
    });

    describe('Abbreviations, quotations, times, and dates', () => {
        describe('date and time', () => {
            let time;

            beforeEach(() => {
                const p = document.querySelectorAll('body > p')[0];
                time = p.querySelector('time');
            });

            it('should wrap date in the first paragraph', () => {
                expect(time).not.toBeNull();
            });

            it('should add dateime attribute to the tag', () => {
                let attributeValue = time.getAttribute('datetime').trim();

                expect(attributeValue).toBe('1969-07-20T20:17:00.000Z');
            });
        });

        describe('Abbreviation', () => {
            let abbr;

            beforeEach(() => {
                const p = document.querySelectorAll('body > p')[1];
                abbr = p.querySelector('abbr');
            });

            it('should wrap the NASA', () => {
                expect(abbr).not.toBeNull();
            });

            it('should add title to the tag', () => {
                let attributeValue = abbr.getAttribute('title').trim();

                expect(attributeValue)
                    .toBe('The National Aeronautics and Space Administration');
            });
        });

        describe('Quote', () => {
            let blockQuote;

            beforeEach(() => {
                const p = document.querySelectorAll('body > article')[0];
                blockQuote = p.querySelector('blockquote');
            });

            it('should wrap the quote with a correct tag', () => {
                expect(blockQuote).not.toBeNull();
            });

            it('should have Kennedy\'s quote text inside', () => {
                const p = blockQuote.querySelector('p');

                expect(p.textContent.trim().startsWith('I believe that this nation'))
                    .toBe(true);
            });

            it('should have correct text in a cite tag', () => {
                const cite = blockQuote.querySelector('cite');

                expect(cite.textContent.trim())
                    .toBe('Kennedy\'s speech to Congress');
            });
        });
    });

    describe('Emphasized, italic, superscript text', () => {
        let p;

        beforeEach(() => {
            p = document.querySelectorAll('body > p')[2];
        });

        it('should emphasize quote', () => {
            const em = p.querySelector('em');

            expect(em.textContent.trim())
                .toBe('"one small step for [a] man, one giant leap for mankind."')
        });

        it('should make from a link a superscript', () => {
            const a = p.querySelector('a');
            const superscript = a.parentElement;

            expect(superscript.tagName).toBe('SUP');
        });

        describe('italic', () => {
            it.each([
                [0],
                [1],
                [2]
            ])('should have italized text chunk #%i with at list 3 symbols', (index) => {
                const i = document.querySelectorAll('i')[index];
                
                expect(i.textContent.trim().length >= 3).toBe(true);
            });
        });
    });
});
