export interface Contact {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface ContactState {
  contacts: Contact[];
  selectedContact: Contact | null;
}
