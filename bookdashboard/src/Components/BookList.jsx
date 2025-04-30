// BookList.jsx
import React, { useState } from 'react';
import '../App.css';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984' },
    { id: 2, title: 'To Kill a Mockingbird' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const addBook = () => {
    if (newTitle.trim() === '') return;
    setBooks([...books, { id: Date.now(), title: newTitle }]);
    setNewTitle('');
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const startEditing = (id, currentTitle) => {
    setEditId(id);
    setEditTitle(currentTitle);
  };

  const saveEdit = () => {
    setBooks(books.map((book) =>
      book.id === editId ? { ...book, title: editTitle } : book
    ));
    setEditId(null);
    setEditTitle('');
  };

  return (
    <div className="book-container">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {editId === book.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {book.title}
                <div className="btn-group">
                  <button onClick={() => startEditing(book.id, book.title)}>Edit</button>
                  <button onClick={() => deleteBook(book.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New book title"
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default BookList;
