import React, { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    surname: '',
    phone: '',
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSaveContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({
      name: '',
      surname: '',
      phone: '',
    });
    setShowForm(false);
  };

  const handleCancel = () => {
    setNewContact({
      name: '',
      surname: '',
      phone: '',
    });
    setShowForm(false);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleShowForm}>Додати контакт</button>
      </div>
      {showForm && (
        <div>
          <h2>Форма додавання контакту</h2>
          <label>
            Ім'я:
            <input
              type="text"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            />
          </label>
          <label>
            Прізвище:
            <input
              type="text"
              value={newContact.surname}
              onChange={(e) => setNewContact({ ...newContact, surname: e.target.value })}
            />
          </label>
          <label>
            Телефон:
            <input
              type="text"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            />
          </label>
          <button onClick={handleSaveContact}>Зберегти</button>
          <button onClick={handleCancel}>Скасувати</button>
        </div>
      )}
    </div>
  );
}

export default App;