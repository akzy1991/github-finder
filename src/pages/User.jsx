import { useContext, useEffect } from 'react';
import { FaCodePen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import Spinner from '../components/layout/Spinner';
import { useParams } from 'react-router-dom';

import GithubContext from '../context/github/GithubContext';

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    console.log(user);
  });

  // if (loading) {
  //   return <Spinner />;
  // }
  return <div>{user.login}</div>;
};

export default User;
