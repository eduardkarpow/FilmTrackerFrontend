import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './cssModules/SignIn.module.css'

export default function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
    <div className={styles.signIn}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <Link to = "/watchList" ><button className={styles.signInButton}>Sign-In</button></Link>
        <h6>new to films</h6>
        <Link to="/register" className={styles.createAccount}>Create your film account</Link>
    </div>
    </div>
  )
}
