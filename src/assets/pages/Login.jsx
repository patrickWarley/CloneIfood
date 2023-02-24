function Login() {
  return (
    <div className="container flex-column d-flex align-items-center justify-content-center">
      <h1 className="fs-1 main-title pb-5"> Hello vamos fazer o login!</h1>
      <form action="" className="d-flex flex-column gap-2 col-md-6 col-12">
        <input className="p-2 text-center border border-0 text-primary bg-secondary" type="text" id="usuario" placeholder="Usuario" />
        <input className="p-2 text-center border border-0 text-primary bg-secondary" type="password" name="password" id="senha" placeholder="Senha" />
        <input className="p-3 fw-bold" type="button" value="Login" />
      </form>
    </div>
  );
}

export default Login;