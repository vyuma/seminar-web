import React from 'react';
import { Card, CardContent, CardActionArea, Typography, Box, Chip } from '@mui/material';
import { Seminar } from '../mockData';

interface SeminarCardProps {
  seminar: Seminar;
  onClick: () => void;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ seminar, onClick }) => {
  return (
    <Card 
      elevation={2}
      sx={{
        height: '200px', // Fixed height for uniform size
        width: '564px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.3s',
        '&:hover': { boxShadow: 6 },
      }}
    >
      <CardActionArea 
        onClick={onClick}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <CardContent sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              {seminar.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 1.5 }}>
              担当: {seminar.lead}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{
                mb: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 3, // Adjust line clamp for the new height
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {seminar.description}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
            {seminar.tags.map(tag => <Chip key={tag} label={tag} size="small" />)}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SeminarCard;
