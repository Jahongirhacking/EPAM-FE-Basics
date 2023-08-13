const path = require('path');
const { HtmlValidate } = require('html-validate');

const htmlValidateConfig = require('../test-utils/htmlValidateConfig.json');
const { readTextFile } = require('../test-utils/readTextFile');

const { JSDOM } = require('jsdom');

describe('Structuring Tabular Data ', () => {
    let htmlString;

    let dom;
    let document;

    let table;

    beforeEach(async () => {
        const filePath = path.join(__dirname, 'index.html');
        htmlString = await readTextFile(filePath);

        // Create fake DOM
        dom = new JSDOM(htmlString, {
            resources: 'usable'
        });

        document = dom.window.document;

        table = document.querySelector('table');
    });

    // This test is mandatory for all the HTML related tasks
    it('html page should be valid', () => {
        const htmlvalidate = new HtmlValidate();
        const report = htmlvalidate.validateString(htmlString, htmlValidateConfig);
        
        expect(report).toEqual(expect.objectContaining({ valid: true }));
    });

    describe('<table>', () => {
        it('should be defined', () => {
            expect(table).not.toBeNull();
        });

        it('should be only one on the page', () => {
            const allTables = document.querySelectorAll('table');
            
            expect(allTables.length).toBe(1);
        });

        it('should have correct caption', () => {
            const caption = table.querySelector('caption');
            const captionTextContent = caption.textContent.trim();

            expect(captionTextContent)
                .toBe('Shop list for 25th of May');
        });
    });

    describe('<colgroup>', () => {
        let cols;

        beforeEach(() => {
            cols = document.querySelectorAll('table > colgroup > col') || [];
        });

        it('should have 3 <col> elements', () => {
            expect(cols.length).toBe(3);
        });

        it('the second <col> should have span of 2', () => {
            const col = cols[1];

            expect(col.span).toBe(2);
        });
    });

    describe('<thead>', () => {
        let thead;
        let trs;

        beforeEach(() => {
            thead = document.querySelector('table > thead');

            trs = document.querySelectorAll('table > thead > tr');
        });

        it('should be defined', () => {
            expect(thead).not.toBeNull();
        });

        describe('"Name" and "Purchases" columns', () => {
            let tr;
            
            beforeEach(() => {
                tr = trs[0];
            });

            it.each([
                ['Name', 0],
                ['Purchases', 1]
            ])('"%s" cell should have correct text', (expectedText, index) => {
                const th = tr.cells[index];
                const cellText = th.textContent.trim();
                
                expect(cellText).toBe(expectedText);
            });
            
            it('"Name" cell should have correct rowspan', () => {
                const th = tr.cells[0];

                expect(th.getAttribute('rowspan')).toBe('2');
            });

            it('"Purchases" cell should have correct rowspan', () => {
                const th = tr.cells[1];

                expect(th.getAttribute('colspan')).toBe('3');
            });
        });

        describe('"Price", "Amount (kilo)", "Sum" columns', () => {
            let tr;
            
            beforeEach(() => {
                tr = trs[1];
            });

            it.each([
                ['Price', 0],
                ['Amount (kilo)', 1],
                ['Sum', 2],
            ])('"%s" cell should have correct text', (expectedText, index) => {
                const th = tr.cells[index];
                const cellText = th.textContent.trim();
                
                expect(cellText).toBe(expectedText);
            });
        });
    });

    describe('<tbody>', () => {
        let tbody;
        let trs;

        beforeEach(() => {
            tbody = document.querySelector('table > tbody');

            trs = document.querySelectorAll('table > tbody > tr');
        });

        it('should be defined', () => {
            expect(tbody).not.toBeNull();
        });

        it.each([
            { name: 'Apple', value1: '20', value2: '2', value3: '40', rowIndex: 0 },
            { name: 'Potato', value1: '10', value2: '3', value3: '30', rowIndex: 1 },
            { name: 'Carrot', value1: '15', value2: '1', value3: '15', rowIndex: 2 },
        ])('should have in the "$name" row: $value1, $value2, $value3', (params) => {
            const {
                name,
                value1,
                value2,
                value3,
                rowIndex,
            } = params;
            
            const tr = trs[rowIndex];

            expect(tr.cells[0].textContent.trim()).toBe(name);
            expect(tr.cells[1].textContent.trim()).toBe(value1);
            expect(tr.cells[2].textContent.trim()).toBe(value2);
            expect(tr.cells[3].textContent.trim()).toBe(value3);
        });

        describe('<tfoot>', () => {
            let tfoot;

            beforeEach(() => {
                tfoot = document.querySelector('table > tfoot');

                tr = document.querySelector('table > tfoot > tr');
            });

            it('should have in the "Total" row: 3, 85', () => {
                expect(tr.cells[0].textContent.trim()).toBe('Total');
                expect(tr.cells[1].textContent.trim()).toBe('3');
                expect(tr.cells[2].textContent.trim()).toBe('85');
            });

            it('"Total" cell should have correct colspan', () => {
                const td = tr.cells[0];
                
                expect(td.getAttribute('colspan')).toBe('2');
            });
        });
    });
});
