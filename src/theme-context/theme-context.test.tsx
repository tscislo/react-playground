import { expect, test, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import {ThemeContextProvider} from "./theme-context.provider";

describe("ThemeContext", () => {

    test('check static text', async () => {
        render(<ThemeContextProvider />);
        expect(await screen.findByTestId('someText')).toHaveTextContent('Some text');
    })

})


