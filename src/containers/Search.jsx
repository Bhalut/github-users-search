import { useState } from "react";
import UserList from "./UserList";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";

const API = "/search/users";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [users, setUsers] = useState({ count: 0, data: [], loading: true });

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (Boolean(query)) {
      setSearching(users.loading);
      const response = await (
        await fetch(`https://api.github.com${API}?q=${query}`)
      ).json();
      setUsers({
        count: response.total_count,
        data: response.items,
        loading: false
      });
      setSearching(false);
    }
  };

  return (
    <Box sx={{ gridArea: "search" }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <TextField
          fullWidth
          label="Search Users"
          id="fullWidth"
          value={query}
          onChange={handleQuery}
          sx={{
            margin: "0 10px",
            width: "75%"
          }}
        />
        <LoadingButton
          loading={searching}
          variant="outlined"
          sx={{ height: 56 }}
          onClick={handleSearch}>
          Search
        </LoadingButton>
      </Box>
      {!users.loading && <UserList users={users} />}
    </Box>
  );
};

export default Search;
