import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./cssModules/Register.module.css"

export default function RegisterComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    
  return (
    <div className={styles.container}>
    <div className={styles.register}>
        <h2>Create account</h2>
        <label htmlFor="name" >Your name</label>
        <input 
            type="text"
            name="name"
            placeholder="First and last name"
            value={name}
            onChange={e=>setName(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input 
            type="text"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}/>
        <label htmlFor="password" >Password</label>
        <input
            type="password"
            name="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={e=>setPassword(e.target.value)}/>
        <label htmlFor="re-password">Re-enter password</label>
        <input 
            type="password"
            name="re-password"
            value={rePassword}
            onChange={e=>setRePassword(e.target.value)}/>
        <button>Create your film account</button>
        <div>Already have an account? <Link to="/login" className = {styles.signIn}>Sign in</Link></div>
    </div>
    </div>
  )
}
