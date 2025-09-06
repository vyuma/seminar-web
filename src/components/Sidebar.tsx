import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {

  const menuItems = [
    { text: 'ホーム', path: '/', icon: <HomeIcon /> },
    { text: '私たちについて', path: '/page/about', icon: <InfoIcon /> },
    { text: '活動内容', path: '/page/activities', icon: <WorkIcon /> },
    { text: 'ゼミの一覧', path: '/seminars', icon: <SchoolIcon /> },
    { text: '新着情報', path: '/blog', icon: <ArticleIcon /> },
    { text: '部内会則', path: '/page/rules', icon: <GavelIcon /> },
    { text: '団体加盟について', path: '/page/joining', icon: <GroupAddIcon /> },
    { text: '連絡先', path: '/page/contact', icon: <ContactMailIcon /> },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Menu
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      {list()}
    </Drawer>
  );
};

export default Sidebar;
