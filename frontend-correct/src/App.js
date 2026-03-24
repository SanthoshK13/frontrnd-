import { useEffect, useState } from "react";
import { getContacts } from "./api";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm />
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>{c.name} - {c.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
