const useHandleError = ({ error, setErrorReg, setLoading }) => {
  setLoading(false);
  switch (error) {
    case "Firebase: Error (auth/wrong-password).":
      setErrorReg("Password Incorrecta");
      break;
    case "Firebase: Error (auth/user-not-found).":
      setErrorReg("Email no Registrado");
      break;
    case "Firebase: Error (auth/email-already-in-use).":
      setErrorReg("Este Email ya se encuentra registrado");
      break;
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      setErrorReg("La contraseña debe contener al menos 6 caracteres");
      break;
  }
};

export default useHandleError;
