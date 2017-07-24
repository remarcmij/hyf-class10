# hyf-class10

This is an off-curriculum starter project for HYF class 10, who, at the time of writing, are still in the middle of learning JavaScript.

This application displays a list of bilingual sentences (currently English -> Dutch) that match criteria as specified through an API end point.

It constitutes a SPA (Single Page Application), using direct DOM manipulation with JavaScript and uses a supporting backend server that runs on the same computer. The backend server makes use of the `json-server` package that takes its data from a `json` file.

## Installation

Install the repo (replace <project folder> with the name of the folder where you keep of your HYF work. In this folder a hyf-class10 subfolder will be created by the git clone command below):

```
cd <project folder>
git clone https://github.com/remarcmij/hyf-class10.git
cd hyf-class10
npm install
npm start
```

Open File Explorer (Windows) or equivalent on Mac or Linux and go to the hyf-class10 folder.

Double-click the index.html file to open it in the browser.

Note: you need to repeat the command `npm start` from the `hyf-class10` folder in case you have (re)started your computer or killed the terminal/command window where this command was running.

## API end points

The following API end points may be of interest:

- `http://localhost:3000/en?subject=<subject>`

    where subject is one of following:

    - questions
    - answers
    - signs
    - date-time
    - numbers
    - personal-details
    - bank
    - post
    - telephone
    - telephone-alphabet
    - internet
    - photo-video
    - weather
    - safety

- `http://localhost:3000/en?q=<term>`

    where `<term>` is any search term. This performs a full-text search on any field, e.g.:

    `http://localhost:3000/en?q=regen`

Other end points can constructed by mapping the `posts` end point examples given in the documentation of `json-server` to match the `/en` end point we are using here.

See https://github.com/typicode/json-server
