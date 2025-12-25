# Personal Blog Website

A fully responsive personal blog website built with **React**, **TypeScript**, and **Tailwind CSS**.  
The application provides a modern blog experience with article browsing, filtering, searching, pagination, and interactive article pages featuring comments and likes.

---

## ✨ Features

### 🏠 Home Page

- Displays the **latest blog posts**
- Clean and responsive layout
- Optimized for all screen sizes

### 📰 Articles Page

- Feed of blog articles with:
  - **Search functionality**
  - **Post filtering**
- Displays a maximum of **6 posts per page**
- **Pagination system** with page selector at the bottom
- Smooth navigation between pages

### 📄 Article Page

- Article header with metadata (date, reading info, etc.)
- Full article content
- **Like button** for user interaction
- **Comment system**:
  - Add new comments
  - Display existing comments
- **Related articles** section for better content discovery

---

## 🛠 Tech Stack

- **React.js** – UI development
- **TypeScript** – Type safety and maintainability
- **Tailwind CSS** – Utility-first styling
- **React Router DOM** – Client-side routing
- **Context API** – Global state management
- **NanoID** – Unique ID generation
- **Moment.js** – Date and time formatting
- **React Icons** – Icon library

---

## 📁 Project Structure

```bash
src/
│── assets/
│── classes/
│── components/
│── context/ # Context API providers
│── data/ # Static or mock blog data
│── fonts/
│── interface/
│── pages/
│── App.tsx # Root component
│── index.css
└── main.tsx # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mahmoud46/DailyMe-Personal-Blog.git

# Navigate to the project folder
cd DailyMe-Personal-Blog

# Install dependencies
npm install
```

### Run

```bash
npm run dev
```

## 🧭 Routing Overview

| Route                   | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `/`                     | Home page with latest posts                       |
| `/articles/feed`        | Articles feed with search, filter, and pagination |
| `/articles/:article_id` | Individual article page                           |
