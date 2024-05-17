'use client';
import { useState, useRef } from 'react';
import { Box, Button, ButtonGroup, Fade, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LightIcon from '@mui/icons-material/LightMode';
import DarkIcon from '@mui/icons-material/DarkMode';
import SystemIcon from '@mui/icons-material/SettingsBrightness';
import { ThemeMode } from '@/src/typings';
import { useThemeModeContext } from '@/src/contexts/theme-mode-context';

export default function Settings() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ openMenu, setOpenMenu ] = useState(false);
  const { themeMode, switchThemeMode } = useThemeModeContext();

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleSwitchTheme = (mode: ThemeMode) => {
    switchThemeMode(mode);
  };

  return (
    <Box>
      <IconButton
        id="fade-button"
        size="medium"
        edge="start"
        color="inherit"
        aria-controls={openMenu ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleToggleMenu}
        ref={buttonRef}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        component="div"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={buttonRef.current}
        open={openMenu}
        onClose={handleToggleMenu}
        TransitionComponent={Fade}
      >
        <MenuItem sx={{
          flexDirection: 'column',
          gap: '10px'
        }}>
          <Typography alignSelf="flex-start" component="p" variant="body1">Mode</Typography>
          <ButtonGroup orientation="vertical">
            <Button
              variant={ themeMode === ThemeMode.LIGHT ? 'contained' : 'outlined' }
              onClick={() => handleSwitchTheme(ThemeMode.LIGHT)}
              startIcon={<LightIcon />}
              sx={{
                textTransform: 'none'
              }}>Light</Button>
            <Button
              variant={ themeMode === ThemeMode.DARK ? 'contained' : 'outlined' }
              onClick={() => handleSwitchTheme(ThemeMode.DARK)}
              startIcon={<DarkIcon />}
              sx={{
                textTransform: 'none'
              }}>Dark</Button>
            <Button
              variant={ themeMode === ThemeMode.SYSTEM ? 'contained' : 'outlined' }
              onClick={() => handleSwitchTheme(ThemeMode.SYSTEM)}
              startIcon={<SystemIcon />}
              sx={{
                textTransform: 'none'
              }}>System</Button>
          </ButtonGroup>
        </MenuItem>
      </Menu>
    </Box>
  );
}
