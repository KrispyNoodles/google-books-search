export default async function BookPage({ params }) {

  // retrieving content from the API
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`);
  if (!res.ok) return <div className="p-6">Book not found.</div>;

  // converting the retrieved type into a json object to be manipulated with
  const book = await res.json();
  const info = book.volumeInfo;

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

      <p className="text-sm leading-relaxed">{info.description || 'No description available.'}</p>

      <a
        href="/"
        className="inline-block mt-6 text-blue-600 underline"
      >
        ← Back to Search
      </a>
    </main>
  );
}
