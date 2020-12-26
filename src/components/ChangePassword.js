import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";

export default () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        user.changePassword(password, newPassword, (err, result) => {
          if (err) console.error(err);
          console.log(result);
        });
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="password">Old Password</label>
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <label htmlFor="newPassword">New Password</label>
        <input
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
        />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};
