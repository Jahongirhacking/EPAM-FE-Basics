# Structuring Tabular Data

## Add tabular data to the web page

## Before we start

1.	This practical task is verified automatically with tests.
2.	Please put all your `HTML` code in the `src/index.html` and `src/gallery.html` file. If you use any other file, we will not be able to verify it.
3. Please, don't change the page structure, it may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/docs/LocalDevelopment.md).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/docs/VerifySolutionLocally.md).

## Task Requirements

In this task, you will be asked to present tabular data on a web page. Pay attention to the requirements for the table's appearance.

Please, note you should edit the `src/index.html` file. We can't verify your solution if you use a different file.

**Add the following tabular data to the web page:**

![Table image](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/Structuring%20Tabular%20Data/table.PNG)

**Raw Data for the table:**

```text
Shop list for 25th of May 

Name 
Purchases 
Price 
Amount (kilo) 
Sum 

Apple 
20 
2 
40 

Potato 
10 
3 
30 

Carrot 
15 
1 
15 

Total 
3 
85 
```

### Requirements

1. Using table-related tags add a table with the information above into the body element. 
2. Table should have **title**, **header** (bold cells in the top rows of the presented table), **footer** (with a total amount of purchases), **body** (with the shopping data itself). Please, use corresponding `HTML` tags for it. 
3. Caption of the table should be: **Shop list for 25th of May**.
4. Don't forget, every `<th>` in the head, should have `scope="col"` attribute.
5. Cell with `Purchases` should be a big label across three columns.
6. Please, note the `Name` should go across two rows
7. Please, note the `Total` should go across two columns.
8. `Price` and `Amount (kilo)` columns should be grouped using `<colgroup>` and `<col>` tags. Don't forget to add `<col>` for every column.
