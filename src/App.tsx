import React, { useEffect, useState } from "react";
import "./App.scss";
import { Users } from "./components/Users/Users";
import { Success } from "./components/Success";

// Тут список пользователей: https://reqres.in/api/users

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: {
    url: string;
    text: string;
  };
};

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data: ApiResponse) => {
        setUsers(data.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChangeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} searchValue={searchValue} onChangeTextHandler={onChangeTextHandler} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
