import { AXIOM } from "./axiom.js";
import { HOLO_ENGINE } from "./HOLO.engine.js";

const mana = AXIOM.MANA();
const aura = AXIOM.AURA();
const kraft = AXIOM.KRAFT();

this.init = function() {
    HOLO_ENGINE.init();
};

this.update = function() {
    const manaPulse = mana.pulse();
    const auraPulse = aura.resonance();
    const kraftPulse = kraft.impulse();

    this.vital = (manaPulse + auraPulse + kraftPulse) / 3;

    HOLO_ENGINE.update({
        vital: this.vital,
        mana: manaPulse,
        aura: auraPulse,
        kraft: kraftPulse
    });
};
