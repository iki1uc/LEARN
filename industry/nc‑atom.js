import { Molecule } from "./molecule.js";

export function NC_ATOM_UNIVERSE() {

    const water = Molecule.H2O();
    const oxygen = Molecule.O2();
    const co2 = Molecule.CO2();

    return {
        water,
        oxygen,
        co2,
        mix: [water, oxygen, co2],
        timestamp: Date.now()
    };
}
