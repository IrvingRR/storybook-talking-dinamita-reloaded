import { Option } from './DropdownItem.styles';

const DropdownItem = ({ children }) => {
  return (
    <Option>
        {children}
    </Option>
  );
};

export default DropdownItem;