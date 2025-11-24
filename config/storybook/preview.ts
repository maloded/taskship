import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'green',
            list: [
                { name: 'light', class: Theme.DAY, color: '#eeeeee' },
                { name: 'dark', class: Theme.NIGHT, color: '#000000' },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.DAY),
        RouterDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
