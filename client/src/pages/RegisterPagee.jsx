import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//user regex to validate rut
const USER_REGEX = /^[0-9]+-[0-9kK]$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function RegisterPage() {
//   const userRef = useRef(null);
//   const errRef = useRef(null);

  const [user, setUser] = useState();
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState();
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwd2, setPwd2] = useState();
  const [validPwd2, setValidPwd2] = useState(false);
  const [pwd2Focus, setPwd2Focus] = useState(false);

  const [errMessage, setErrMessage] = useState();
  const [succes, setSucces] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);

    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);

    setValidPwd(result);
    const match = pwd === pwd2;
    setValidPwd2(match);
  }, [pwd, pwd2]);

  useEffect(() => {
    setErrMessage("");
  }, [user, pwd, pwd2]);

  return (
    <section>
      <p
        ref={errMessage}
        className={errMessage ? "errMessage" : "offscreen"}
        aria-live="assetive"
      >
        {" "}
        {errMessage}{" "}
      </p>
      <h1 style={{color:'black',textAlign:'center',alignItems:'center'}}>Register Page</h1>
      <form>
        <label htmlFor="rut"> 
          Rut:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className= {validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
            </span>
        </label>
        <input
          type="text"
          id="rut"
        //   ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={!validName}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          <span>El rut debe tener el formato 12345678-9</span>
        </p>
      </form>
    </section>
  );
}

export default RegisterPage;
