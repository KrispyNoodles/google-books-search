// Using Next.js to render this page on the client-side
'use client';

// Importing React's hooks to be used in here
import { useState } from 'react';

export default function Home() {
  
  // State Variable to hold the user’s input in the search bar
  const [query, setQuery] = useState('');

  // State Variable to hold the array of books returned from the API
  // As long as books is empty, the list of books will not be displayed
  const [books, setBooks] = useState([]);

  // State Variable to hold the total number of books from searches
  const [total, setTotal] = useState(0);

  // Function that triggers when the user submits the search form
  // default function cannot be async so it has to be called and created seperately
  const searchBooks = async (e) => {    

    // retrieving variables from .env file
    const baseUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API;

    e.preventDefault(); // Prevent default form submission which would reload the page

    // Getting response from the API and converting it into a json structured format
    const res = await fetch(
      // encodeURIComponent ensures special characters (like spaces, +, &, etc.) in your search query are properly formatted for a URL.
      `${baseUrl}?q=${encodeURIComponent(query)}`
    );
    const data = await res.json(); 

    // Store the results in the state variable, books. If no items are found, fallback to an empty array
    setBooks(data.items || []);

    // Storing the total books found in the state variable, total.
    setTotal(data.totalItems || 0);
  };
  
  // This is the JSX that defines what will be rendered in the browser
  return (
    <main className="flex min-h-screen p-10 max-w-6xl mx-auto bg-white">
      
      {/* Main Logo Section */}
      <aside className="w-50 flex-shrink-0">
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

          {/* Styling required div to merge both Icon and Input fields together */}
          <div className="relative w-full max-w-md">
              
            {/* Input Field */}
            <input
              type="text"
              className="w-full max-w-md h-11 border border-gray-300 rounded-xl px-13 py-2"
              value={query}

              // this updates the state variable "query" using the setQuery function
              // the setQuery function is called whenever there is a change in the text box
              // e is the event object that contains the current value inside the input field
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for books here..."
            />

            {/* Sidebar Logo Section */}
            <span className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-400">
              <img
                src="/website_search_button.png"
                alt="Joey Books Search Button Logo"
                className="w-full max-w-xl h-11 max-h-full object-contain"
              />
            </span>
          </div>
        </form>

        {/* Style not necessarily important therefore <> (React Fragments) are enough*/}
        <>
          {/* The & function ensures that only when the "total" state variable is more than 0, then the toal number of books will be revealed */}
          {total > 0 && 
            <p className="text-gray-500 mb-2">
              About {total} results
            </p>
          }

          {/* Book Results */}
          <ul className="space-y-4">

            {/* Mapping the book results to be printed */}
            {books.map((book) => (
              <li key={book.id} className="border-b pb-2">

                {/* This links to the next page of the book */}
                {/* Indicating the q as the query for the user to retrun back to */}
                <a href={`/book/${book.id}?q=${encodeURIComponent(query)}`} 
                  className="text-blue-600 underline font-medium">
                  
                  {/* Displaying the book's title */}
                  {book.volumeInfo.title}
                </a>

                {/* Displaying the book's authors */}
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
