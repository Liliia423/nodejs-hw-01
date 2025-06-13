import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Контактів немає.');
    return;
  }

  console.table(contacts, ['id', 'name', 'email', 'phone']);
};

getAllContacts();
