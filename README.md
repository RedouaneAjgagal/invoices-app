# Invoices App

Invoices app is a challenge on frontendmentor which manage invoices

## Table of contents

- [Overview](#overview)
  - [The Project](#the-project)
  - [Screenshots](#screenshots)
    -[Large screen](#large-screen)
    -[Small Screen](#small-screen)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  -[Challenges](#challenges)
- [Author](#author)

## Overview

### The Project

Invoices app is a challenge on [Frontendmentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl)

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Discard the form
- Navigate differently depening on user's screen, if on mobile means users going to navigate throught pages if want to (add new invoice or edit an existing invoice), and if on large screens the form going to popup either for new or edit invoices
- Toggle light and dark mode

### Screenshots

#### Large Screen

![desktop](https://user-images.githubusercontent.com/98456832/222979565-d1f8bea1-b36b-45d6-9454-20599b11ae6c.png)

![desktop-form](https://user-images.githubusercontent.com/98456832/222979582-05629142-91a1-426f-9fa8-9a2739c52107.png)

#### Small Screen

![mobile-edit](https://user-images.githubusercontent.com/98456832/222979625-2058e883-fef5-4ae3-b6b6-3367893b765f.png)

![mobile-details](https://user-images.githubusercontent.com/98456832/222979618-f5b4e1a5-a322-4310-8775-84ae727d7d03.png)

### Links

- Source: [GitHub Repository](https://github.com/RedouaneAjgagal/invoices-app)
- Live: [Live Site](https://manage-invoices.netlify.app/invoices)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) -  Typed programming language that builds on JavaScript
- [React Router](https://reactrouter.com/en/main) - JavaScript framework that lets us handle client and server-side routing in React applications
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Tool to quickly start a project
- Mobile-first workflow
- LocalStorage

### Challenges

- `Handling Form Errors`: Well this was a challenging part, for submiting the form i used `Fetcher.form` that is provided by react-router-dom and used it with the action funtion and received the values by inputs names. Well if there is an invalid input it returns a response. but the problem was for the `Item List` because their names are the same and couldnt manage their error perfectly. i manage it somehow using the index but im not really happy using this approach.

- `Managing add/edit invoice`: Since i use Mobile-first workflow i used edit/new forms on their pages /new and /edit, well after i finished the mobile size and had to move for larger screens i found out that the form just popping up and not navigating to the other page. So i made two buttons and each one with different value for integrate the form, if its for mobile navigate to the other page else pop up the form. also i could use a library to manage the animation.. well i only used translate for the form popping up, so its always there in the dom and i used `window.innerWidth` to check if submition is for mobile or desktop.

## Author

- GitHub - [@RedouaneAjgagal](https://github.com/RedouaneAjgagal)
- Frontend Mentor - [@RedouaneAjgagal](https://www.frontendmentor.io/profile/RedouaneAjgagal)
