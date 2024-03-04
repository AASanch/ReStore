import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
  isDarkMode: boolean;
  onThemeChanged: (isDarkMode: boolean) => void;
}

export default function Header({ isDarkMode, onThemeChanged }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">ReStore</Typography>
        <Switch
          checked={isDarkMode}
          onChange={(e) => {
            onThemeChanged(e.target.checked);
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
