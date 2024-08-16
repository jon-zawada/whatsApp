import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationProvider } from "../contexts/ConversationProvider";

export default function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationProvider id={id}>
        <Dashboard id={id} />
      </ConversationProvider>
    </ContactsProvider>
  );

  return <>{id ? dashboard : <Login onIdSubmit={setId} />}</>;
}
