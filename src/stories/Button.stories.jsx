import Button from '../components/Button';
import { BiRocket } from "react-icons/bi";

export default  {
    title: 'Default/Button',
    component: Button,
};

const Template = (args) => <Button {...args}/>

// Primary 
export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary'
};

// Secondary 
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    variant: 'secondary'
};

// Third 
export const Third = Template.bind({});
Third.args = {
    label: 'Third',
    variant: 'third'
};

// With icon primary variant
export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'With icon',
    variant: 'primary',
    icon: <BiRocket/>
};

// With icon secondary variant
export const WithIconSecondary = Template.bind({});
WithIconSecondary.args = {
    ...WithIcon.args,
    variant: 'secondary'
};

// With icon third variant
export const WithIconThird = Template.bind({});
WithIconThird.args = {
    ...WithIcon.args,
    variant: 'third'
};

// Rounded
export const Rounded = Template.bind({});
Rounded.args = {
    label: 'Rounded',
    rounded: true
};

// Rounded secondary variant
export const RoundedSecondary = Template.bind({});
RoundedSecondary.args = {
    ...Rounded.args,
    variant: 'secondary'
};

// Rounded third variant
export const RoundedThird = Template.bind({});
RoundedThird.args = {
    ...Rounded.args,
    variant: 'third'
};