import style from "../css/Login.module.css";

const Login = (image) => {

  return (
    <div className={style.containerImageLogin}>
      <img src={image.image} width={30} height={30} />
    </div>
  );
};

export default Login;
