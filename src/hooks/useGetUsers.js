import { useEffect, useState } from "react";

const useGetUsers = (API, query) => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await fetch(`https://api.github.com${API}?q=${query}`);
    setUsers(response.items);
  }, []);

  return users;
};

export default useGetUsers;
