import React, { useState, useContext } from 'react';
import '../App.css';
import { RoleContext } from '../RoleContext';

const BookList = () => {
  const { role } = useContext(RoleContext);

  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  const handleAddBook = () => {
    if (newTitle.trim() === '') {
      alert('Please enter a book title.');
      return;
    }
    if (newAuthor.trim() === '') {
      alert('Please enter the author name.');
      return;
    }
    
    setBooks([...books, { id: Date.now(), title: newTitle, author: newAuthor }]);
    setNewTitle('');
    setNewAuthor('');
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleStartEdit = (id, title, author) => {
    setEditId(id);
    setEditTitle(title);
    setEditAuthor(author);
  };

  const handleSaveEdit = () => {
    setBooks(books.map((book) =>
      book.id === editId ? { ...book, title: editTitle, author: editAuthor } : book
    ));
    setEditId(null);
    setEditTitle('');
    setEditAuthor('');
  };

  return (
    <div className="book-container">
      <h2>Book List ({role})</h2>

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            {editId === book.id ? (
              <div className="edit-section book-row">
                <div>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Edit title"
                  />
                  <input
                    type="text"
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                    placeholder="Edit author"
                  />
                </div>
                {role === 'admin' && (
                  <div className="btn-group">
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="view-section book-row">
                <span><strong>{book.title}</strong> by {book.author}</span>
                {role === 'admin' && (
                  <div className="btn-group">
                    <button onClick={() => handleStartEdit(book.id, book.title, book.author)}>Edit</button>
                    <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {role === 'admin' && (
        <div className="add-section">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New book title"
          />
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            placeholder="Author"
          />
          <button onClick={handleAddBook}>Add Book</button>
        </div>
      )}
    </div>
  );
};

export default BookList;
