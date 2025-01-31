import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import '../styles/global.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="movie-app-container">
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <MovieIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div">
            Movie Search App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export default Layout;