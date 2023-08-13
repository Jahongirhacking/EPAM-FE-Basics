const path = require('path');
const { HtmlValidate } = require('html-validate');

const htmlValidateConfig = require('../test-utils/htmlValidateConfig.json');
const { readTextFile } = require('../test-utils/readTextFile');

const { JSDOM } = require('jsdom');

describe('HTML Forms and Interactive Elements', () => {
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

    describe('Contact Info Section', () => {
        let section;
        let inputs;
        let labels;

        beforeEach(() => {
            section = document.querySelector('body > form > #contact-info');
            inputs = section.querySelectorAll('input');
            labels = section.querySelectorAll('label');
        });

        describe('Full name <input> and <label>', () => {
            let input;

            beforeEach(() => {
                input = inputs[0];
                label = labels[0];
            });

            it('should be wrapped with label', () => {
                expect(input.parentElement.tagName).toBe('LABEL');
            });

            it('should have correct name', () => {
                expect(input.name.trim()).toBe('full-name');
            });

            it('<label> should have correct text', () => {
                expect(label.textContent.trim())
                    .toBe('Full Name:');
            });
        });

        describe('Address <input> and <label>', () => {
            let input;

            beforeEach(() => {
                input = inputs[1];
                label = labels[1];
            });

            it('should be wrapped with label', () => {
                expect(input.parentElement.tagName).toBe('LABEL');
            });

            it('should have correct name', () => {
                expect(input.name.trim()).toBe('address');
            });

            it('<label> should have correct text', () => {
                expect(label.textContent.trim())
                    .toBe('Address:');
            });
        });

        describe('Email <input> and <label>', () => {
            let input;

            beforeEach(() => {
                input = inputs[2];
                label = labels[2];
            });

            it('should be wrapped with label', () => {
                expect(input.parentElement.tagName).toBe('LABEL');
            });

            it('should have correct name', () => {
                expect(input.name.trim()).toBe('email');
            });

            it('<label> should have correct text', () => {
                expect(label.textContent.trim())
                    .toBe('Email:');
            });

            it('should have email type', () => {
                expect(input.type).toBe('email');
            });
        });
    });

    describe('About section', () => {
        let section;

        beforeEach(() => {
            section = document.querySelector('body > form > #about');
        });

        describe('<fieldset>', () => {
            let fieldset;
            let inputs;

            beforeEach(() => {
                fieldset = section.querySelector('fieldset');
                inputs = fieldset.querySelectorAll('ul > li > label > input');
            });
            
            it('should exist', () => {
                expect(fieldset).not.toBeNull();
            });

            it('should have correct <legend>', () => {
                const legend = fieldset.querySelector('legend');

                expect(legend.textContent.trim()).toBe('University Degree');
            });

            it('should have only one <legend>', () => {
                const legends = fieldset.querySelectorAll('legend');

                expect(legends.length).toBe(1);
            });

            describe('<input> elements', () => {
                it.each([
                    [0],
                    [1],
                    [2],
                ])('#%d should have radio type', (index) => {
                    let input = inputs[index];
    
                    expect(input.type).toBe('radio');
                });
    
                it.each([
                    [0, 'military'],
                    [1, 'technical'],
                    [2, 'student'],
                ])('#%d should have correct value attribute', (index, value) => {
                    let input = inputs[index];
    
                    expect(input.value.trim()).toBe(value);
                });
            });

            describe('<textarea>', () => {
                let textarea;
                let label;

                beforeEach(() => {
                    textarea = section.querySelector('#bio-p > textarea');
                    label = section.querySelector('#bio-p > label');
                });

                it('should exist', () => {
                    expect(textarea).not.toBeNull();
                });

                it('should have correct name attribute', () => {
                    expect(textarea.name).toBe('bio');
                });

                it('<label> should exist', () => {
                    expect(label).not.toBeNull();
                });

                it('<label> should have correct text', () => {
                    expect(label.textContent.trim()).toBe('BIO');
                });

                it('<label> should be linked to <textarea>', () => {
                    expect(textarea.id).toBe(label.getAttribute('for'));
                });
            });
        });
    });

    describe('Participation details section', () => {
        let section;

        beforeEach(() => {
            section = document.querySelector('body > form > #participation-details');
        });

        describe('<details>', () => {
            let details;
            let summary;

            beforeEach(() => {
                details = section.querySelector('details');
                summary = details.querySelector('summary');
            });

            it('should exist', () => {
                expect(details).not.toBeNull();
            });
            
            it('<summary> should exist', () => {
                expect(summary).not.toBeNull();
            });

            it('<summary> should have correct text', () => {
                expect(summary.textContent.trim())
                    .toBe('More info');
            });

            it('should have correct details text', () => {
                const expectedText = 'Please, provide information about your preferences. We don\'t guarantee them, but we will try.';

                expect(details.textContent.trim().endsWith(expectedText))
                    .toBe(true);
            });
        });

        describe('<input> for Uniform color picking', () => {
            let p;
            let input;
            let label;

            beforeEach(() => {
                p = section.querySelector('#uniform-color-p');
                input = p.querySelector('input');
                label = p.querySelector('label');
            });

            it('<label> should exist', () => {
                expect(label).not.toBeNull();
            });

            it('<input> should exist', () => {
                expect(input).not.toBeNull();
            });

            it('<label> should be linked to <input>', () => {
                expect(input.id).toBe(label.getAttribute('for'));
            });

            it('<label> should have correct text', () => {
                expect(label.textContent.trim()).toBe('Uniform color');
            });

            it('<input> should have correct name attribute', () => {
                expect(input.name).toBe('uniform-color');
            });

            it('<input> should have correct type attribute', () => {
                expect(input.type).toBe('color');
            });
        });

        describe('<input> for Uniform color picking', () => {
            let p;
            let input;
            let label;
            let datalist;

            beforeEach(() => {
                p = section.querySelector('#preferred-mission-role-p');
                input = p.querySelector('input');
                label = p.querySelector('label');
                datalist = p.querySelector('datalist');
            });

            it('<label> should exist', () => {
                expect(label).not.toBeNull();
            });

            it('<input> should exist', () => {
                expect(input).not.toBeNull();
            });

            it('<label> should be linked to <input>', () => {
                expect(input.id).toBe(label.getAttribute('for'));
            });

            it('<label> should have correct text', () => {
                expect(label.textContent.trim())
                    .toBe('Preferred Role in a mission');
            });

            it('<input> should have correct name attribute', () => {
                expect(input.name).toBe('preferred-mission-role');
            });

            it('<input> should have correct type attribute', () => {
                expect(input.type).toBe('text');
            });

            it('<datalist> should be linked to <input>', () => {
                expect(datalist.getAttribute('id'))
                    .toBe(input.getAttribute('list'));
            });

            it.each([
                [0, 'Pilot'],
                [1, 'Doctor'],
                [2, 'Scientist'],
                [3, 'Experimentator'],
            ])('Option #%d should have value: %s', (index, expectedValue) => {
                let options = datalist.querySelectorAll('option');
                let option = options[index];

                expect(option.value).toBe(expectedValue);
            });
        });
    });

    describe('Agree and submit section', () => {
        let section;

        beforeEach(() => {
            section = document.querySelector('body > form > #agree-and-submit');
        });

        describe('<input> type checkbox', () => {
            let input;
            let label;

            beforeEach(() => {
                input = section.querySelector('input');
                label = section.querySelector('label');
            });

            it('<label> should exist', () => {
                expect(label).not.toBeNull();
            });

            it('<input> should exist', () => {
                expect(input).not.toBeNull();
            });

            it('<input> should be wrapped with label', () => {
                expect(input.parentElement.tagName)
                    .toBe('LABEL');
            });

            it('<input> should have correct name attribute', () => {
                expect(input.name).toBe('user-agree');
            });

            it('<input> should have correct type attribute', () => {
                expect(input.type).toBe('checkbox');
            });

            it('<label> should have correct text', () => {
                expect(label.textContent.trim())
                    .toBe('I agree on terms and conditions.');
            });
        });

        describe('submit <button>', () => {
            let button;
            
            beforeEach(() => {
                button = section.querySelector('button');
            });

            it('should have correct type attribute', () => {
                expect(button.type).toBe('submit');
            });

            it('should have correct text', () => {
                expect(button.textContent.trim())
                    .toBe('Send you data to NASA');
            });
        });
    });
});
