import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Paper, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { posts } from '../mockData';

const BlogListPage: React.FC = () => {
  // Sort posts by date in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          新着情報
        </Typography>
        <Typography color="text.secondary">
          サークルの活動や成果報告など、最新の情報をお届けします。
        </Typography>
      </Box>
      <Paper variant="outlined">
        <List component="nav">
          {sortedPosts.map((post, index) => (
            <React.Fragment key={post.id}>
                          <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to={`/post/${post.slug}`}>
                              <ListItemText
                                primary={<Typography variant="h6">{post.title}</Typography>}
                                secondary={`${post.date} - ${post.excerpt}`}
                              />
                            </ListItemButton>
                          </ListItem>              {index < sortedPosts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default BlogListPage;
