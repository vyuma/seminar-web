import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Chip } from '@mui/material';
import { type Seminar } from '../mockData';
import MarkdownRenderer from './MarkdownRenderer';

interface SeminarDetailModalProps {
  seminar: Seminar | null;
  open: boolean;
  onClose: () => void;
}

const SeminarDetailModal: React.FC<SeminarDetailModalProps> = ({ seminar, open, onClose }) => {
  if (!seminar) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h4" component="span">{seminar.title}</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          担当: {seminar.lead}
        </Typography>
        <Box sx={{ my: 2 }}>
          {seminar.tags.map((tag) => (
            <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <MarkdownRenderer content={seminar.details} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SeminarDetailModal;
