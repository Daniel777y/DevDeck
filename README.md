# DevDeck

DevDeck is a React app that helps you find and learn about different technologies.

Think of it like a menu of tools that developers can use to build apps and websites.

[Video Introduction](https://youtu.be/CRnGRIwTIco)

## Features

### Done

* **Discover Techs**: Look through a list of popular tech tools like libraries and frameworks.
* **Learn Quickly**: Each tool comes with a brief explanation to help you understand what it's for.
* **Choose Wisely**: Pick out the tools you think will be best for your project.

### To-Do

 - [ ] **Get Ready to Use Them**: After you decide on your tools, you'll get links to their official guides and other helpful info.
 - [ ] **Extra Help**: Sometimes, there might be smart AI tips to give you special advice on using your chosen tools.

## Getting Start

### Demo

A [demo](https://devdeck-8ebb4.web.app/) deplpyed by firebase.

### Run on your local machine

```bash
git clone git@github.com:Daniel777y/DevDeck.git
cd DevDeck
npm install
npm run dev
```

Before running the app, if you'd like to use DevDeck without setting up Firebase, please make sure:

1. Navigate to the `DevDeck/src/pages/` directory.
2. Open the `IndexPage.jsx` file.
3. Find the line that defines the `DEV_MODE` variable.
4. Set `DEV_MODE` to `true`. It should look like this: `const DEV_MODE = true;`

Open your web browser and navigate to http://localhost:3000 to play around!


## Implementation of this project

### Overview

This homework requires me to implement a shopping cart. I borrowed this idea and implement the DevDeck in the same logic.

Specifically, the frontend has two list: `displayTechs` and `selectedTechs`, where the former one lists all the techs available, and the latter one shows techs users select.

Users can select techs from the `displayTechs` to the `selectedTechs`, create new techs, modify techs' descriptions, clear all the items in the `selectedTechs`, and check techs out by clicking `start` button.

If items in either list contains more than 5 items, users can switch to the next page.

All the data are operated by react hooks.

I used [MDN](https://developer.mozilla.org/en-US/), [React document](https://react.dev/) and [firebase document](https://firebase.google.com/) for reference.

### Firebase CRUD

In this demo project, I use firebase for database. Here are the methods of CRUD:

```javascript
{
  // get data from database
  getAllTechs: async () => {
    const techsRef = collection(db, "Techs");
    return (await getDocs(techsRef)).docs.map(item => item.data());
  },
  getAllSelectedTechs: async () => {
    const selectedTechsRef = collection(db, "SelectedTechs");
    return (await getDocs(selectedTechsRef)).docs.map(item => item.data());
  },
  // add a record (doc) to the database, and set the unique dataId
  addTech: async ({ id, name, url, description }) => {
    const dataId = formatStrToDataId(name);
    await setDoc(doc(db, "Techs", dataId), { id, name, url, description });
  },
  selectTech: async ({ id, name, url, description }) => {
    const dataId = formatStrToDataId(name);
    await setDoc(doc(db, "SelectedTechs", dataId), { id, name, url, description });
  },
  // delete a record (doc) from the database by dataId
  removeTech: async ({ name }) => {
    const dataId = formatStrToDataId(name);
    await deleteDoc(doc(db, "SelectedTechs", dataId));
  },
  // update a record (doc) with dataId
  updateTech: async ({ id, name, url, description }) => {
    const dataId = formatStrToDataId(name);
    await updateDoc(doc(db, "Techs", dataId), {
      id,
      name,
      url,
      description
    });
  },
}
```

### GPT

I used GPT4.0 for generating the 100 most commonly used technologies for development.

You can find the prompt and response [here](https://github.com/Daniel777y/DevDeck/blob/main/GPTRecords.md).
