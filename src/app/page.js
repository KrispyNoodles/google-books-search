'use client'; // This tells Next.js to render this page on the client-side because we're using useState and event handlers

import { useState } from 'react'; // Import React's useState hook for managing local state

export default function Home() {
  
  // State to hold the user’s input in the search bar
  const [query, setQuery] = useState('');

  // State to hold the array of books returned from the API
  const [books, setBooks] = useState([]);

  // Function that triggers when the user submits the search form
  const searchBooks = async (e) => {
    e.preventDefault(); // Prevent default form submission which would reload the page


    // Getting response from the API and converting it into a json structured format
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
    );
    const data = await res.json(); 

    // Store the resulting books in state; if no items are found, fallback to an empty array
    setBooks(data.items || []);
  };
  

  // This is the JSX that defines what will be rendered in the browser
  // This is what is being rendered in the browser
  return (
    <main className="flex min-h-screen p-6 max-w-6xl mx-auto bg-white">
      
      {/* Sidebar Logo Section */}
      <aside className="w-48 pr-8 flex-shrink-0">
        <img
          src="/website_logo.png"
          alt="Joey Books Logo"
          className="w-auto h-auto object-contain"
        />
      </aside>

      {/* Main Content Section */}
      <section className="flex-1">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">📚 Joey’s Books Search</h1>

        {/* Search Form */}
        <form onSubmit={searchBooks} className="mb-6">

          <div className="relative w-full max-w-xl">

            {/* Search Icon */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <img
                  src="/website_search_button.png"
                  alt="Joey Books Logo"
                  className="w-full max-w-xl h-[44px] max-h-full object-contain"
                />
              </span>
              
            {/* Input Field */}
            <input
              type="text"
              className="w-full max-w-xl h-[44px] border border-[#DFE1E5] rounded-[23px] px-4 py-3"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for books here..."
            />
          </div>
        </form>

        {/* Book Results */}
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="border-b pb-2">
              <a href={`/book/${book.id}`} className="text-blue-600 underline font-medium">
                {book.volumeInfo.title}
              </a>
              <p className="text-sm text-gray-600">
                {book.volumeInfo.authors?.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
