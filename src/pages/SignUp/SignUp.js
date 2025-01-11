import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import { GoogleIcon } from "../../CustomIcon";

export default function SignUp() {
  return (
    <Box className="container">
      <Box className="sign-up">
        <h1 className="text-center text-[26px] font-bold uppercase">Đăng ký</h1>
        <Box className="mt-2">
          <TextField
            fullWidth
            size="small"
            label="Email"
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
          <TextField
            fullWidth
            size="small"
            label="Xác nhận mật khẩu"
            type="password"
            variant="outlined"
          />
        </Box>
        <Box className="mt-2">
          <Button className="btn-sign-up" variant="contained" fullWidth>
            Đăng ký
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
          Bạn đã có tài khoản.{" "}
          <Link
            className="underline text-[#315dec] hover:text-[#274196] transition-colors"
            to="/login"
          >
            Đăng nhập
          </Link>
        </p>
      </Box>
    </Box>
  );
}
