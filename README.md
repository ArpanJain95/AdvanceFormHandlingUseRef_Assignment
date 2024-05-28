### Advanced Form Handling with useRef in React

## Overview
The project focuses on utilizing the useRef hook in React for advanced form handling. It covers topics such as managing form elements, input focus, real-time input validation and custom form submission handling.

## Implementation Details
# Components
- App.js: Contains the main React component for the form handling functionality.

# useRef Hooks
- onLoadRef: References the input field for the full name.
- dateRef, monthRef, yearRef: References the input fields for the birth date.
- maleRef, femaleRef: References the checkboxes for gender selection.
- contactRef: References the input field for the contact number.
- validRef: References the submit button.

# State Variables
- fullNameValid, dateValid, monthValid, yearValid, genderChecked, contactValid: Booleans indicating the validity of form inputs.
- formValid: Boolean indicating overall form validity.

# Functions
- nameValid(event): Validates the full name input.
- ifValid(event, len, setStuff, focusTo): Validates input fields based on length and sets corresponding state variables.
- handleCheckbox(event, otherRef): Handles checkbox input and disables/enables the opposite checkbox.
- handleSubmit(): Logs a success message upon form submission.

# useEffect Hook
- useEffect(() => {...}, []): Focuses on the full name input field when the component mounts.
- useEffect(() => {...}, [fullNameValid, dateValid, monthValid, yearValid, genderChecked, contactValid]): Checks the form validity whenever any of the form input state variables change.

# Running the Project
- Ensure Node.js and npm are installed on your system.
- Clone the repository from GitHub.
- Navigate to the project directory and install dependencies using npm install.
- Run the project using npm run dev.
- Access the form in your web browser at the provided localhost address.

## Conclusion
This is the overview, which includes implementation details and instructions for running the project. By completing this assignment, valuable experience was gained in advanced form handling techniques using the useRef hook in React.