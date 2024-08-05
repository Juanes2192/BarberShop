import React from 'react'

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <div className='Footer'>
        <footer><p>&copy; {currentYear} Esteban Perdomo. Casi todos los derechos reservados.</p></footer>
    </div>
  )
}
