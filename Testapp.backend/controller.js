const users = [
    {
      id: 1,
      name: 'mudipa',
    },
    {
      id: 2,
      name: 'imayanga',
    },
  ];
  
  const getUsers = (cb) => {
    cb(users);
  };
  
  const getUserById = (id, cb) => {
    const user = users.find((user) => user.id === id);
    cb(user);
  };
  
  exports.getUsers = getUsers;
  exports.getUserById = getUserById;
  