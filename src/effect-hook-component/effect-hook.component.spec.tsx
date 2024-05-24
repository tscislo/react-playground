import {render, screen} from "@testing-library/react";
import {EffectHookComponent} from "./effect-hook.component";
import { setupServer } from 'msw/node'
import {charactersHandler, harryPotter, hermioneGranger} from "../mocks/handlers";

export const server = setupServer();

describe('EffectHookComponent', () => {

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('should create component', async () => {
        // Arrange
        server.use(...charactersHandler);

        // Act
        render(
            <EffectHookComponent/>
        )

        // Assert
        expect(await screen.findByTestId(harryPotter.id)).toBeDefined();
        expect(await screen.findByTestId(hermioneGranger.id)).toBeDefined();

    });

});
