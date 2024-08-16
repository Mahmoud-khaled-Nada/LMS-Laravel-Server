import Popup from "./Popup";
import Register from "./Register";
import { Login as LoginPage } from "./Login";
import { changeLogin, changeSignUp } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";

const AuthPage = () => {

  const { isLogin, isSignUp } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();


  const handleLogin = () => {
    dispatch(changeSignUp(false));
    dispatch(changeLogin(true));
  };
  const handleSignUp = () => {
    dispatch(changeLogin(false));
    dispatch(changeSignUp(true));
  };
  return (
    <div className="py-10 ">
      {isLogin && <LoginPage />}
      {isSignUp && <Register />}

      <div className=" flex justify-center gap-2 text-lg text-Primary mt-2">
        {isLogin ? (
          <div className=" flex justify-center gap-2 text-lg text-Primary">
            Not a member yet?
            <button className="text-Secondary" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
        ) : (
          <div className=" flex justify-center gap-2 text-lg text-Primary">
            Are you a member?
            <button className="text-Secondary" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const Auth = () => {
  return <Popup content={<AuthPage />} />;
};

export default Auth;
