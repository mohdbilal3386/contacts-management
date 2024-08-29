import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactState } from "../../types/contactTypes";

const initialState: ContactState = {
  contacts: [],
  selectedContact: null,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    viewContact: (state, action: PayloadAction<number>) => {
      state.selectedContact =
        state.contacts.find((contact) => contact.id === action.payload) || null;
    },
  },
});

export const { addContact, updateContact, deleteContact, viewContact } =
  contactSlice.actions;
