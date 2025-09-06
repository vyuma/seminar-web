import React, { useState } from 'react';
import { Grid } from '@mui/material';
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
      <Grid container spacing={3}>
        {latestSeminars.map((seminar) => (
          <Grid item={true} xs={12} sm={6} md={3} key={seminar.id}>
            <SeminarCard seminar={seminar} onClick={() => handleCardClick(seminar)} />
          </Grid>
        ))}
      </Grid>
      <SeminarDetailModal 
        seminar={selectedSeminar}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SeminarList;