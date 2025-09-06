import React, { useState, useMemo } from 'react';
import { Container, Typography, Box, Grid, Chip, TextField } from '@mui/material';
import { seminars, type Seminar } from '../mockData';
import SeminarCard from '../components/SeminarCard';
import SeminarDetailModal from '../components/SeminarDetailModal';

const SeminarListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Memoize the calculation of all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    seminars.forEach(seminar => {
      seminar.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Memoize the filtering logic to avoid re-calculation on every render
  const filteredSeminars = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    // Start with the full list
    return seminars.filter(seminar => {
      // Check if the seminar matches the search term (in title or description)
      const matchesSearch = lowercasedSearchTerm === '' ? true : 
        seminar.title.toLowerCase().includes(lowercasedSearchTerm) ||
        seminar.description.toLowerCase().includes(lowercasedSearchTerm);

      // Check if the seminar has all of the selected tags
      const matchesTags = selectedTags.length === 0 ? true : 
        selectedTags.every(tag => seminar.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchTerm, selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleCardClick = (seminar: Seminar) => {
    setSelectedSeminar(seminar);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSeminar(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          ゼミ一覧
        </Typography>
        <Typography color="text.secondary">
          興味のあるゼミを見つけて、知の探求を始めましょう。テキスト検索やタグで絞り込めます。
        </Typography>
      </Box>

      {/* Filter Controls */}
      <Box sx={{ mb: 4, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <TextField 
          fullWidth
          variant="outlined"
          label="キーワード検索 (タイトル、説明)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="subtitle2" sx={{ mr: 1, alignSelf: 'center' }}>タグで絞り込み:</Typography>
          {allTags.map(tag => (
            <Chip 
              key={tag}
              label={tag}
              onClick={() => handleTagClick(tag)}
              color={selectedTags.includes(tag) ? 'primary' : 'default'}
              variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
              clickable
            />
          ))}
        </Box>
      </Box>

      {/* Seminar List */}
      <Grid container spacing={3}>
        {filteredSeminars.map((seminar) => (
          <Grid item={true} xs={12} sm={6} md={4} key={seminar.id}>
            <SeminarCard seminar={seminar} onClick={() => handleCardClick(seminar)} />
          </Grid>
        ))}
      </Grid>

      <SeminarDetailModal 
        seminar={selectedSeminar}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default SeminarListPage;
