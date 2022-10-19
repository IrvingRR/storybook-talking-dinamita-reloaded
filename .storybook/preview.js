import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'light', value: 'rgb(237, 238, 242)' },
      { name: 'dark', value: 'rgb(20, 21, 45)' },
    ]
  },
  // layout: 'padded'
}