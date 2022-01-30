import PropTypes from 'prop-types';
import Headshot from '../assets/Headshot.jpg';

const Header = ({ title }) => {
    return (
        <center>
            <img src={Headshot} className="HeadshotPhoto"/>
            <h1 className='Header'>{title}</h1>
            <p>🇨🇦 I like to code and work with new technologies! 🇨🇦</p>
        </center>
    )
};

Header.defaultProps = {
  title: "👋 Hi, I'm Evan",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;