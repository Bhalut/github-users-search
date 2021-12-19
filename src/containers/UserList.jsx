import Box from "@mui/material/Box";
import UserItem from "../components/UserItem";

const UserList = ({ users }) => {
  const userList = users.data.map((user) => (
    <UserItem user={user} key={user.id} />
  ));

  return (
    <Box sx={{ gridArea: "search" }}>
      <section>
        <p>users found {users.count}</p>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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
