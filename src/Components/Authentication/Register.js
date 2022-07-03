import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Metadata } from "../../Imports/Index";
import { RegisterInitiate } from "../../redux/Action/ActionAdmin";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    control,
    reset,
  } = useForm();
  const passwords = useRef({});
  const dispatch = useDispatch();
  const { AdminRegister } = useSelector((state) => state.authAdmin);
  passwords.current = watch("password");
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [isLock, setIsLock] = useState(false);
  const [isLocks, setIsLocks] = useState(false);
  const handleSubmitForm = async (data) => {
    const { firstName, lastName, username, email, password } = data;
    console.log(data);
    dispatch(
      RegisterInitiate({ firstName, lastName, username, email, password })
    );
  };
  const handleIsLock = () => {
    setIsLock(!isLock);
  };
  const handleIsLocks = () => {
    setIsLocks(!isLocks);
  };
  useEffect(() => {
    if (AdminRegister.status === 200) {
      reset();
      setIsLocks(false);
      setIsLock(false);
    } else if (AdminRegister.status === 400) {
      toast.error(AdminRegister.msg);
    }
  }, [AdminRegister]);

  return (
    <>
      <Metadata title="Authentication-Admin" />
      <form
        className="sign-up-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
          {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
        </span>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("firstName", { required: true, maxLength: 30 })}
            type="text"
            placeholder="firstName"
            name="firstName"
            id="firstName"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.firstName?.type === "required" &&
            "Mời bạn nhập đầy đủ tên vào!"}
          {errors?.firstName?.type === "maxLength" &&
            "Tên của bạn không được quá 30 kí tự"}
        </span>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("lastName", { required: true, maxLength: 20 })}
            type="text"
            placeholder="lastName"
            name="lastName"
            id="lastName"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.lastName?.type === "required" &&
            "Mời bạn nhập đầy đủ tên vào!"}
          {errors?.lastName?.type === "maxLength" &&
            "Tên của bạn không được quá 20 kí tự"}
        </span>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("username", { required: true, maxLength: 20 })}
            type="text"
            placeholder="username"
            name="username"
            id="username"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.username?.type === "required" &&
            "Mời bạn nhập đầy đủ username vào!"}
          {errors?.username?.type === "maxLength" &&
            "Username của bạn không được quá 20 kí tự"}
        </span>

        <div className="input-field">
          {isLock ? (
            <i className="fa fa-unlock" onClick={handleIsLock} />
          ) : (
            <i className="fas fa-lock" onClick={handleIsLock} />
          )}
          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
              },
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
            })}
            type={isLock ? "type" : "password"}
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Mời bạn nhập đầy đủ mật khẩu. "}
          {errors?.password?.type === "minLength" &&
            "Mật khẩu của bạn phải 6 kí tự trở lên !!"}
          {errors?.password?.type === "pattern" &&
            "Mật khẩu có kí tự in hoa,số và kí tự đặt biệt !"}
        </span>
        <div className="input-field">
          {isLocks ? (
            <i className="fa fa-unlock" onClick={handleIsLocks} />
          ) : (
            <i className="fas fa-lock" onClick={handleIsLocks} />
          )}
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === getValues("password") || "The passwords do not match",
            })}
            type={isLocks ? "type" : "password"}
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.passwordConfirm?.type === "required" &&
            "Mời bạn nhập lại mật khẩu."}
          {errors.passwordConfirm?.type === "validate" &&
            "Mật khẩu nhập lại không khớp!   "}
        </span>
        <input type="submit" className="btn" name="signup" />
      </form>
    </>
  );
};

export default Register;
