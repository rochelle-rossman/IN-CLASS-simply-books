import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function AuthorCard({ firstName, lastName, email }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,

};

AuthorCard.defaultProps = {
  firstName: 'Rochelle',
  lastName: 'Rossman',
  email: 'rochelle.rossman@gmail.com',
};
export default AuthorCard;
