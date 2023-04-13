// import { Component } from 'react';
import { useState } from 'react';
import st from './Contactform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'redux/contactsSlice';
// import { addUser } from 'redux/actions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const ContactForm = () => {
 const dispatch = useDispatch();
 const contacts = useSelector(state=>state.contacts)

  const [name,setName] = useState('')
  const [number,setNumber] = useState('')

  const handleAddUser = e => {
    e.preventDefault();
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())||
    contacts.find(el => el.number === number)) {
      Notify.failure(`${name} or ${number} is already in contacts`);
      return;
    }
    // addUser({name,number});
    dispatch(addUser({name,number}));
    Notify.success(`Contact ${name} has been added`);

    e.target.reset()
    setName('');
    setNumber('')
  };

  
    return (
      <form action="#" onSubmit={handleAddUser} className={st.form}>
        <label htmlFor="" className={st.labelName}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={st.name}
            value={name}
            onChange={e=>setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={number}
            onChange={e=>setNumber(e.target.value)}
            required
          />
        </label>
        <button className={st.addContact}>Add contact</button>
      </form>
    );
  }

