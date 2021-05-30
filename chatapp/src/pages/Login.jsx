const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
          ></input>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          ></input>
        </div>
        <button type="submit">ログイン</button>
        <a href="">新規登録</a>
      </form>
    </>
  );
};

export default Login;
