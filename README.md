# Package Tracker

The Package Tracker is a web application that allows users to view and manage their package delivery orders. The application fetches order data from a mock API and provides features such as searching, sorting, and displaying order details.

## Features

- Fetch and display a list of package delivery orders
- Filter orders by customer name or order ID
- Sort orders by ETA, status, or customer name
- Display order details, including customer name, ETA, pickup location, and destination
- Provide visual cues for order status (e.g., color-coded status badges)
- Responsive design for desktop and mobile devices

## Technologies Used

- React.js
- React Hooks (useState, useEffect, useOrders)
- Custom React components (OrderCard, SearchAndSort, Header)
- Styling with CSS
- Fetch API for fetching order data

## Getting Started

To run the Package Tracker locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/package-tracker.git
```

2. Navigate to the project directory:

```
cd package-tracker
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application should now be running at `http://localhost:3000`.

## Directory Structure

- `src/components/`: Contains the React components used in the application, such as `OrderCard`, `SearchAndSort`, and `Header`.
- `src/hooks/`: Contains the custom hook `useOrders` for fetching and managing order data.
- `src/utils/`: Contains utility functions, such as `filterOrders` and `sortOrders`.
- `src/App.js`: The main entry point of the application.
- `src/App.css`: The global CSS styles for the application.

## Contributing

If you would like to contribute to the Package Tracker project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).