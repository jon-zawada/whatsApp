import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState("conversations");
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          className="border-right overflow-auto flex-grow-1"
          style={{ borderRight: "#DEE2E6 1px solid" }}
        >
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div
          className="p-2 border-top border-right small"
          style={{ border: "1px #DEE2E6 solid" }}
        >
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0" onClick={() => setModalOpen(true)}>
          New {conversationsOpen ? "Conversations" : "Contacts"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
