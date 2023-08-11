async function waitBrowserEvent(eventName, addEventListener) {
    if (!eventName || !addEventListener) {
        throw new Error('eventName or addEventListener are not provided');
    }

    return new Promise((resolve) => {
        addEventListener(eventName, (event) => {
            resolve(event);
        });
    });
}

module.exports = { waitBrowserEvent };
