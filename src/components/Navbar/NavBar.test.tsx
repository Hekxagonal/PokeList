import { fireEvent, screen } from '@testing-library/react';
import renderTheme from '../../global/theme/render-theme';

import Component from './'

describe('<NavBar />', () => {
    const defaultValues = {
    }
    it('should be change theme color', () => {
        renderTheme(<Component {...defaultValues}/>)


        const container = screen.getByTestId('container')
        expect(container).toHaveStyleRule('background', 'rgba(168,0,0,1)')
        const ThemeIcon = screen.getByTestId('themeButton')
        fireEvent(ThemeIcon, new MouseEvent('click', {}))
        expect(container).toHaveStyleRule('background', 'rgba(168,0,0,1)')
    })
    it('should be a title', () => {
        renderTheme(<Component {...defaultValues}/>)


        const title = screen.getByRole('heading', { name: 'PokeList'})
        expect(title).toBeInTheDocument()
    })

    it('should be match snapshot', () => {
        const view = renderTheme(<Component {...defaultValues}/>)

        expect(view).toMatchSnapshot()
    })
})