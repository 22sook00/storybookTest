import React, { useState, useCallback, FC } from "react";
//import "./auth.css";
import styles from "./auth.module.css";
import { SparklesIcon } from "@heroicons/react/24/solid";
import InputError from "../ErrorBoundary/ErrorBoundary";
import Input from "../Common/Input/Input";
import Button from "../Common/Buttons/Button";
import Dropdown from "../Common/Dropdown/Dropdown";
import Modal from "../Common/Modal/Modal";

interface SignupProps {
  onClose: () => void;
  onClick: () => void;
}

const Signup: FC<SignupProps> = ({ onClose, onClick }) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [isChkEmailDupe, setIsChkEmailDupe] = useState(false);
  const [isChkClickEmailDupe, setIsChkClickEmailDupe] = useState(false);

  const [isChkEmailValidation, setIsChkEmailValidation] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isChkPwConfirm, setIsChkPwConfirm] = useState(false);
  const [isChkPwValidation, setIsChkPwValidation] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("선택");
  const [mobile, setMobile] = useState("");

  const [isSignupOk, setIsSignupOk] = useState(false);

  const handleDuplicateEmail = useCallback(async () => {
    console.log("nono");
    setIsChkClickEmailDupe(true);
  }, []);
  //이메일
  const emailValidation = (email: string) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

  // 비밀번호 : 최소 6자이상의 문자, 하나의 숫자, 하나의 특수문자가 들어가야 하는 정규식.
  const pwValidation = (pw: string) => {
    const re = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,}$/;
    return re.test(pw);
  };
  // 전화번호 누를때마다 자동으로 작성되는 로직.
  const handleKeyPressNumber = (phone: any) => {
    if (phone.target.value.length === 3 || phone.target.value.length === 8) {
      phone.target.value += "-";
    }
    if (/^\D*$/.test(phone.key)) {
      phone.target.value = phone.target.value.replace(/[^0-9|\-]/g, "");
    }
    const regex = `/\d{${phone.target.value.length}}/`;
    if (!new RegExp(regex).test(phone.target.value)) {
      phone.target.value = phone.target.value.replace(/[^0-9|\-]/g, "");
    }
  };
  const handleReset = useCallback(() => {
    setEmail("");
    setIsChkEmailValidation(false);
    setPassword("");
    setPasswordConfirm("");
    setIsChkPwValidation(false);
    setIsChkPwConfirm(false);
    setName("");
    setGender("선택");
    setMobile("");
  }, []);

  const handleSubmitSignup = useCallback(
    async (e: any) => {
      e.preventDefault();
      setIsChkEmailValidation(!emailValidation(email));
      setIsChkPwValidation(!pwValidation(password));
      if (password !== passwordConfirm) {
        return setIsChkPwConfirm(true);
      }
      setIsChkPwConfirm(false);
      console.log("nonondata");
    },
    [email, password, passwordConfirm]
  );
  return (
    <>
      {/*{isSignupOk ? (
        <CardModal
          icon={<SparklesIcon />}
          title={"회원가입이 완료되었습니다."}
          desc={"로그인하시고 더 많은 서비스를 이용해주세요"}
        />
      ) : (*/}
      <Modal
        title={"회원가입"}
        desc={"가입을 통해 더 다양한 서비스를 만나보세요!"}
        onClose={onClose}
        onClick={onClick}
      >
        <form className={styles.form_container} onSubmit={handleSubmitSignup}>
          <div style={{ display: "flex", gap: 10 }}>
            <Input
              name={"email"}
              placeholder={"E-mail"}
              value={email}
              setValue={setEmail}
            />
            <Button onClick={handleDuplicateEmail}>중복확인</Button>
          </div>
          <InputError
            confirmTxt={confirmEmail}
            errTxt={
              isChkEmailDupe
                ? "이미 존재하는 아이디 입니다."
                : isChkEmailValidation
                ? "이메일 형식을 확인해주세요."
                : confirmEmail
                ? "사용가능한 이메일 입니다."
                : ""
            }
          />
          <Input
            type="password"
            name={"password"}
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
          />
          <InputError
            errTxt={
              isChkPwValidation &&
              "비밀번호는 최소 6자리의 문자, 하나의 숫자, 하나의 특수문자가 들어가야 합니다."
            }
          />
          <Input
            type="password"
            name={"confirm_password"}
            placeholder={"Confirm Password"}
            value={passwordConfirm}
            setValue={setPasswordConfirm}
          />
          <InputError
            errTxt={isChkPwConfirm && "비밀번호가 일치하지 않습니다."}
          />
          <Input
            name={"name"}
            value={name}
            placeholder={"Name"}
            setValue={setName}
          />
          <Dropdown
            options={["Male", "Female"]}
            selectItem={gender}
            setSelectItem={setGender}
          />
          <Input
            name={"mobile"}
            value={mobile}
            placeholder={"Mobile (optional)"}
            setValue={setMobile}
            onKeyPress={handleKeyPressNumber as any}
          />
          <div>
            <Button onClick={handleReset} type={"reset"}>
              초기화
            </Button>

            <Button
              type={"submit"}
              theme={"secondary"}
              disabled={
                !email ||
                !password ||
                !passwordConfirm ||
                !name ||
                !isChkClickEmailDupe
              }
            >
              회원가입
            </Button>
          </div>
        </form>
      </Modal>
      {/*)}*/}
    </>
  );
};

export default Signup;
