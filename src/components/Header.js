import PropTypes from 'prop-types'
import Button from "./Button";
import {useLocation} from "react-router-dom";

const Header = ({ title, showAddForm, onShowAddFormClick }) => {

  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' &&
        <Button
          color={showAddForm ? 'red' : 'green'}
          text={showAddForm ? 'Close' : 'Add'}
          onClick={onShowAddFormClick}/>
      }
    </header>
  )
}

Header.defaultProps = {
  showAddForm: false
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showAddForm: PropTypes.bool
}

// CSS in JS
// <h1 style={headingStyle} ...>
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
