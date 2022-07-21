/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth();

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  }, [user.uid]);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>

      <div className="author-cards d-flex flex-wrap justify-content-center">
        {/* map over books here using BookCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>
    </div>
  );
}
