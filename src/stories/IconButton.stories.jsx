import IconButton from '../components/IconButton';
import { BiRocket } from "react-icons/bi";
import IconButtonDocPage from './IconButtonDocPage.mdx';

export default {
    title: 'ExternalFile/IconButton',
    component: IconButton,
    argTypes: {
        icon: {
            control: {
                type: 'text'
            }
        }
    },
    parameters: {
        docs: {
            page: IconButtonDocPage
        }
    }
};

const Template = (args) => <IconButton { ...args }/>

// IconButton primary
export const IconButtonPrimary = Template.bind({});
IconButtonPrimary.args = {
    icon: <BiRocket/>,
    variant: 'primary'
};

// IconButton secondary
export const IconButtonSecondary = Template.bind({});
IconButtonSecondary.args = {
    icon: <BiRocket/>,
    variant: 'secondary'
};

// IconButton third
export const IconButtonThird = Template.bind({});
IconButtonThird.args = {
    icon: <BiRocket/>,
    variant: 'third'
};

// IconButton transparent
export const IconButtonTransparent = Template.bind({});
IconButtonTransparent.args = {
    icon: <BiRocket/>,
    transparent: true
};