# HTML Forms and Interactive Elements 

## Update NASA Yearlong Simulated Mars Mission application form

## Before we start

1.	This practical task is verified automatically with tests.
2.	Please put all your `HTML` code in the `src/index.html` and `src/gallery.html` file. If you use any other file, we will not be able to verify it.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/docs/VerifySolutionLocally.md).

## Task Requirements
In the `src/index.html` file, you will find the basic `NASA Yearlong Simulated Mars Mission` application form. 

Update it according to the requirements below. 

Please note that you should edit the `src/index.html` file. Your solution cannot be verified if you use a different file. 

### Please add or edit the following:
1.	**Contact Info Section**. In a `<section>` with `id="contact-info"`:
	1. Wrap all `<input>` elements and their text titles in `<label>`. Note that you need to wrap them, not link them via `id` and `for` attributes. Text title is an input text written before it. For instance, the first one should be: `Full Name:`
	2. Add `name` attributes to the `<input>` elements with specific values. The values should be:
		- Full Name `<input>`: `name` => `full-name`
		- Address `<input>`: `name` => `address`
		- Email `<input>`: `name` => `email`
	3. Add the correct `<input>` type to the Email input.
	4. Please don't change the order of the `<input>` elements

2. **About section**. In a `<section>` with `id="about"`:
	1. Add `<fieldset>` to the `University Degree` radio buttons:
		- Wrap the unordered list with `<input>` elements with `<fieldset>`. Place a `<legend>` with the text `University Degree` as the first element of the fieldset. 
		- Change `<input>` type to `radio`
		- Add `name="degree"` to each `<input>`
		- Add specific `value` attributes:
			- `Military` => `value="military"`
			- `Technical` => `value="technical"`
			- `Student` => `value="student"`
	2. Add `<textarea>` with label to the `<p>` with `id="bio-p"` in the end of a `<section>`:
		- `<textarea>` should have `name="bio"` attribute.
		- `<label>` element with text `BIO` should be linked to the `<textarea>` via `id` and `for` attributes. Please, note `<label>` should **NOT wrap textarea**. It should be placed before `<textarea>` element.

3. **Participation details section**. In a `<section>` with `id="participation-details"`:
	1. Add `<details>` element with `<summary>` with text `More info`. Place `<details>` element after `<h3>` section heading. When user opens `<details>` element, text should appear: `Please, provide information about your preferences. We don't guarantee them, but we will try.`. When you use this text to the HTML, please copy it. If a text in HTML differs in spaces or characters case, it will not pass tests.
	2. Add `<input>` for Uniform color picking to the paragraph `<p>` with `id="uniform-color-p"`.
		- It should have `<label>` linked with `id` and `for` attributes. The text inside `<label>` should be: `Uniform color`.
		- `<input>` should have type appropriate for color picking.
		- `<input>` should have `name` attribute with value: `uniform-color`.
		- `<label>` and `<input>` should be wrapped with paragraph `<p>`.
	3. Add `<input>` for picking a preferred role in a mission to the paragraph `<p>` with `id="preferred-mission-role-p"`.
		- It should have `<label>` linked with `id` and `for` attributes. The text inside `<label>` should be: `Preferred Role in a mission`.
		- `<input>` should have `name` attribute with value: `preferred-mission-role`.
		- `<input>` should have `type` attribute with value: `text`.
		- `<input>` should have `<datalist>` with options. Options values are: `Pilot`, `Doctor`, `Scientist`, `Experimentator`. Options order is important! A `<datalist>` should be linked to the input with `id` and `list` attriutes. Here are an example how to do this: <https://developer.mozilla.org/ru/docs/Web/HTML/Element/datalist>

4. **Agree and submit section.** In a `<section>` with `id="agree-and-submit"`:
	1. Add `<input>` with `checkbox` type.
		- It should be wrapped with `<label>` element. 
		- `<label>` text is: `I agree on terms and conditions.`
		- `<input>` should have `name` attribute with value: `user-agree`.
	2. Add `<button>` for submitting this form.
		- It should have `type="submit"`.
		- Its text should be: `Send your data to NASA`.

