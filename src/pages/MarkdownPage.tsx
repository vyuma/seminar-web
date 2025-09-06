import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Vite 5: use query + import
const markdownModules: Record<string, () => Promise<unknown>> =
  import.meta.glob('../content/*.md', {
    query: '?raw',
    import: 'default',
  });

const MarkdownPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError('');

      // ざっくりサニタイズ（任意）
      const safe = (slug ?? '').replace(/[^a-zA-Z0-9-_]/g, '');
      const path = `../content/${safe}.md`;

      const loader = markdownModules[path];
      if (!loader) {
        setError('Page not found.');
        setLoading(false);
        return;
      }

      try {
        const raw = await loader(); // string を受け取る
        setContent(raw as string);
      } catch {
        setError('Could not load content.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) loadContent();
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
