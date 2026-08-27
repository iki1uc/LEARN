export function coreScan(){
    return {
        id: "CORE6",
        axis: "horizontal",
        spread: 1.0,

        vector: {
            x: 0,      // Breite
            y: 0,      // Markt
            z: 0       // Selbst
        },

        respo360: {
            id: "RESPO6",
            active: true,
            level: 360,
            pulse: Date.now()
        },

        stamp: Date.now()
    };
}
