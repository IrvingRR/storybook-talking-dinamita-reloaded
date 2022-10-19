import PropTypes from 'prop-types';
import { BiMenuAltLeft, BiChevronDown } from "react-icons/bi";
import { HeaderElement, Logo, User, Picture } from './Header.styles';
import { Box } from './Global-elements.styles';
import IconButton from './IconButton';
import InputSearch from "./InputSearch";
import Button from './Button';

const Header = ({ theme, data }) => {
  return (
    <HeaderElement theme={ theme }>
        <Box>
            <IconButton variant='third' icon={<BiMenuAltLeft/>}/>
            <Logo href='#' theme={ theme }>
                Wool
                <span>Fel</span>
            </Logo>
        </Box>
        <InputSearch theme={ theme } placeholder='Search'/>
        {
          data &&
          <User theme={ theme }>
              <Picture src={ data.image }/>
              <p>{ data.name }</p>
              <IconButton transparent variant='third' icon={<BiChevronDown/>}/>
          </User>
        }

        {  
          !data &&
          <Box>
            <Button label='Sign in'/>
            <Button label='Sign up' variant='secondary'/>
          </Box>
        }
        
    </HeaderElement>
  );
};

Header.propTypes = {
  /** 
   * Depending of the theme argument will change the style of the Header component
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /** 
   * Is the information in which will be displayed in the Header component
   */
  data: PropTypes.object
};

Header.defaultProps = {
  theme: 'light',
  data: undefined
};

export default Header;