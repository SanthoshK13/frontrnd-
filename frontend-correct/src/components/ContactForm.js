import { useState } from "react";
import { addContact } from "../api";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    await addContact({
      id: Date.now().toString(),
      name,
      phone
    });
    alert("Added!");
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ContactForm;
