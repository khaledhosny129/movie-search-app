import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import Layout from "./components/Layout/Layout";
import { Movie, FavoriteMovie } from "./types/movie";
import * as movieApi from "./api/movieApi";
import "./styles/global.css";

function App() {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const data = await movieApi.getFavorites();
      setFavorites(data);
    } catch (error) {
      console.error("Failed to load favorites:", error);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      const data = await movieApi.searchMovies(query);
      setSearchResults(data.Search || []);
      setActiveTab(0);
    } catch (error) {
      console.error("Failed to search movies:", error);
      setSearchResults([]);
    }
  };

  const handleToggleFavorite = async (movie: Movie | FavoriteMovie) => {
    try {
      if ("id" in movie) {
        await movieApi.removeFromFavorites(movie.id);
        setFavorites(favorites.filter((fav) => fav.id !== movie.id));
      } else {
        const newFavorite = await movieApi.addToFavorites(movie as Movie);
        setFavorites([newFavorite, ...favorites]);
      }
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  return (
    <div className="app-container">
      <Layout>
        <SearchBar onSearch={handleSearch} />
        <div className="tabs-container">
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
          >
            <Tab label="Search Results" />
            <Tab label={`Favorites (${favorites.length})`} />
          </Tabs>
        </div>
        {activeTab === 0 ? (
          <MovieList
            movies={searchResults}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <MovieList
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </Layout>
    </div>
  );
}

export default App;
