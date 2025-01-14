import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../CustomIcon";
import Logo from "../../assets/logo.png";
import { schema } from "../../utils/rule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.scss";

const signinSchema = schema.pick(["username", "password"]);

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data) => console.log("data", data);

  return (
    <Box className="login-container">
      <form className="sign-in" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("username")}
          />
          {errors.username?.message && (
            <p className="error-message">{errors.username?.message}</p>
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
          <Button
            className="btn-sign-in"
            variant="contained"
            fullWidth
            type="submit"
          >
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
            to="/register"
          >
            Đăng ký
          </Link>
        </p>
      </form>
    </Box>
  );
}
