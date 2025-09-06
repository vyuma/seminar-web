import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Divider } from '@mui/material';
import { posts } from '../mockData';
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          By {post.author} on {post.date}
        </Typography>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <MarkdownRenderer content={post.content} />
    </Container>
  );
};

export default BlogPage;
