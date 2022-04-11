import { screen } from '@testing-library/react';
import Component from './index';
import renderTheme from '../../global/theme/render-theme';
import formatName from './format';

describe('<PokeProfile />', () => {
  const defaultValues = {
    name: 'glaceon',
    types: ['ice', 'fire'],
    sprites: {
      front_default: 'frontURL',
      back_shiny: 'backURL',
    },
    anim: 1,
  };

  it('format func should be working', () => {
    const pikachu = formatName('pikachu');
    const nidoranF = formatName('nidoran-f');
    const nidoranM = formatName('nidoran-m');
    const eeveeE = formatName('eevee-e');

    expect(pikachu).toBe('Pikachu');
    expect(nidoranF).toBe('Nidoran♂');
    expect(nidoranM).toBe('Nidoran♀');
    expect(eeveeE).toBe('Eevee');
  });
  it('should be a processed name', () => {
    renderTheme(<Component {...defaultValues} />);

    const heading = screen.getByRole('heading', {
      name: formatName(defaultValues.name),
    });
    expect(heading).toBeInTheDocument();
  });
  it('should be two types', () => {
    renderTheme(<Component {...defaultValues} />);

    const iceType = screen.getByText('ICE');
    const fireType = screen.getByText('FIRE');
    expect(iceType).toBeInTheDocument();
    expect(fireType).toBeInTheDocument();
  });
  it('should be only a type', () => {
    const values = { ...defaultValues };
    values.types.pop();
    renderTheme(<Component {...values} />);

    const iceType = screen.getByText('ICE');
    const fireType = screen.queryByText('FIRE');
    expect(iceType).toBeInTheDocument();
    expect(fireType).toBe(null);
  });

  it('should match snapshot', () => {
    const view = renderTheme(<Component {...defaultValues} />);

    expect(view).toMatchSnapshot();
  });
});
