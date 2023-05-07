import PropTypes from 'prop-types';


export const ContactsList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>{name}: {number}</li>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
