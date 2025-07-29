import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {describe, expect, test} from 'vitest'
import {ThemeCharacterComponent} from "./theme-character.component";
import {Theme} from "./theme-context";
import {ThemeContextProvider} from "./theme-context.provider";

describe("ThemeContext", () => {

    test('check static text', async () => {
        const renderResult = render(<ThemeContextProvider/>);
        expect(await screen.findByTestId('someText')).toHaveTextContent('Some text');
        renderResult.unmount();
    })

    test('check if changing theme affects the theme in child components', async () => {
        // ARRANGE
        const renderResult = render(
                <ThemeContextProvider>
                    <ThemeCharacterComponent />
                </ThemeContextProvider>
        );


        // ACT
        await userEvent.click(screen.getByTestId('theme-selector'));
        await userEvent.click(screen.getByTestId('dark-theme'));

        // ASSERT
        expect(await screen.getByTestId('theme')).toHaveTextContent(Theme.DARK);

        renderResult.unmount();
    })

})


