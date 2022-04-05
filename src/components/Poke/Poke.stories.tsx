import Component from ".";
import data from "./data"

export default {
  title: "Simple Components/Pokemon",
  component: Component,
  args: {...data.glaceon},
  argTypes: {
    name: { type: "string" },
    types: { type: "array" },
    sprites: { type: "object" }
  },
};

export const Glaceon = (args: any) => <Component {...args} />;

export const Lucario = (args: any) => <Component {...args} />;

Lucario.args = {...data.lucario}

export const Charizard = (args: any) => <Component {...args} />;

Charizard.args = {...data.charizard}

export const Galvantula = (args: any) => <Component {...args} />;

Galvantula.args = {...data.galvantula}

export const Sharpedo = (args: any) => <Component {...args} />;

Sharpedo.args = {...data.sharpedo}

export const Hydreigon = (args: any) => <Component {...args} />;

Hydreigon.args = {...data.hydreigon}

export const Mimikyu = (args: any) => <Component {...args} />;

Mimikyu.args = {...data.mimikyu}

export const Roselia = (args: any) => <Component {...args} />;

Roselia.args = {...data.roselia}

export const Meloetta = (args: any) => <Component {...args} />;

Meloetta.args = {...data.meloetta}

export const NidoranF = (args: any) => <Component {...args} />;

NidoranF.args = {...data.nidoranF}

export const Gigalith = (args: any) => <Component {...args} />;

Gigalith.args = {...data.gigalith}
