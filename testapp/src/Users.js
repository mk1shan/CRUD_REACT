import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import Axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, [submitted]);

  const getUsers = () => {
    setLoading(true);
    Axios.get('http://localhost:3001/api/users')
      .then((response) => {
        setUsers(response.data?.response || []);
        setSubmitted(false);
        setIsEdit(false);
        setError(null);
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        setError('Failed to fetch users. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('http://localhost:3001/api/createuser', payload)
      .then(() => {
        getUsers(); // Call getUsers after successful submission
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        setError('Failed to add user. Please try again.');
        setSubmitted(false);
        setIsEdit(false);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post('http://localhost:3001/api/updateuser', payload)
      .then(() => {
        getUsers(); // Call getUsers after successful update
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        setError('Failed to update user. Please try again.');
        setSubmitted(false);
        setIsEdit(false);
      });
  };


  
const deleteUser =(data) =>{
 


  Axios.post('http://localhost:3001/api/deleteuser', data)
    .then(() => {
      getUsers(); // Call getUsers after successful update
    })
    .catch((error) => {
      console.error('Axios Error:', error);
      setError('Failed to update user. Please try again.');
      setSubmitted(false);
      setIsEdit(false);
    });
}



 return (
   <Box
      sx={{
        width: 'calc(100% - 100px)',
        margin: 'auto',
        marginTop: '100px',
      }}
    >
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        submitted={submitted}
        data={selectedUser}
      />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {submitted && <Typography>Form Submitted!</Typography>}
      <UsersTable
        rows={users}
        setIsEdit={setIsEdit}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={data=>window.confirm('Are you sure?') && deleteUser(data)}
      />
    </Box>
  );
      }

export default Users;
