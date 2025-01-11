import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import { GoogleIcon } from "../../CustomIcon";
import Logo from "../../assets/logo.png";

export default function SignIn() {
  return (
    <Box className="container">
      <Box className="sign-in">
        <Box className="text-center flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-[150px] h-auto object-cover"
          />
        </Box>
        <h1 className="text-center text-[26px] font-bold uppercase mt-2">
          Đăng nhập
        </h1>
        <Box className="mt-2">
          <TextField
            fullWidth
            size="small"
            label="Username"
            type="text"
            variant="outlined"
          />
        </Box>
        <Box className="mt-2">
          <TextField
            fullWidth
            size="small"
            label="Mật khẩu"
            type="password"
            variant="outlined"
          />
        </Box>
        <Box className="mt-2">
          <Button className="btn-sign-in" variant="contained" fullWidth>
            Đăng nhập
          </Button>
        </Box>
        <span className="text-center">hoặc</span>
        <Button
          className="btn-login-with-google"
          variant="outline"
          fullWidth
          startIcon={<GoogleIcon />}
        >
          Đăng nhập với Google
        </Button>
        <p className="text-center">
          Nếu bạn chưa có tài khoản{" "}
          <Link
            className="underline text-[#315dec] hover:text-[#274196] transition-colors"
            to="/sign-up"
          >
            Đăng ký
          </Link>
        </p>
      </Box>
    </Box>
  );
}
