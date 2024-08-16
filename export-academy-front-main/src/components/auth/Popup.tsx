import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeLogin, changeSignUp } from "@/store/slices/userSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface Props {
  content: React.ReactNode;
}

const Popup: React.FC<Props> = ({ content }) => {
  const { isLogin, isSignUp } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(changeSignUp(false));

    dispatch(changeLogin(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={isLogin || isSignUp}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="w-[280px] sm:w-[350px] md:w-[450px]  lg:w-[500px]">{content}</div>
      </Dialog>
    </React.Fragment>
  );
};

export default Popup;
