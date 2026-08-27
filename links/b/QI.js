export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE6",
            axis: obj.axis || "horizontal",
            spread: obj.spread || 0,
            ready: !!obj.ready,
            time: Date.now(),
            keys: Object.keys(obj)
        };
    }
};
