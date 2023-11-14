import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Books({ id, title, author, image, publisher, year }) {
  const router = useRouter();

  const handleDeleteBook = async () => {
    try {
      console.log('Deleting book with id:', id);
      await axios.delete(`/api/books/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl list-card">
      <div className="card-body">
        <h2 className="card-title">{title} ({year})</h2>
        <p>{author} - {publisher}</p>
        <div className="card-actions justify-end">
          <button onClick={() => router.push(`/book/${id}`)} className="btn btn-info">
            Edit
          </button>
          <button onClick={handleDeleteBook} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
