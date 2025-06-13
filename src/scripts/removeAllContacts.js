import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('Всі контакти видалено.');
};

removeAllContacts();
