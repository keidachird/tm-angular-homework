# Angular Homework

This project contains an Angular application that implements a user managment system. It was made as a homework for [Techmagic Academy](https://www.techmagic.co/techmagic-academy).

## Overview

The application allows you to perform various operations on user data, such as listing users from an open [API](https://jsonplaceholder.typicode.com/users), sorting them, searching for specific users, deleting selected users, and creating new users.

## Demo

You can see a live demo of this project [here](https://keidachird.github.io/tm-angular-homework/).

## Features

- **List Users**: The application retrieves user data from an API and displays it in a grid format. Each user's details, including their first name, last name, email, phone number, and image, are presented in separate user cards.

- **Sort Users**: Users can be sorted based on their first name. You can choose to sort the list in ascending or descending order, which makes it easier to locate users based on their names.

- **Search Users**: The application provides a search feature that enables you to find specific users quickly. You can search for users by their first name and last name. As you type in the search input, the user list will dynamically update to display only the matching users.

- **Delete Users**: Selected users can be deleted from the user list. By selecting one or more users using checkboxes and confirming the deletion, the application will remove the chosen users from the list. This feature helps manage user data and remove unnecessary entries.

- **Create New User**: The application includes a form that allows you to create a new user. You can input the necessary details, such as the user's first name, last name, email, and phone number, and submit the form to add the new user to the list. This feature facilitates the addition of new users to the system.

## Project details

- To create images for users, I used [robohash](https://robohash.org/) service, which generates an image from any text.
- For UI I used [Angular Material](https://material.angular.io/) library.

## Installation

- Clone this repository with `git clone https://github.com/keidachird/tm-angular-homework.git`.
- Open the cloned folder with `cd tm-angular-homework`.
- Run `npm i` to install all dependencies.
- Run `ng serve -o` to launch a server. It will open a browser, and you can use the application.

## Usage

After the page loads, you will see a list of loaded users and a toolbar to interact with them. There are two links in the header which corespond for two parts of the homework: `First part` and `Second part`. `Second part` is the same as `First part` but allows you to create a new user.

You can select users using checkboxes on their cards, and by clicking on Delete selected, these users will be removed from the list, and a DELETE request will be sent to the API. You can select all users using `Select all` checkbox on the toolbar.

You can search for users by their first name and last name using the `Search` input. The list will update automatically as you type for the matching results.

You can sort users using `Sort by` selection field by first name in ascending or descending order.

After you navigate to the `Second part`, a `Create user` button will appear. By clicking on it, a modal window with a form will be opened. Providing data to the input field you can create a new user in the list and `POST` request will be sent to the API. The form has validation that won't allow you to create a new user until all requirements will be satisfied.

## Examples

Here are some examples of the application`s UI and its usage.

- **Page for the first part of the homework**:

  ![Page for the first part of the homework](https://i.ibb.co/Fxc1GMS/tm-angular-homework-first-part.png)

- **Page for the second part of the homework**:

  ![Page for the second part of the homework](https://i.ibb.co/HxcSKy0/tm-angular-homework-second-part.png)

- **A modal window for creating a user**:

  ![A modal window for creating a user](https://i.ibb.co/9VHSFzQ/tm-angular-homework-create-user-modal.png)
