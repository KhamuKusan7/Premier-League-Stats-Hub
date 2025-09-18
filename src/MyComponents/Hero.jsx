import React from 'react'

const Hero = () => {
  return (
    <section className='Hero'>
        <h1>Welcome to Premier League Stats Hub</h1>
        <p>View your favourite players, teams, history, and PL Hall of Fames—all in one place.</p>
        <div className='hero-buttons'>
            <a href='/PlayerStats' className='btn primary'>Explore Players</a>
            <a href='/Clubs' className='btn secondary'>Discover Teams</a>
        </div>
    </section>
  )
}

export default Hero