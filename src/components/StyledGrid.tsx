import styled from 'styled-components';

const gap = '24px'; // Corresponds to theme.spacing(3)

/**
 * For the main seminar list page. Creates a responsive grid 
 * that fills columns automatically.
 */
export const SeminarListGrid = styled.div`
  display: grid;
  gap: ${gap};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

/**
 * For the homepage seminar preview. Creates a responsive grid with
 * 1, 2, or 4 columns depending on screen size.
 */
export const HomepageGrid = styled.div`
  display: grid;
  gap: ${gap};
  grid-template-columns: 1fr;

  // Corresponds to MUI sm breakpoint
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Corresponds to MUI md breakpoint
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
