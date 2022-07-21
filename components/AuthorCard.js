import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({
  authorObj, onUpdate,
}) {
  const deleteAuthor = () => {
    if (window.confirm('Delete author and their books from your collection?')) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>
            {authorObj.first_name} {authorObj.last_name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authorObj.email}</Card.Subtitle>
          <p className="card-text bold">{authorObj.favorite ? '❤️' : ''} </p>
          <Link href={`/author/${authorObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">
              VIEW
            </Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
          <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" className="m-2" onClick={deleteAuthor}>
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
