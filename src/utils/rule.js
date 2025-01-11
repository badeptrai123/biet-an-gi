import * as yup from "yup";
const handleConfirmPassword = (refString) => {
  return yup
    .string()
    .required("Xác nhận mật khẩu không được để trống")
    .min(6, "Độ dài xác nhận mật khẩu từ 6-100 kí tự")
    .max(100, "Độ dài xác nhận mật khẩu từ 6-100 kí tự")
    .oneOf([yup.ref(refString)], "Nhập lại mật khẩu không khớp");
};
export const schema = yup.object({
  // fullname: yup.string().trim().required("Tên không được để trống"),
  username: yup
    .string()
    .required("Tên đăng nhập không được để trống")
    .min(6, "Độ dài tên đăng nhập từ 6-100 kí tự")
    .max(100, "Độ dài tên đăng nhập từ 6-100 kí tự"),
  password: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(6, "Độ dài mật khẩu từ 6-100 kí tự")
    .max(100, "Độ dài mật khẩu từ 6-100 kí tự"),
  confirm_password: handleConfirmPassword("password"),
});
