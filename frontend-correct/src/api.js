const API_URL = "http://YOUR-ELASTIC-BEANSTALK-URL/contacts";

export const getContacts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addContact = async (data) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};
