import { Box, Button, FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import { GoogleIcon } from "../../CustomIcon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/rule";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log("data", data);

  return (
    <Box className="container">
      <form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-[26px] font-bold uppercase">Đăng ký</h1>
        <Box className="mt-2">
          <TextField
            fullWidth
            size="small"
            label="Email"
            type="text"
            variant="outlined"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error-message">{errors.email?.message}</p>
          )}
        </Box>
        <Box className="mt-2">
          <TextField
            fullWidth
            size="small"
            label="Mật khẩu"
            type="password"
            variant="outlined"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error-message">{errors.password?.message}</p>
          )}
        </Box>
        <Box className="mt-2">
          <TextField
            fullWidth
            size="small"
            label="Xác nhận mật khẩu"
            type="password"
            variant="outlined"
            {...register("confirm_password")}
          />
          {errors.confirm_password?.message && (
            <p className="error-message">{errors.confirm_password?.message}</p>
          )}
        </Box>
        <Box className="mt-2">
          <Button
            className="btn-sign-up"
            variant="contained"
            fullWidth
            type="submit"
          >
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
      </form>
    </Box>
  );
}
