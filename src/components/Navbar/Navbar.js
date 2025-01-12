import React from 'react';
import { Link, useNavigate, useNavigation, useRoutes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import './Navbar.scss';

const pages = [
  { name: 'Về chúng tôi', path: '/for-us' },
  { name: 'Món ăn đã lưu', path: '/mon-an-da-luu' },
  { name: 'Quản lý món ăn', path: '/quan-ly-mon-an' },
];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleRedirectToProfile = () => {
    navigate('/profile')
  }
  const handleRedirectToLogout = () => {
    navigate('/log-in')
  }

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="a" href="/" className="navbar-logo">
            <img
              src={logo}
              alt="Website Logo"
              className="navbar-logo-image"
            />
          </Box>
          <Box className="navbar-menu" sx={{ justifyContent: 'center', flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                className="navbar-menu-item"
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box className="login">
            <Link className="text-[#496ae4] hover:text-[#101f35] transition-colors font-bold" to="/sign-in">
              Đăng nhập
            </Link>
          </Box>
          <Box className="navbar-avatar">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className="navbar-avatar-button cursor-pointer">
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              className="navbar-avatar-menu"
            >
              <MenuItem onClick={handleRedirectToProfile} className="navbar-avatar-menu-item">
                <Typography textAlign="center">Trang cá nhân</Typography>
              </MenuItem>
              <MenuItem onClick={handleRedirectToLogout} className="navbar-avatar-menu-item">
                <Typography textAlign="center">Đăng xuất</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
