import { UserRow } from ".";
import { useUsers } from "../hooks";

export const UsersPage = () => {
  const { users, prevPage, nextPage } = useUsers();

  return (
    <>
      <h3>Usuarios:</h3>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
            />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </>
  );
};


