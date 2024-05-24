import {render} from "@testing-library/react";
import {EffectHookComponent} from "./effect-hook.component";
import { setupServer } from 'msw/node'
import {charactersHandler} from "../mocks/handlers";

// export const server = setupServer();

describe('EffectHookComponent', () => {

    // beforeAll(() => server.listen())
    // afterEach(() => server.resetHandlers())
    // afterAll(() => server.close())

    it('should create component', async () => {
        // server.use(...charactersHandler);
        // Arrange
        render(
            <EffectHookComponent/>
        )

    });

});
