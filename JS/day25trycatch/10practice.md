


## Question 1:
You are building a website for an online store. While calculating the total price, a user adds **3 items** to the cart but accidentally leaves the quantity field empty for one of the items. Write JavaScript code to handle this error so that if a user forgets to enter the quantity, they see the message **"Please enter a valid quantity"** instead of the website crashing.

**Hint:**  
Use `try...catch` to check if the quantity is undefined or null, and throw an error if it is.

---

## Question 2:
You are developing a registration form where the user must input their email address. A user enters **"john.doe.com"** instead of **"john.doe@example.com"**. This incorrect format causes an error. Write a JavaScript solution to show a message **"Invalid email format"** when such an error occurs, ensuring the form still works.

**Hint:**  
Use `try...catch` to validate the email format, and inside the `try` block, check if the input contains "@" and "." symbols.

---

## Question 3:
You're working on a weather app that fetches data from an API. The app is expected to show the temperature in **Celsius**, but due to a network issue, the data cannot be retrieved, and the user sees an error. Handle this situation in JavaScript so that if the app cannot fetch the temperature, a message like **"Unable to retrieve weather data"** is shown instead.

**Hint:**  
Use `try...catch` to handle API errors and provide a fallback message inside the `catch` block.

---

## Question 4:
You are creating a login feature for a website. The user must input both their **username** and **password**. A user attempts to log in but forgets to enter their password, causing an error. Write a JavaScript solution to display **"Please fill in all the fields"** if any field is left empty.

**Hint:**  
Use `try...catch` to check if any field is empty, and throw an error if either the username or password is missing.

---

## Question 5:
In a currency converter app, the user tries to convert **100 USD** to **EUR**. However, instead of entering 100, the user types **"abc"** by mistake. This input causes an error. Write JavaScript code that handles this situation and shows the message **"Please enter a valid number"** if the user enters non-numeric values.

**Hint:**  
Use `try...catch` to check if the input is a number. You can use `isNaN()` to validate if the input is not a number.
