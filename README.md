# smart-scan

# InvoiceScanner App

InvoiceScanner is a sophisticated app that leverages OCR (Optical Character Recognition) technology to simplify expense reporting and accounting for users. By allowing users to take photos of their invoices, the app automatically detects, extracts, and categorizes information into a digital format, making finance management a breeze.

## Screens

### Home Page
Features a simple user interface to capture invoices using the camera or upload from the gallery.

- **Behavior:** Users can choose to click a new picture of an invoice or upload from their device. The app applies OCR to extract relevant data.
- **Layout:** Minimalist design with a primary focus on the camera and gallery icons.

## Components

### Camera Functionality
Integrated camera module for capturing invoices directly through the app.

- **Behavior:** Opens the device’s camera, allows for image focus and capture with a clear, simple interface. Overlay guidelines help position the invoice for optimal data recognition.
- **Design:** Utilizes a simplistic camera interface with high contrast icons. The capture button is prominently displayed using a vibrant accent color.

### Gallery Upload
Option to select and upload invoice images from the device's gallery.

- **Behavior:** Accesses the device gallery; users can select an image of an invoice to be processed.
- **Design:** Simple, grid format display of images with a light background. Selected images are highlighted with a vibrant border.

### OCR Processing Module
Processes the image to detect text and figures relevant to financial transactions.

- **Behavior:** The system scans the uploaded image, recognizes text elements using OCR technology, and extracts data like date, amount, and vendor.
- **Design:** Displays processing status with a discreet indicator, presenting the information in a straightforward layout post-processing.

### Data Categorization Interface
Enables users to review, edit, and categorize extracted information.

- **Behavior:** Users can edit or confirm the accuracy of the extracted data. Allows categorization into predefined or custom categories for easy management.
- **Design:** Edit fields are clearly defined, using light shades with the edit options presented in standout vibrant colors for clarity.

### Tagging Functionality
Allows users to add custom tags to scanned invoices for better organization.

- **Behavior:** Provides an option to tag invoices based on projects, events, or any custom category, aiding in financial management and reporting.
- **Design:** Tagging interface uses chips or labels with vibrant colors to differentiate tags, editable on a tap.

## Design Principles Applied

- **Light Base and Strategic Colors:** The app employs a predominantly white or light-colored background to create a clean, minimalistic interface. Vibrant colors are used for buttons and interactive elements to catch user attention and guide interactions efficiently.

- **Typography and Hierarchy:** Utilizes varied text sizes and weights to establish a clear visual hierarchy, ensuring ease of reading and facilitating a straightforward user journey.

- **Generous Whitespace:** The layout is designed with ample whitespace around elements, which avoids visual clutter and enhances usability—particularly important for professionals on the go.

- **Simple Navigation Bar:** Features a simplified top-aligned navigation bar that provides seamless accessibility to all major functionalities such as Home, History, Settings, etc.

- **Standout CTAs:** Designed to be noticeable and accessible, CTAs such as 'Save', 'Edit', and 'Confirm' use vibrant, contrasting colors ensuring they are easy to find and use.

- **Emphasized Key Information:** Key data points extracted from invoices, such as amounts and dates, are highlighted with size, color, and placement to ensure they stand out immediately after scanning.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/smart-scan.git
cd smart-scan
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
