import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



function LoginPage () {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    
    <div className="login-main">
      
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Seja bem-vindo</h2>
            <p>Insira seus dados de acesso</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Lembrar por 30 dias
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Esqueceu sua senha ?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
                
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Não tem uma conta? <a href="#">Criar conta</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
