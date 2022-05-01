# Nezuko bot

> Yes! I love Nezuko from Demon Slayer then a named bot with a name Nezuko. Why? IDK :laughing:

<p align='center'>
  <img src='.github/preview.png' alt='Help command of Nezuko bot'/>
</p>

<p align='center'>
  Nezuko bot is a bot that can help you to manage a library (repository) with a lot of books or PDFs files.
</p>

## Table of contents

- [Why](#why)
- [Features](#features)
  - [Add books](#1-add-books)
  - [Search for uploaded books](#2-search-for-uploaded-books)
- [Technologies](#technologies)
- [Usage](#usage)
  - [Add a book](#add-a-book)
  - [Search books](#search-books)
- [Next features](#next-features)
- [License](#license)

## Why?

When I was browsing Discord servers I met a bot that had a similar purpose, it was from this meeting that I had the brilliant idea of ​​creating this beautiful bot.

The name "Nezuko" is from the Japanese anime series "Demon Slayer" or "Kimetsu no Yaiba". I chose this name because I love Nezuko, that's all lol

## Features

### 1. Add books

Users can add books to the library with the command `n!upload`, yes it's simple, just upload the book and the bot will do the rest.

### 2. Search for uploaded books

When you want to search for a book, you can use the command `n!search` and the bot will search for it.

> Only books uploaded can be searched.

## Technologies

- [Discord.js](https://discord.js.org/) / _Used to make the bot_
- [Node.js](https://nodejs.org/) / _The heart of the project_

## Usage

## Prerequisites

Before run the bot, you need have Node.js installed in your machine, and run the commands bellow:

```bash
  $ git clone https://github.com/Guigalaverna/nezuko-bot.git
  $ cd nezuko-bot
  $ npm install
  $

```

### Add a book

To add a book you can use the command `n!upload <language> <category> <title>` with parameters:

| Parameter | Description              | Type   |
| --------- | ------------------------ | ------ |
| language  | The language of the book | string |
| category  | The category of the book | string |
| title     | The title of the book    | string |

### Search books

To search for a book you can use the command `n!search <term>` with parameters:

| Parameter | Description                                   | Type   |
| --------- | --------------------------------------------- | ------ |
| term      | The term to search, it can be a title of file | string |

## Next features

- [] Check if file has virus
- [] Save the uploads in a simple database

## License

This project is licensed under the MIT license.

[License](./LICENSE)
