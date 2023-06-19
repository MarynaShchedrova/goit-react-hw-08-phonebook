import { loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/contacts/selectors';
import { Button, Card, CardBody, SimpleGrid, Text } from '@chakra-ui/react';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && !error && loader}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            <Card>
              <CardBody>
                <Text fontSize="lg">
                  <strong>&#8226;</strong>
                  {name}: {number}
                </Text>
                <Button
                  class={css.contactListItemBtn}
                  size="xs"
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>
          </li>
        ))}
      </SimpleGrid>
    </>
  );
};
