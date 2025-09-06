import React, { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { seminars, type Seminar } from '../mockData';
import SeminarCard from '../components/SeminarCard';
import SeminarDetailModal from '../components/SeminarDetailModal';

const SeminarListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    seminars.forEach((seminar) => seminar.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredSeminars = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return seminars.filter((seminar) => {
      const matchesSearch =
        q === '' ||
        seminar.title.toLowerCase().includes(q) ||
        seminar.description.toLowerCase().includes(q);
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((tag) => seminar.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [searchTerm, selectedTags]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          ゼミ一覧
        </Typography>
        <Typography color="text.secondary">
          興味のあるゼミを見つけて、知の探求を始めましょう。テキスト検索やタグで絞り込めます。
        </Typography>
      </Box>

      {/* Filter / Search */}
      <Box sx={{ mb: 4, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="キーワード検索 (タイトル、説明)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="subtitle2" sx={{ mr: 1, alignSelf: 'center' }}>
            タグで絞り込み:
          </Typography>
          {allTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onClick={() =>
                setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
              }
              color={selectedTags.includes(tag) ? 'primary' : 'default'}
              variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
              clickable
              sx={{ borderRadius: 1.5 }}
            />
          ))}
        </Box>
      </Box>

      <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // sm以上で常に2列
          }}
        >
          {filteredSeminars.length === 0 ? (
            <Box sx={{ gridColumn: '1 / -1', p: 6, textAlign: 'center', border: '1px dashed', borderColor: 'divider', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>該当するゼミが見つかりませんでした</Typography>
              <Typography color="text.secondary">検索条件やタグを変更して、もう一度お試しください。</Typography>
            </Box>
          ) : (
            filteredSeminars.map((seminar) => (
              <Box key={seminar.id}>
                <SeminarCard
                  seminar={seminar}
                  onClick={() => {
                    setSelectedSeminar(seminar);
                    setModalOpen(true);
                  }}
                />
              </Box>
            ))
          )}
        </Box>


      <SeminarDetailModal
        seminar={selectedSeminar}
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedSeminar(null);
        }}
      />
    </Container>
  );
};

export default SeminarListPage;
