## Adding Numbers - A Simple Web App

This repository contains the code for a simple web application that allows users to enter two numbers and calculate their sum. It utilizes Bootstrap for basic styling and layout.

**Live Preview:**

* You can view a live demo of the application here: https://ongunakaycom.github.io/Interactive-Sum-Calculator

**Getting Started:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ongunakaycom/Return-the-Sum-of-Two-Numbers
   ```

2. **Open the HTML file:**

   The main application code is located in the `index.html` file. You can open this file in your web browser to run the application locally.

**Project Structure:**

```
adding-numbers/
├── index.html  # Main HTML file
├── src/
│   ├── css/
│   │   └── bootstrap.min.css  # Bootstrap CSS file
│   └── js/
│       └── script.js  # JavaScript code for addition functionality
└── README.md  # This file (the project readme)
```

**Technologies Used:**

* HTML: Provides the structure and content of the webpage.
* JavaScript: Enables interactivity and functionality, including handling user input and calculating the sum.
* Bootstrap (optional): Used for basic styling and layout enhancements.

**How it Works:**

1. The user enters two numbers in the designated input fields.
2. Clicking the "Add" button triggers the `addNumbers` function defined in the `script.js` file.
3. The function retrieves the values from the input fields, parses them to numbers, and calculates the sum.
4. The calculated sum is displayed in the paragraph element with the `id` "result".

**Contributing:**

Feel free to fork this repository and make improvements! You can add features like:

* Error handling for invalid input (non-numeric characters).
* Functionality to clear the input fields and reset the calculation.
* More visually appealing styling using Bootstrap or custom CSS.

**License:**

This project is distributed under the MIT License. See the LICENSE file for details.
