import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import Axios from 'axios';
import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, [submitted]);

  const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
      .then((response) => {
        setUsers(response.data?.response || []);
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        setSubmitted(false);
        setIsEdit(false);
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
        setSubmitted(false);
        setIsEdit(false);
      });
  };

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
      {submitted && <p>Form Submitted!</p>}
      <UsersTable
        rows={users}
        setIsEdit={setIsEdit}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
      />
    </Box>
  );
};

export default Users;
