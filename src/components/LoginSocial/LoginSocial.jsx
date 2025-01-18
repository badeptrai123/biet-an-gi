import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authApi from "../../apis/auth";
import { setAccessTokenToLs, setProfileToLs } from "../../utils/auth";
import { loginUser } from "../../redux/slices/UserSlice";
import Loading from "../Loading/Loading";

export default function LoginSocial() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const login = async () => {
      const data = Object.fromEntries([...params]);
      console.log("data: ", data);
      try {
        const res = await authApi.googleAuthCallback(data.code);
        if (res.data.accessToken) {
          setAccessTokenToLs(res.data.accessToken);
        }
        if (res.data.user) {
          dispatch(loginUser(res.data.user));
          setProfileToLs(res.data.user);
          navigate("/");
          window.location.reload();
        } else {
          navigate("/profile");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };
    login();
  }, [params, dispatch, navigate]);

  return (
    <div>
      <Loading />
    </div>
  );
}
