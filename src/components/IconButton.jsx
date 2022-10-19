import PropTypes from 'prop-types';
import { IconButtonElement } from "./IconButton.styles";

const IconButton = ({ icon, ...props }) => {
  return (
    <IconButtonElement { ...props }>
        { icon }
    </IconButtonElement>
  );
};

IconButton.propTypes = {
  /**
   * Icon which will be shown like content in the IconButton component
   */
  icon: PropTypes.element.isRequired,
  /**
   * State in which the IconButton component will be displayed
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'third']),
  /**
   * Indicates that the IconButton component will has a background color transparent
   */
  transparent: PropTypes.bool,
  /**
   * Function which will be executed when the IconButton component is clicked
   */
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  icon: undefined,
  variant: 'primary',
  transparent: false,
  onClick: undefined
};

export default IconButton;