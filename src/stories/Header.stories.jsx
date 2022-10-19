import Header from '../components/Header';
import HeaderDocComponent from './HeaderDocComponent';
import { screen, userEvent } from '@storybook/testing-library';

export default {
    title: 'CustomComponent/Header',
    component: Header,
    parameters: {
        docs: {
            page: HeaderDocComponent
        },
        layout: 'fullscreen'
    }
};

const Template = (args) => <Header { ...args }/>

export const Logged = Template.bind({});
Logged.args = {
    data: {
        name: 'Henry Smith',
        picture: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg'
    }
};

export const LoggedDark = Template.bind({});
LoggedDark.args = {
    ...Logged.args,
    theme: 'dark'
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    data: undefined
};

export const LoggedOutDark = Template.bind({});
LoggedOutDark.args = {
    ...LoggedOut.args,
    theme: 'dark'
};

export const SearchingData = Template.bind({});
SearchingData.args = { ...Logged.args };