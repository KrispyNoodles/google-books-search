<img src="https://github.com/user-attachments/assets/d93639b8-04a0-45f7-b002-60d72a65bd48" alt="image" width="800"/>

# 📂 Introduction

This repository contains both parts of the technical assessment for the AI Engineer position in AI Singapore.

- **Part 1**: A Python script (`part_1.ipynb`) that analyzes word frequency in a text file.
- **Part 2**: A fully functional Google Books search web application.

---

# 📘 Word Frequency (Part 1)

The `part_1.ipynb` file contains a Python function that processes a given text file and outputs the **top 10–20 most frequent words**. It demonstrates basic natural language processing techniques and file handling.

---

# 📚 Google Books Search (Part 2)

This is my **first-ever web application** — a Google Books Search interface. Although this was a 5-day assessment, I devoted quite some time to learning the **fundamentals of web development**, including React and Next.js.

The app is a clean, responsive book search interface powered by the [Google Books API](https://developers.google.com/books), built using:

- **Next.js 14 App Router**
- **React 18**
- **Tailwind CSS**

It supports live searching, detailed book pages, and new search navigation.

## 🖼️ Preview
![video_demo](https://github.com/user-attachments/assets/7de9fd76-c1ff-45b4-b548-d0f8a147a294)

## 🚀 Features of This Repo

- 📘 **Full documentation of the learning process** for Web Development and React Fundamentals  
  → [Read the documentation](https://github.com/KrispyNoodles/google-books-search/wiki/Documentation-on-Learning-Process)

- ✅ **Issues created to track progress** throughout the development journey → [Read the full development process](https://github.com/KrispyNoodles/google-books-search/issues/1)
- ✨ **Core Features of the App:**
  - 🔍 Live book search with query suggestions
  - 📘 Book detail pages with descriptions, authors, and cover images
  - 🔙 Back-to-search navigation
  - 💅 Modern UI using Tailwind CSS
  - 📱 Fully responsive layout that works across desktop, tablet, and mobile devices

## ⚙️ Setup

### 1. Clone the repository

``git clone https://github.com/your-username/joey-books-search.git``

cd joey-books-search
2. Install dependencies
bash
Always show details

Copy
npm install
```


# 📁 Project Structure
``` Python
google-books-search
/src/app/
  ├─ page.js                      → Home (search page)
  └─ /book/[id]/page.js           → Book Page
/public/
  ├─ website_logo.png             → App logo
  └─ website_search_button.png    → Search Button logo
.env                              → Environment variables
favicon.ico                        → Favicon Logo
```
