import { Box } from "@mui/material";
import UserCard from "../components/UserCard";

const UserList = ({ users }) => {
  const userList = users.data.map((user) => (
    <UserCard user={user} key={user.id} />
  ));

  return (
    <Box sx={{ gridArea: "search" }}>
      <section>
        <p>users found {users.count}</p>
        <Box
          sx={{
            gridArea: "users",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 25rem), 1fr))",
            gridAutoRows: "auto",
            gap: "1rem"
          }}>
          {userList}
        </Box>
      </section>
    </Box>
  );
};

export default UserList;
