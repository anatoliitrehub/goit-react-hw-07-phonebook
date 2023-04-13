import { useDispatch, useSelector } from 'react-redux';
import st from './Contactlist.module.css';
import PropTypes from 'prop-types';
import { removeUser } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const ContactList = () => {
  const contacts = useSelector(state=>state.contacts);
  const filter = useSelector(state=>state.filter);
  const dispatch = useDispatch();
  const handlerRemove = (id) =>{
    dispatch(removeUser(id));
    Notify.success('Contact has been removed');
  }

  return (
    <>
      <ul>
        {contacts&&contacts
          .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
          .map(el => {
            const { id, name, number } = el;
            return (
              <li className={st.listItem} key={id}>
                <span className={st.userName}>{name}:</span>
                <span className={st.userNumber}>{number}</span>
                <button className={st.btn} onClick={() => handlerRemove(id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  removeUser: PropTypes.func,
};

export default ContactList;
