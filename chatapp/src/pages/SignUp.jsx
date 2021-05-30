const SignUp = () => {
  return (
    <>
      <h1>SignUp</h1>
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
          <input type="text" name="name" id="name" placeholder="name"></input>
        </div>
        <button type="submit">新規登録</button>
        <a href="">ログイン</a>
      </form>
    </>
  );
};

export default SignUp;
