import { useEffect, useRef, useState } from "react";
import type { ReqResUsersListResponse, User } from "../interfaces";
import axios from "axios";

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUsersListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }

  //se hace la consulta con una promesa
  //axios.get<ReqResUsersListResponse>("https://reqres.in/api/users?page=2")
  //.then((resp) => console.log(resp.data.data));

  //Se lo puede hacer con fetch también a la consulta
  // fetch("https://reqres.in/api/users?page=2")
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data));
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  };

  return {
    //Properties
    users,

    //Methods
    nextPage,
    prevPage,
  };
};
