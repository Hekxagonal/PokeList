import Component from '.';
import data from './data';

import PokeDoc from './Poke-doc.mdx';

export default {
  title: 'Simple Components/Pokemon',
  component: Component,
  args: { ...data.glaceon, anim: 1 },
  parameters: {
    docs: {
      page: PokeDoc,
    },
  },
};

interface PokeProps {
  name: string;
  types: string[];
  sprites: {
    front_default: string;
    back_shiny: string;
  };
  anim: 1;
}

export const Glaceon = (args: PokeProps) => <Component {...args} />;

export const Lucario = (args: PokeProps) => <Component {...args} />;

Lucario.args = { ...data.lucario };

export const Charizard = (args: PokeProps) => <Component {...args} />;

Charizard.args = { ...data.charizard };

export const Galvantula = (args: PokeProps) => <Component {...args} />;

Galvantula.args = { ...data.galvantula };

export const Sharpedo = (args: PokeProps) => <Component {...args} />;

Sharpedo.args = { ...data.sharpedo };

export const Hydreigon = (args: PokeProps) => <Component {...args} />;

Hydreigon.args = { ...data.hydreigon };

export const Mimikyu = (args: PokeProps) => <Component {...args} />;

Mimikyu.args = { ...data.mimikyu };

export const Roselia = (args: PokeProps) => <Component {...args} />;

Roselia.args = { ...data.roselia };

export const Meloetta = (args: PokeProps) => <Component {...args} />;

Meloetta.args = { ...data.meloetta };

export const NidoranF = (args: PokeProps) => <Component {...args} />;

NidoranF.args = { ...data.nidoranF };

export const Gigalith = (args: PokeProps) => <Component {...args} />;

Gigalith.args = { ...data.gigalith };
