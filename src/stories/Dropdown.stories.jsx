import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

export default {
    title: 'NestedComponents/Dropdown',
    component: Dropdown,
    subcomponents: { DropdownItem }
};

export const EmptyDropdown = (args) => <Dropdown label='Select an option' { ...args }/> 

export const DropdownWithOptions = (args) => (
    <Dropdown label='Select a language' { ...args }>
        <DropdownItem>JavaScript</DropdownItem>
        <DropdownItem>React</DropdownItem>
        <DropdownItem>Angular</DropdownItem>
        <DropdownItem>Vue</DropdownItem>
    </Dropdown>
);