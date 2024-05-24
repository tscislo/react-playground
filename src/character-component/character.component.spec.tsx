import {render, screen} from "@testing-library/react";
import {CharacterComponent} from "./character.component";

describe('CharacterComponent', () => {


    it('should render character component with name and date of birth', async () => {
        // Arrange
        render(<CharacterComponent name={'John Doe'} dateOfBirth={'1990-01-01'}/>)
        // Assert
        expect(await screen.findByText('John Doe')).toBeDefined();
        expect(await screen.findByText('1990-01-01')).toBeDefined();
    });
});
