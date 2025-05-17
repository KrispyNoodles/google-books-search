
// Using Next.js to render this page on the client-side
'use client';

// Importing React's hooks to be used in here
import { useState } from 'react';

export default function Home() {
  
  // State to hold the user’s input in the search bar
  const [query, setQuery] = useState('');

  // State to hold the array of books returned from the API
  const [books, setBooks] = useState([]);

  // State to hold the total number of books from searches
  const [total, setTotal] = useState('');

  // Function that triggers when the user submits the search form
  // function to be async so that await can be used
  const searchBooks = async (e) => {
    e.preventDefault(); // Prevent default form submission which would reload the page

    // Getting response from the API and converting it into a json structured format
    const res = await fetch(
      // encodeURIComponent ensures special characters (like spaces, +, &, etc.) in your search query are properly formatted for a URL.
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
    );
    const data = await res.json(); 

    // Store the results in the state variable, books. If no items are found, fallback to an empty array
    setBooks(data.items || []);

    // Storing the total books found in the state variable, total.
    setTotal(data.totalItems || 0);
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
        <h1 className="text-3xl font-bold mb-6">📚 Joey's Books Search</h1>

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

              // this updates the state variable "query" using the setQuery function
              // the setQuery function is called whenever there is a change in the text box
              // e is the event object that contains the current value inside the input field
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for books here..."
            />
          </div>
        </form>

        <>
          {/* The & function ensures that only when the total state variable is more than 0, then the toal number of books will be revealed */}
          {total > 0 && <p className="text-gray-500 mb-2">
            About {total} results
          </p>}

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
        </>

      </section>
    </main>
  );
}
