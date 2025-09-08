import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <footer className='Footer'>
        <ul>
          <li>Copyright &copy; {today.getFullYear()}</li>
          <li>Contact</li>
          <li>Sources</li>
          <li>Github</li>
        </ul>
    </footer>
  )
}

export default Footer