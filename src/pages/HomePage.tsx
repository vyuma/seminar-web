import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';
import SeminarList from '../components/SeminarList';
import BlogPreview from '../components/BlogPreview';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          全国自主ゼミの会
        </Typography>
        <Typography variant="h5" color="text.secondary">
          全国自主ゼミへようこうそ
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Seminars Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          ゼミ一覧
        </Typography>
        <SeminarList />
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Blog Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          最新の投稿
        </Typography>
        <BlogPreview />
      </Box>
    </Container>
  );
};

export default HomePage;
