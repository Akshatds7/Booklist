import React, { useState, useEffect } from "react";

const BookForm = ({ addBook, editBook, currentBook, setCurrentBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setPrice(currentBook.price);
    }
  }, [currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      editBook({ title, author, price });
    } else {
      addBook({ title, author, price });
    }
    setTitle("");
    setAuthor("");
    setPrice("");
    setCurrentBook(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Book Author"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">{currentBook ? "Edit Book" : "Add Book"}</button>
    </form>
  );
};

export default BookForm;
