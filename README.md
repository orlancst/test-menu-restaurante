# Web Menu Restaurant for ByHours - Carpe Diem Establishments

This project aims to digitalize room service for ByHours hotels and Carpe Diem motels by providing an interactive web interface for customers to order meals and beverages directly from their rooms. The application improves operational efficiency and enhances the customer experience by eliminating manual steps and reducing potential errors.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

1. **Interactive Menu**
   - Browse categorized menu items with descriptions, pricing, and customization options.
   - Seamless navigation to select items and view order summaries.

2. **Room-Specific QR Code Access**
   - Scan a unique QR code to access the menu, linked to the room number automatically or manually.

3. **Real-Time Order Processing**
   - Orders are sent directly to the kitchen, reducing the need for intermediary staff.

4. **Order Tracking**
   - View the current status of orders in real time (e.g., "Preparing," "On the Way").

5. **Admin Panel (Future Development)**
   - Modify menu prices and options dynamically.
   - Access detailed sales statistics for informed decision-making.

6. **Feedback Collection**
   - Customers can provide quick feedback on the ordering experience.

---

## Technologies Used

- **Frontend Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Integration:** Designed for connection with the Horus Hotel management system
- **Cross-Platform Support:** Mobile-friendly interface accessible via web browsers (Android and iOS).

---

## Requirements

- Node.js v16 or higher
- A modern web browser (Google Chrome, Safari, etc.)
- QR code generator or scanner (for testing room-specific access)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/orlancst/mvp_menu_restaurante_front.git
   cd restaurant-web-menu
   npm run dev
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

---

## Usage

- Scan the room-specific QR code to access the web menu.
- Browse the menu and select desired items.
- Confirm the order.
- Optional: Submit the satisfaction survey.

---

## Future Improvements
- Add high-quality images for each menu item.
- Extend tracking functionality to display detailed order stages.
- Develop a comprehensive admin panel for real-time menu management and analytics.
- Scale the system for broader use across multiple establishments.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---