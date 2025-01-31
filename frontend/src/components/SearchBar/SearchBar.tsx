import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 1,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          variant="outlined"
        />
        <IconButton type="submit" color="primary">
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default SearchBar;