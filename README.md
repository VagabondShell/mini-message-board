# Mini Message Board 💬

A dynamic, server-side rendered message board built with Express, TypeScript, and EJS. This project demonstrates core backend routing, form handling, and dynamic URL parameters.

## 🚀 Features

* **View Messages:** A centralized feed displaying all user messages with timestamps.
* **Post New Messages:** An interactive form that accepts user input and securely routes it through a `POST` request.
* **Dynamic Routing:** Dedicated detail pages for individual messages using Express URL parameters (e.g., `/message/:id`).
* **Graceful Error Handling:** Custom 404 error pages to catch out-of-bounds parameters or invalid routes.
* **Modern Styling:** Responsive, card-based CSS layout.

## 🛠️ Built With

* **Backend:** Node.js, Express.js
* **Language:** TypeScript (Strict Mode)
* **Templating:** EJS (Embedded JavaScript)
* **Execution:** `tsx` for seamless TypeScript execution

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/vagabond/mini-message-board.git](https://github.com/vagabond/mini-message-board.git)
   cd mini-message-board
   ```
2. Install the local dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
    npm run dev
    ```
4. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

