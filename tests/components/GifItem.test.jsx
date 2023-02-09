import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

    describe('Pruebas <GifItem />', () => {


        const title = 'title';
        const url = 'https://media.giphy.com/media/l0000001';
        
    test('match a snapshot', async () => {

       const {container} = render(<GifItem title={ title } url={ url } />);
       expect(container).toMatchSnapshot();

    });

    test('Compare title and url', async () => {

        render(<GifItem title={ title } url={ url } />);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe( url );
        expect(alt).toBe( alt );

    });

    test('Debe mostrar el titulo en el componente', async () => {

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    })
});