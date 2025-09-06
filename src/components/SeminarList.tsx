import React, { useRef, useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { seminars, type Seminar } from '../mockData';
import SeminarCard from './SeminarCard';
import SeminarDetailModal from './SeminarDetailModal';

const SeminarList: React.FC = () => {
  const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const latestSeminars = seminars.slice(0, 12); // 任意。増やすとスライド感が出ます
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdgeState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const start = el.scrollLeft <= 0;
    const end = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
    setAtStart(start);
    setAtEnd(end);
  }, []);

  useEffect(() => {
    updateEdgeState();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => updateEdgeState();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateEdgeState]);

  const handleCardClick = (seminar: Seminar) => {
    setSelectedSeminar(seminar);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSeminar(null);
  };

  // 1スワイプ分の距離：カード1枚〜2枚ぶんを目安に
  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // 現在のカード幅を推定（子要素の幅 or ビューポート比）
    const child = el.querySelector<HTMLElement>('[data-carousel-item]');
    const cardWidth = child?.offsetWidth ?? el.clientWidth * 0.8;
    el.scrollBy({ left: dir * (cardWidth + 16 /* gap相当 */), behavior: 'smooth' });
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        {/* スクロール本体 */}
        <Box
          ref={scrollerRef}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            py: 1,
            px: { xs: 1, sm: 2 },
            // スクロールバー非表示（必要なら外してOK）
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {latestSeminars.map((seminar) => (
            <Box
              key={seminar.id}
              data-carousel-item
              sx={{
                flex: '0 0 auto',
                // 画面幅に応じたカードの見え方
                minWidth: { xs: '80%', sm: '46%', md: '24%' }, // 1～4列相当
                scrollSnapAlign: 'start',
              }}
            >
              <SeminarCard seminar={seminar} onClick={() => handleCardClick(seminar)} />
            </Box>
          ))}
        </Box>

        {/* 左右フェード（視覚的に端を示す・任意） */}
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: 40,
              pointerEvents: 'none',
            },
            '&::before': {
              left: 0,
              background:
                'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
              opacity: atStart ? 0 : 1,
              transition: 'opacity .2s',
            },
            '&::after': {
              right: 0,
              background:
                'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
              opacity: atEnd ? 0 : 1,
              transition: 'opacity .2s',
            },
          }}
        />

        {/* 左右ナビボタン */}
        <IconButton
          aria-label="previous"
          onClick={() => scrollByAmount(-1)}
          disabled={atStart}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 4,
            transform: 'translateY(-50%)',
            bgcolor: 'background.paper',
            boxShadow: 2,
            '&:hover': { bgcolor: 'background.paper' },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          aria-label="next"
          onClick={() => scrollByAmount(1)}
          disabled={atEnd}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 4,
            transform: 'translateY(-50%)',
            bgcolor: 'background.paper',
            boxShadow: 2,
            '&:hover': { bgcolor: 'background.paper' },
          }}
        >
          <ChevronRight />
        </IconButton>
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
