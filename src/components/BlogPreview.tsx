import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography, Paper, ListItemButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { posts } from '../mockData';

const BlogPreview: React.FC = () => {
  // Sort posts by date in descending order and take the latest 3
  const latestPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <Paper variant="outlined">
      <List component="nav" aria-label="main mailbox folders">
        {latestPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={`/post/${post.slug}`}>
                <ListItemText
                  primary={<Typography variant="h6">{post.title}</Typography>}
                  secondary={`${post.date} - ${post.excerpt}`}
                />
              </ListItemButton>
            </ListItem>
            {index < latestPosts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default BlogPreview;
