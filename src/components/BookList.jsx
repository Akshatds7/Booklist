import React, { useState } from "react";
import BookForm from "./BookForm";
import Pagination from "./pagination";
import KebabMenu from "./kebabmenu";
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBook, setCurrentBook] = useState(null);
  const booksPerPage = 5;

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book === currentBook ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleEditClick = (index) => {
    setCurrentBook(books[index]);
  };

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <KebabMenu
        onEdit={() => console.log("Edit action triggered")}
        onAdd={() => console.log("Add action triggered")}
        onDelete={() => console.log("Delete action triggered")}
      />
      <BookForm
        addBook={addBook}
        editBook={editBook}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
      />
      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book, index) => (
            <tr key={index}>
              <td>{index + 1 + (currentPage - 1) * booksPerPage}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>
                {" "}
                <KebabMenu
                  onEdit={() =>
                    handleEditClick(index + (currentPage - 1) * booksPerPage)
                  }
                  onAdd={() => console.log("Add action triggered")}
                  onDelete={() =>
                    deleteBook(index + (currentPage - 1) * booksPerPage)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BookList;
