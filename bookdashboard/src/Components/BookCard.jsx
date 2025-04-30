// src/Components/BookCard.jsx
import React from "react";

export default function BookCard({ book, role, onEdit, onDelete }) {
  return (
    <div style={{ background: "#f0f8ff", padding: "10px", margin: "5px", borderRadius: "8px" }}>
      <p><strong>{book.title}</strong> by {book.author}</p>
      {role === "admin" && (
        <>
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
