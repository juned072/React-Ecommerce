## Ecommerce App

This ecommerce is not a real time working project. This repository contains the source code for an Ecommerce web application built using React.js and Redux toolkit. The application allows users to browse products, add them to a shopping cart, and proceed to checkout. Here's an overview of the project structure and functionalities:

### Project Structure

- **src/components**: Contains React components used throughout the application.
  - **Card.jsx**: Component to display individual product cards.
  - **CartProduct.jsx**: Component to display products in the shopping cart.
  - **CartPage.jsx**: Component for the shopping cart page.
  - **SearchBox.jsx**: Component for the search input box.
  - **Sidebar.jsx**: Component for the category filter sidebar.
- **src/pages**: Contains React components representing different pages of the application.
  - **Home.jsx**: Component for the home page displaying products.
  - **Error404.jsx**: Component for the 404 error page.
  - **Success.jsx**: Component for the order success page.
  - **Protected.jsx**: Component to protect routes based on cart contents.
- **src/redux**: Contains Redux-related files for managing application state.
  - **CardSlice.js**: Redux slice for managing the shopping cart state.
  - **Store.js**: Redux store configuration.
- **index.jsx**: Main entry point of the React application.
- **index.html**: HTML template file.
- **index.css**: Global CSS styles.

### Functionality

- **Product Listing**: Users can view a list of products fetched from a fake store API.
- **Product Filtering**: Users can filter products by category using the sidebar.
- **Search**: Users can search for products by name using the search box.
- **Shopping Cart**: Users can add products to the shopping cart, adjust quantities, and remove items.
- **Order Checkout**: Users can proceed to checkout and view a success page after placing an order.
- **Protected Routes**: The success page is protected and only accessible if the cart is not empty.

### Setup Instructions

1. Clone the repository: `https://github.com/juned072/React-Ecommerce.git`
2. Navigate to the project directory: `cd ecommerce-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: [http://localhost:3000](http://localhost:3000)

### Technologies Used

- React.js
- Redux Toolkit
- React Router
- Axios (for API requests)
- Tailwind CSS (for styling)

### Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. 
