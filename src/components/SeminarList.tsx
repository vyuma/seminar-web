import React, { useState } from 'react';
import { Box } from '@mui/material';
import { seminars, type Seminar } from '../mockData';
import SeminarCard from './SeminarCard';
import SeminarDetailModal from './SeminarDetailModal';

const SeminarList: React.FC = () => {
  const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Display only the first 4 seminars for the homepage preview
  const latestSeminars = seminars.slice(0, 4);

  const handleCardClick = (seminar: Seminar) => {
    setSelectedSeminar(seminar);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSeminar(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -1.5 }}>
        {latestSeminars.map((seminar) => (
          <Box 
            key={seminar.id}
            sx={{ 
              p: 1.5, 
              width: { xs: '100%', sm: '50%', md: '25%' } 
            }}
          >
            <SeminarCard seminar={seminar} onClick={() => handleCardClick(seminar)} />
          </Box>
        ))}
      </Box>
      <SeminarDetailModal 
        seminar={selectedSeminar}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SeminarList;
