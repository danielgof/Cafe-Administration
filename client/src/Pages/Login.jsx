import React, { useEffect, useState, useRef } from 'react'

const Login = () => {
  const useRef = useRef();
  const errRef = errRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setPwd('');
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href="#">Go to the home page</a>
          </p>
        </section>
      ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : 
      "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Singn In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          ref={userRef}
          onChange={(e) => setPassword(e.target.value)}
          value={pwd}
          required
        />
        <button> Sign In </button>
      </form>
      <p>
        Need an account?<br />
        <span class="line">
          <a href='#'> Sign in</a>
        </span>
      </p>
    </section>
    )}
    </>
  )

}


export default Login