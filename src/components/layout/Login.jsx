const Login = () => {
  const onClick = (event) => {
    event.preventDefault();
    if (true) {
      return <button onClick={onClick}>로그인</button>;
    } else {
      return <button onClick={onClick}>로그아웃</button>;
    }
    //로그인 페이지로 이동
    //로그인 -> 로그아웃으로 변경
  };
  return <button onClick={onClick}>로그인</button>;
};

export default Login;
