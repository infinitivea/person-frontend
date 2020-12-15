import jwt_decode from 'jwt-decode';

const setToken = (token) => {
  localStorage.setItem('ACCESS_TOKEN', token);
};

const getToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

const removeToken = () => {
  localStorage.clear();
};

const getRole = () => {
  if (getToken()) {
    return 'USER';
  }
  return 'GUEST';
};

const getId = () => {
  if (getToken()) {
    const id = jwt_decode(localStorage.getItem('ACCESS_TOKEN')).id;
    return id;
  }
  return { id: '' };
};

export default {
  setToken,
  getToken,
  removeToken,
  getRole,
  getId,
};
