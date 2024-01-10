import { Box } from '@mui/material'; // Import Box component from Material-UI

// Import UserForm and UsersTable components
import UserForm from './UserForm';
import UsersTable from './UsersTable';

const users = [
  {
    id: 1,
    name: 'mudipa',
  },
  {
    id: 2,
    name: 'kishan',
  }
];

const Users = () => {
  return (
    <Box
     sx ={{
      width:'calc(100% - 100px)',
      margin:'auto',
      marginTop:'100px',

     }}
     
     >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
