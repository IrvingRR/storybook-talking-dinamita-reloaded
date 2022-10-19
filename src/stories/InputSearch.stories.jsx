import InputSearch from '../components/InputSearch';
import { screen, userEvent } from '@storybook/testing-library';

export default {
    title: 'PlayFunction/SearchInput',
    component: InputSearch
};

const Template = (args) => <InputSearch { ...args }/>

export const InputSearching = Template.bind({});
InputSearching.args = {
    type: 'text',
    name: 'search',
    placeholder: 'Search'
};

export const InputSearchDark = Template.bind({});
InputSearchDark.args = {
    ...InputSearching,
    theme: 'dark'
};

// PlayFunction

export const NoResultsCase = Template.bind({});
NoResultsCase.args = { ...InputSearching.args };

NoResultsCase.play = async () => {
    const input = screen.getByPlaceholderText(/Search/i);
    await userEvent.type(input, "Look mom, I'm writing alone wiiii!", {
        delay: 200
    });
};

export const FoundResults = Template.bind({});
FoundResults.args = { ...InputSearching.args };

FoundResults.play = async () => {
    const input = screen.getByPlaceholderText(/Search/i);
    await userEvent.type(input, "clementina dubuque", {
        delay: 200
    });
};