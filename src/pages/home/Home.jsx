import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://crud-mern2-0-1.onrender.com/book");
      setBooks(res.data.data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Home;
