import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../Books/Book";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((bookId) =>
      parseInt(bookId)
    );
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
