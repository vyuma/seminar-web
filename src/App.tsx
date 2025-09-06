import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getTheme } from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import SeminarListPage from './pages/SeminarListPage';
import BlogListPage from './pages/BlogListPage';
import MarkdownPage from './pages/MarkdownPage';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header colorMode={colorMode} onMenuClick={handleDrawerToggle} />
        <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<BlogPage />} />
          <Route path="/seminars" element={<SeminarListPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/page/:slug" element={<MarkdownPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
