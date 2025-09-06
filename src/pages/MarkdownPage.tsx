import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Vite feature to import all markdown files from a directory
const markdownModules = import.meta.glob('../content/*.md', { as: 'raw' });

const MarkdownPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError('');
      const path = `../content/${slug}.md`;
      if (markdownModules[path]) {
        try {
          const moduleContent = await markdownModules[path]();
          setContent(moduleContent);
        } catch (e) {
          setError('Could not load content.');
        }
      } else {
        setError('Page not found.');
      }
      setLoading(false);
    };

    if (slug) {
      loadContent();
    }
  }, [slug]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography variant="h4" align="center" color="error">
          {error}
        </Typography>
      )}
      {!loading && !error && <MarkdownRenderer content={content} />}
    </Container>
  );
};

export default MarkdownPage;
