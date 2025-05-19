
export default async function BookPage({ params }) {

  // asynchronous access of `params.id`.
  const { id } = await params

  // retrieving variable from .env file
  const baseUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API;

  // retrieving content from the API
  const res = await fetch(`${baseUrl}/${id}`);

  // error handling
  if (!res.ok) 
    return <div className="p-6">
      Book not found.
      </div>;

  // converting the retrieved type into a json object to be manipulated with
  const book = await res.json();
  const info = book.volumeInfo;

  // removing HTML tags from a string
  const plainTextDescription = info.description?.replace(/<[^>]+>/g, '');

  // This is the JSX that defines what will be rendered in the browser
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{info.title}</h1>
      <p className="italic text-gray-700 mb-4">{info.authors?.join(', ')}</p>

      {info.imageLinks?.thumbnail && (
        <img
          src={info.imageLinks.thumbnail}
          alt="Book cover"
          className="mb-4 border rounded"
        />
      )}

      {/* Displaying the description of the book */}
      <p className="text-sm leading-relaxed">
        {plainTextDescription || 'No description available.'}
      </p>

      {/* New Search */}
      <a
        href="/"
        className="inline-block mt-6 text-blue-600 underline"
      >
        ← New Search
      </a>

    </main>
  );
}
