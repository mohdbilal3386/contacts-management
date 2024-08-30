# Contact Management System

## Description

The Contact Management System is a React-based web application designed to efficiently manage your contacts. It empowers you to perform CRUD (Create, Read, Update, Delete) operations for contact details, including name, email, phone number, and address.

The application leverages the following technologies to deliver a robust and user-friendly experience:

- **Redux** for centralized state management
- **react-hook-form** and **yup** for effortless form handling and validation
- **Tailwind CSS** for streamlined and responsive styling

The UI boasts a responsive design, ensuring seamless access and optimal viewing across various devices.

## Features

- **Create Contact:** Effortlessly add new contacts with built-in validation to ensure data accuracy.
- **View Contact:** Access and examine individual contact details at your convenience.
- **Edit Contact:** Modify existing contact information to keep your records up-to-date.
- **Delete Contact:** Remove unwanted contacts from your list with ease.
- **Responsive Design:** Enjoy a smooth and adaptable user experience across different screen sizes.
- **Error Handling:** Benefit from client-side validation powered by `react-hook-form` and `yup`, preventing invalid data entry.

## Tech Stack

**Frontend:**

- React
- TypeScript
- React Router
- Redux
- Tailwind CSS

**Form Handling and Validation:**

- react-hook-form
- yup

**Icons:**

- @heroicons/react

**State Management:**

- Redux Toolkit

## Directory Structure

```bash
src/
├── components/ // Reusable components (e.g., Table)
├── pages/ // Main pages (e.g., CreateContactPage)
├── hooks/ // Custom hooks (e.g., reduxHook)
├── store/ // Redux store and slices
│ ├── reducers/ // Reducers and actions (e.g., contactSlice)
│ └── ... // Other store-related files
└── App.tsx // Main application component
└── index.tsx // Entry point for React
```

## Setup and Installation

### Prerequisites

- Node.js (v14.x or later recommended)
- npm or yarn package manager
- Git

### Steps to Run the Application

1. **Clone the Repository**

   ```bash
   git clone [https://github.com/your-username/contact-management-system.git](https://github.com/your-username/contact-management-system.git)
   cd contact-management-system
   ```

2. **Install Dependencies**

### Using npm:

```bash
npm install
```

3. **Setup Environment Variables (if needed)**

### Create a .env file in the root directory containing your API URL:

```bash
REACT_APP_API_URL=https://disease.sh/v3/covid-19
```

4. **Start the Development Server**

### Using npm:

```bash
npm start
```
