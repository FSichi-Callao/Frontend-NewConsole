export const getRoutesOrderForMenu = (id, routes) => {

    var updateValue = routes.map((resValue, idx) => idx === id
        ? { ...resValue, open: !resValue.open }
        : { ...resValue, open: false }
    );

    return updateValue;
}