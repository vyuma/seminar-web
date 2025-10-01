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
          全国自主ゼミサークルの会
        </Typography>
        <Typography variant="h5" color="text.secondary">
          全国自主ゼミサークルへようこそ
        </Typography>
      </Box>


      <Divider sx={{ my: 4 }} />

      {/* imageの貼り付け */}
      <Box sx={{ my: 4 }}>
        <img src="src/assets/image.png" alt="全国自主ゼミの会" style={{ width: '100%', borderRadius: '8px' }} />
      </Box>

      {/* Seminars Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          全国自主ゼミサークルとは
        </Typography>
        <Typography variant="body1" color="text.secondary">
          全国自主ゼミサークルは、全国の学生が自主的に集まり、学び合うためのコミュニティです。
        </Typography>
      </Box>

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
