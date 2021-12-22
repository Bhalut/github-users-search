import { useState } from "react";
import UserList from "./UserList";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";

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
      setSearching(true);
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
          inputProps={{ inputMode: "search" }}
          label="Search Users"
          id="fullWidth"
          value={query}
          onChange={handleQuery}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearch();
              event.preventDefault();
            }
          }}
          sx={{
            marginRight: "10px",
            width: "100%"
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
