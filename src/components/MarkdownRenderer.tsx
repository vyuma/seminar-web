import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box } from '@mui/material';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <Box
      sx={{
        color: 'text.primary',
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          mt: 3,
          mb: 2,
          fontWeight: 600,
          color: 'text.primary',
        },
        '& p': {
          lineHeight: 1.7,
          my: 1,
        },
        '& a': {
          color: 'primary.main',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        '& ul, & ol': {
          pl: 3,
        },
        '& code': {
          backgroundColor: 'action.hover',
          px: '4px',
          py: '2px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '0.9em',
        },
        '& pre': {
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#0d1117' : '#f6f8fa',
          borderRadius: '6px',
          p: 2,
          overflowX: 'auto',
        },
        '& pre > code': {
          backgroundColor: 'transparent',
          p: 0,
        },
        '& blockquote': {
          borderLeft: (theme) => `4px solid ${theme.palette.divider}`,
          pl: 2,
          ml: 0,
          fontStyle: 'italic',
          color: 'text.secondary',
        },
        '& hr': {
          border: 'none',
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 4,
        },
        '& table': {
          width: '100%',
          borderCollapse: 'collapse',
          my: 2,
        },
        '& th, & td': {
          border: (theme) => `1px solid ${theme.palette.divider}`,
          p: 1.5,
          textAlign: 'left',
        },
        '& thead > tr': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
