<img src="https://github.com/user-attachments/assets/d93639b8-04a0-45f7-b002-60d72a65bd48" alt="image" width="800"/>

# 📂 Introduction

This repository contains both parts of the technical assessment for the AI Engineer position in AI Singapore.

- **Part 1**: A Python Jupyter Notebook (`part_1.ipynb`) that analyzes word frequency in a text file.
- **Part 2**: A fully functional Google Books search web application.

---

# 📘 Word Frequency (Part 1)

The `part_1.ipynb` file contains a Python function that processes the text file `pg16317.txt` and outputs the **top 10–20 most frequent words**. It demonstrates basic natural language processing techniques and file handling.

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

- ✅ **Issues created to track progress** throughout the development journey
  → [Read the full development process](https://github.com/KrispyNoodles/google-books-search/issues/1)
- ✨ **Core Features of the App:**
  - 🔍 Live book search with query suggestions
  - 📘 Book detail pages with descriptions, authors, and cover images
  - 🔙 Back-to-search navigation
  - 💅 Modern UI using Tailwind CSS
  - 📱 Fully responsive layout that works across desktop, tablet, and mobile devices

## ⚙️ Setup

### 1. Clone the repository

``` bash
git clone https://github.com/your-username/joey-books-search.git
cd joey-books-search
```

### 2. Installing the Tools

Installing nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Reload your terminal to activate nvm:
```bash
source ~/.bashrc
```

Verify that nvm is installed using: 
```bash
nvm --version
```

Install the latest LTS version of Node.js:

⚠️ Note: If you encounter the error:
``sh: 1: next: Permission denied``
it likely means there's a permissions issue with your local dependencies. In that case, try running the installation again.

```bash
nvm install --lts
npm install
```

Verify in a terminal if the installation is done properly by entering the commands below, the versions will be displayed if it is installed correctly:

```bash
node -v
npm -v
```

### 3. Create a .env file (It has been included in this repo since it is a public API)

```python
NEXT_PUBLIC_GOOGLE_BOOKS_API=<your_api_url>
```

### 4. Run the Web App Locally

```bash
npm run dev
```

Now open http://localhost:3000 to use the app.


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
favicon.ico                       → Favicon Logo
```
