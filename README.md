# Voucher Management System

## Overview
This project is a **Voucher Management System** that uses Node.js, Express, and EJS for rendering the frontend. It integrates with SQL Server Express for data storage, and includes features for QR code generation, PDF creation, and configurable settings for vouchers.

---

## Tech Stack
- **Backend Framework**: Node.js with Express
- **Frontend Framework**: EJS (Embedded JavaScript Templates)
- **Database**: SQL Server Express
- **PDF Generation**: [pdf-lib](https://github.com/Hopding/pdf-lib) or similar library
- **QR Code Generation**: [qrcode](https://github.com/soldair/node-qrcode)

---

## Features

### 1. Login System
- Login page created with EJS.
- User authentication using either hardcoded credentials or database-stored credentials.
- Session management using `express-session`.

### 2. Dashboard
- Displays upon successful login.
- Features include:
  - Button to generate a QR code.
  - List of existing vouchers retrieved from the database.

### 3. Generate QR Code
- On button click:
  - Generates a 10-digit random number.
  - Creates a QR code using the `qrcode` package.
  - Stores the QR code details (random number, generated date, expiry date) in the database.
  - Displays a success message.

### 4. PDF Generation
- Button to export a voucher as a PDF.
- PDF includes:
  - Configurable title.
  - Generated date and expiry date.
  - QR code displayed centrally.
  - Proper alignment and design for a professional look.

### 5. Settings Page
- Allows configuration of:
  - Maximum expiry time for vouchers.
  - Voucher dimensions (width and height in mm).
  - Font sizes for titles and regular text.

### 6. Print Voucher
- Button to print the PDF directly from the application.

---

## Installation

### Prerequisites
- Node.js and npm
- SQL Server Express
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd voucher-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the database:
   - Update the database connection details in `config/database.js`.
   - Create necessary tables by running the provided SQL script.

4. Start the application:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## File Structure
```
project-root/
|-- config/
|   |-- database.js       # Database configuration
|-- public/
|   |-- styles/           # CSS files
|   |-- scripts/          # JavaScript files
|-- views/
|   |-- layouts/          # EJS layouts
|   |-- partials/         # EJS partials
|   |-- login.ejs         # Login page
|   |-- dashboard.ejs     # Dashboard page
|   |-- settings.ejs      # Settings page
|-- routes/
|   |-- index.js          # Application routes
|-- utils/
|   |-- pdfGenerator.js   # PDF generation logic
|   |-- qrCodeGenerator.js # QR code generation logic
|-- app.js                # Application entry point
|-- package.json          # Dependencies and scripts
```

---

## Dependencies
- [express](https://github.com/expressjs/express): Web framework for Node.js
- [ejs](https://github.com/mde/ejs): Embedded JavaScript templates
- [express-session](https://github.com/expressjs/session): Session management
- [sequelize](https://github.com/sequelize/sequelize): ORM for SQL Server
- [mssql](https://github.com/tediousjs/node-mssql): SQL Server client for Node.js
- [qrcode](https://github.com/soldair/node-qrcode): QR code generation
- [pdf-lib](https://github.com/Hopding/pdf-lib): PDF creation and modification

---

## Future Enhancements
- Add role-based authentication.
- Implement user-friendly error handling.
- Support additional QR code formats.
- Enable advanced customization options for PDF templates.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

