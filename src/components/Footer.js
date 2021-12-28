import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; {new Date().getFullYear()}</h4>
      <Link to="/about">About</Link>
      {/*<Link to='/about'>About</Link>*/}
    </footer>
  )
}

export default Footer
