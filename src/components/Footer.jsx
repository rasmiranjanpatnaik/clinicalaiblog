import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
      <li><Link to="/post/categories/:Agriculter">Agriculter</Link></li>
      <li><Link to="/post/categories/:Business">Business</Link></li>
      <li><Link to="/post/categories/:Education">Education</Link></li>
      <li><Link to="/post/categories/:Entertaiment">Entertaiment</Link></li>
      <li><Link to="/post/categories/:Art">Art</Link></li>
      <li><Link to="/post/categories/:Investment">Investment</Link></li>
      <li><Link to="/post/categories/:Uncategorized">Uncategorized</Link></li>
      <li><Link to="/post/categories/:Weather">Weathe</Link></li>
      </ul>
      <div className='footer__copyright'>
        <small>All Rights Reserved &copy; Copyright, ClinicalAiassitance private Limited. </small>
      </div>

    </footer>
  )
}

export default Footer