import PropTypes from 'prop-types';
import { ButtonElement } from './Button.styles';

/**
 * Button component with different variants that allow you implement a styled button and customizable in your application
 */

const Button = ({ icon, label, variant, ...props }) => {
  return (
    <ButtonElement variant={ variant && variant.toLowerCase() } { ...props }>
      { icon }
      { label }
    </ButtonElement>
  );
}

Button.propTypes = {
  /**
   * Is the content show it in the button component
   */
   label: PropTypes.string.isRequired,
  /**
   * Allow you choose a specific variant to the button
   * [Primary, Secondary, Third]
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'third']),
  /**
   * Indicate that the button must be rounded
   */
  rounded: PropTypes.bool,
  /**
   * Allow you add an icon to the button
   * Recive the icon component or the tag with the icon class
   */
  icon: PropTypes.element,
  /**
   * Is the function that will be executed when the button is clicked
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  label: 'Click me',
  variant: 'primary',
  rounded: false,
  icon: undefined,
  onClick: undefined
}

export default Button;