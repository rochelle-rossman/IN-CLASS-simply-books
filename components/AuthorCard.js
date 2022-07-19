import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({
  authorObj, onUpdate,
}) {
  const deleteAuthor = () => {
    if (window.confirm('Delete Author and their books?')) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authorObj.email}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{authorObj.favorite}</Card.Subtitle>
          <Button variant="danger" className="m-2" onClick={deleteAuthor}>Delete</Button>
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
