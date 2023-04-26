import React, {
  useCallback,
  useState,
  useContext,
  SetStateAction,
  FC,
} from "react";
import Button from "../Common/Buttons/Button";
import Modal from "../Common/Modal/Modal";
import InputError from "../ErrorBoundary/ErrorBoundary";
import Input from "../Common/Input/Input";
import Line from "../Line/Line";
//import "./auth.css";
import styles from "./auth.module.css";

interface LoginProps {
  onClose: () => void;
  onClick: () => void;
  setIsOpenSignup: React.Dispatch<SetStateAction<boolean>>;
}

const Login: FC<LoginProps> = ({ onClose, onClick, setIsOpenSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChkEmail, setIsChkEmail] = useState(false);
  const [isChkPw, setIsChkPw] = useState(false);

  const handleLogin = useCallback(async (e: any) => {
    e.preventDefault();
    console.log("로그인못함. 왜? 디비없음.");
    //const sendingData = {
    //	email,
    //	password,
    //};
    //try {
    //	const response = await LOGIN(sendingData);
    //	setIsLogin(true);
    //	setUserInfo(response.data);
    //	localStorage.setItem("loginToken", JSON.stringify(response.data));
    //	onClose();
    //} catch (err) {
    //	setIsChkEmail(true);
    //	setIsChkPw(true);
    //	console.dir(err);
    //}
  }, []);

  const handleMoveSignup = useCallback(() => {
    setIsOpenSignup(true);
    onClose();
  }, [onClose, setIsOpenSignup]);

  return (
    <Modal title={"로그인"} onClose={onClose}>
      <form className={styles.form_container} onSubmit={handleLogin}>
        <Input
          name={"email"}
          placeholder={"E-mail"}
          value={email}
          setValue={setEmail}
        />
        <InputError errTxt={isChkEmail && "존재하지 않는 이메일 입니다."} />
        <Input
          type="password"
          name={"password"}
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
        />
        <InputError errTxt={isChkPw && "비밀번호를 확인해주세요."} />
        <div>
          <Button
            disabled={!email || !password}
            type={"submit"}
            theme={"secondary"}
          >
            로그인
          </Button>
        </div>
      </form>
      <div style={{ margin: "0 40px" }}>
        <Line />
      </div>
      <div className={styles.signup_section}>
        <span>아직 회원이 아니신가요?</span>{" "}
        <span onClick={handleMoveSignup}>간편 회원가입</span>
      </div>
    </Modal>
  );
};

export default Login;
