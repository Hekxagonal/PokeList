import { screen, render } from '@testing-library/react'
import renderTheme from '../../global/theme/render-theme';

import Component from './'

describe('<Loading />', () => {
    const defaultValues = {
        loadingState: {
            isError: false,
            error: undefined
        }
    }
    it('should render', () => {
        renderTheme(<Component {...defaultValues}/>)

        const pokeball = screen.getByTestId('pokeball')
        expect(pokeball).toBeInTheDocument()
    })
})