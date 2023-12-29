const storageFactory = () => {
    const store = [];
    let currentPrimaryKayId = 0;

    const add = (label) => {
        currentPrimaryKayId += 1;
        store.push({
            id: currentPrimaryKayId,
            label: label,
            done: false,
        })
    };
    const toggleDone = (id) => {
        const elementToRemoveIndex = store.findIndex((elem) => elem.id === id);
        if (elementToRemoveIndex !== -1) {
            store[elementToRemoveIndex].done = !store[elementToRemoveIndex].done;
        };
    };

    return {
        store,
        add,
        toggleDone
    };
};

const main = () => {
    // const test = "test";
    // alert("jestem z main")
};

main();