const contactService = require("./db/contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.table(allContacts);

      break;

    case "get":
      const contactById = await contactService.getContactById(id);
      console.table(contactById);

      break;

    case "add":
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      console.table(newContact);

      break;

    case "remove":
      const deleteContact = await contactService.removeContact(id);
      console.table(deleteContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
