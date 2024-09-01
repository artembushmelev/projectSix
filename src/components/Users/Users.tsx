import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";
import { UserType } from "./../../App";

interface UsersProps {
  items: UserType[];
  isLoading: boolean;
  onChangeTextHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const Users = ({ items, isLoading, searchValue, onChangeTextHandler }: UsersProps) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input value={searchValue} onChange={onChangeTextHandler} type="text" placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((el) => {
              const fullName = (el.first_name + el.last_name).toLowerCase();
              if (
                fullName.includes(searchValue.toLowerCase()) ||
                el.email.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return true;
              }
            })
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      )}
      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};
