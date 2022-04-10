import { screen } from '@testing-library/react';
import renderTheme from '../../global/theme/render-theme';

import Component from './';

describe('<Loading />', () => {
  const defaultValues = {
    loadingState: {
      isError: false,
      error: undefined,
    },
  };
  it('should be render pokeBall parts', () => {
    renderTheme(<Component {...defaultValues} />);

    const pokeBall = screen.getByTestId('pokeBall');
    const ballBorder = screen.getByTestId('ballBorder');
    const ballButton = screen.getByTestId('ballButton');
    expect(pokeBall).toBeInTheDocument();
    expect(ballBorder).toBeInTheDocument();
    expect(ballButton).toBeInTheDocument();
  });
  it('should be match theme colors', () => {
    renderTheme(<Component {...defaultValues} />);

    const ballBorder = screen.getByTestId('ballBorder');
    const ballButton = screen.getByTestId('ballButton');
    expect(ballBorder).toHaveStyleRule('border', `3px solid rgba(0,0,0,1)`);
    expect(ballButton).toHaveStyleRule(
      'border-top',
      `3px solid rgba(168,0,0,1)`,
    );
  });
  it('should be show Error Message', () => {
    const values = { isError: true, error: { message: 'Error Message' } };
    renderTheme(<Component loadingState={values} />);

    const pokeBall = screen.queryByTestId('pokeBall');
    const errorMessage = screen.getByRole('heading', {
      name: values.error.message,
    });
    expect(pokeBall).not.toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const view = renderTheme(<Component {...defaultValues} />);

    expect(view).toMatchSnapshot();
  });
});
