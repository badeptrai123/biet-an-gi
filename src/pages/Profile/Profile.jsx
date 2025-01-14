import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./Profile.scss";

export default function Profile() {
  return (
    <>
      <Box className="container">
        <Box className="profile">
          <h1 className="text-center text-[30px]">Trang cá nhân</h1>
          <Box className="profile-header">
            <Box className="left">
              <Avatar
                alt="Kevin dev"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <h3 className="font-bold">Kevin dev</h3>
                <p className="text-[13px] text-[#6c6b6b] mt-1">
                  kevindev0509@gmail.com
                </p>
              </Box>
            </Box>
            <Button variant="contained" color="primary">
              Chỉnh sửa
            </Button>
          </Box>
          <Box className="profile-content">
            <FormControl defaultValue="" className="form">
              <Box className="profile-info-item">
                <FormLabel htmlFor="fullname">Họ và tên:</FormLabel>
                <TextField
                  id="fullname"
                  fullWidth
                  size="small"
                  type="text"
                  variant="outlined"
                  value="Kevin dev"
                  disabled
                />
              </Box>

              <Box className="profile-info-item">
                <FormLabel htmlFor="username">Tên đăng nhập:</FormLabel>
                <TextField
                  id="username"
                  fullWidth
                  size="small"
                  type="text"
                  variant="outlined"
                  value="kevindev0509"
                  disabled
                />
              </Box>

              <Box className="profile-info-item">
                <FormLabel htmlFor="email">Email:</FormLabel>
                <TextField
                  id="email"
                  fullWidth
                  size="small"
                  type="email"
                  variant="outlined"
                  value="kevindev0509@gmail.com"
                  disabled
                />
              </Box>

              <Box className="profile-info-item">
                <FormLabel htmlFor="nickname">Biệt danh:</FormLabel>
                <TextField
                  id="nickname"
                  fullWidth
                  size="small"
                  type="text"
                  variant="outlined"
                  value="Kevin dev"
                  disabled
                />
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2} className="w-100">
          <Grid size={8}>1</Grid>
          <Grid size={4}>2</Grid>
          <Grid size={4}>3</Grid>
          <Grid size={8}>4</Grid>
        </Grid>
      </Box>
    </>
  );
}
