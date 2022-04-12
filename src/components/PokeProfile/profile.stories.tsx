import Component from '.';
import data from './data';

export default {
  title: 'Templates/PokeProfile',
  component: Component,
  args: {
    sprites: data.umbreon.sprites,
    gender: data.umbreon.gender,
  },
  argTypes: {
    sprites: {
      type: 'object',
      control: 'radio',
      options: {
        Umbreon_MostCommon: data.umbreon.sprites,
        Meowstic_MissingSprites: data.meowstic.sprites,
        Hippopotas_AllSprites: data.hippopotas.sprites,
        Vespiquen_OnlyFemale: data.vespiquen.sprites,
        thundurus_OnlyMale: data.thundurus.sprites,
      },
    },
  },
};

export const Umbreon_MostCommon = (args: any) => <Component {...args} />;

export const Meowstic_MissingSprites = (args: any) => <Component {...args} />;

Meowstic_MissingSprites.args = {
  sprites: data.meowstic.sprites,
  gender: data.meowstic.gender,
};

export const Hippopotas_AllSprites = (args: any) => <Component {...args} />;

Hippopotas_AllSprites.args = {
  sprites: data.hippopotas.sprites,
  gender: data.hippopotas.gender,
};

export const Vespiquen_OnlyFemale = (args: any) => <Component {...args} />;

Vespiquen_OnlyFemale.args = {
  sprites: data.vespiquen.sprites,
  gender: data.vespiquen.gender,
};

export const Thundurus_OnlyMale = (args: any) => <Component {...args} />;

Thundurus_OnlyMale.args = {
  sprites: data.thundurus.sprites,
  gender: data.thundurus.gender,
};
