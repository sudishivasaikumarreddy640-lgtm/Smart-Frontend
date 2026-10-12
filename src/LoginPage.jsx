import { useState } from 'react'
import { ArrowRight, LockKeyhole, Mail, UserRound } from 'lucide-react'

export default function LoginPage({ onContinue }) {
  const [mode, setMode] = useState('login')
  const [message, setMessage] = useState('')

  function switchMode(nextMode) {
    setMode(nextMode)
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (mode === 'register') {
      const form = new FormData(event.currentTarget)
      if (form.get('password') !== form.get('confirmPassword')) {
        setMessage('Those passwords do not match. Please try again.')
        return
      }
      setMessage('Account creation is not connected yet. You can still explore the demo workspace.')
      return
    }

    setMessage('Sign-in is not connected yet. Use demo access to explore the workspace.')
  }

  const isRegistering = mode === 'register'

  return (
    <main className="auth-page">
      <section className="auth-showcase" aria-label="About SmartTeams">
        <a className="brand auth-brand" href="#login" aria-label="SmartTeams home">
          <span className="brand-mark"><span /><span /><span /></span><span>SmartTeams</span>
        </a>
        <div className="auth-showcase-copy">
          <span className="auth-kicker"><i /> TEAM FORMATION &amp; SKILL MATCHING</span>
          <h1>Build high-performing teams around the skills that matter.</h1>
          <p>Match project needs with people’s skills, availability, and experience—so every team is ready to do its best work.</p>
        </div>
        <div className="auth-showcase-footer"><span>BETTER TEAMS. BETTER WORK.</span><span>01 — 03</span></div>
        <div className="auth-orbit auth-orbit-one" aria-hidden="true" />
        <div className="auth-orbit auth-orbit-two" aria-hidden="true" />
      </section>

      <section className="auth-panel">
        <div className="auth-mobile-brand" aria-hidden="true">
          <span className="brand-mark"><span /><span /><span /></span><span>SmartTeams</span>
        </div>
        <div className="auth-card">
          <span className="auth-kicker">{isRegistering ? 'GET STARTED WITH SMARTTEAMS' : 'WELCOME BACK'}</span>
          <h2>{isRegistering ? 'Create your account' : 'Sign in to SmartTeams'}</h2>
          <p className="auth-description">{isRegistering ? 'Create your profile to start forming skill-matched project teams.' : 'Sign in to find the right people for your next project.'}</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isRegistering && (
              <label className="auth-field">
                <span>Full name</span>
                <span className="auth-input-wrap"><UserRound size={16} /><input name="name" type="text" autoComplete="name" placeholder="Your name" required /></span>
              </label>
            )}
            <label className="auth-field">
              <span>Email address</span>
              <span className="auth-input-wrap"><Mail size={16} /><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></span>
            </label>
            <label className="auth-field">
              <span>Password</span>
              <span className="auth-input-wrap"><LockKeyhole size={16} /><input name="password" type="password" autoComplete={isRegistering ? 'new-password' : 'current-password'} minLength={8} placeholder="At least 8 characters" required /></span>
            </label>
            {isRegistering && (
              <label className="auth-field">
                <span>Confirm password</span>
                <span className="auth-input-wrap"><LockKeyhole size={16} /><input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} placeholder="Enter your password again" required /></span>
              </label>
            )}
            {!isRegistering && <button className="auth-forgot" type="button" onClick={() => setMessage('Password reset is not configured for this demo.')}>Forgot password?</button>}
            {message && <p className="auth-message" role="status">{message}</p>}
            <button className="auth-submit" type="submit">{isRegistering ? 'Create account' : 'Sign in'} <ArrowRight size={16} /></button>
          </form>

          <div className="auth-switch">
            {isRegistering ? <>Already have an account? <button type="button" onClick={() => switchMode('login')}>Sign in</button></> : <>New to SmartTeams? <button type="button" onClick={() => switchMode('register')}>Create an account</button></>}
          </div>

          <div className="auth-divider"><span>OR</span></div>
          <button className="auth-demo-button" type="button" onClick={onContinue}>Continue to demo workspace <ArrowRight size={15} /></button>
          <p className="auth-demo-note">Demo access · Sign-in and account creation are not connected to an authentication service.</p>
        </div>
        <footer className="auth-footer"><span>© 2026 SMARTTEAMS</span><span>TEAM FORMATION &amp; SKILL MATCHING</span></footer>
      </section>
    </main>
  )
}
