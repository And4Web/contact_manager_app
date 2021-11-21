import PropTypes from 'prop-types';

function Header(props) {
  const {branding} = props;
  return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>


  )
}

Header.defaultProps = {
  branding: "Contact Manager"
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}

export default Header;