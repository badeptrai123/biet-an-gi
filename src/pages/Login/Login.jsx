import { Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../CustomIcon";
import Logo from "../../assets/logo.png";
import { schema } from "../../utils/rule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.scss";
import authApi from "../../apis/auth";
import { toast } from "react-toastify";
import { setProfileToLs } from "../../utils/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/UserSlice";

const signinSchema = schema.pick(["username", "password"]);

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await authApi.login(data);
      if (res.status === 200) {
        dispatch(loginUser(res.data.user));
        setProfileToLs(res.data.user);
        toast.success("Đăng nhập thành công");
        navigate("/");
      } else {
        toast.error("Đăng nhập thất bại");
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      window.open("https://bietangi.onrender.com/auth/google", "_self");
    } catch (error) {
      console.log(error);
    }
  };

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
          onClick={handleLoginGoogle}
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
