import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (count = 5) => {
  const existingContacts = await readContacts();

  const newContacts = Array.from({ length: count }, () => createFakeContact());

  const updatedContacts = [...existingContacts, ...newContacts];

  await writeContacts(updatedContacts);

  console.log(`Додано ${count} контактів. Загалом: ${updatedContacts.length}`);
};

generateContacts(5);
