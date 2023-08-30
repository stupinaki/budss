export function throttle(f, ms) {
    let isWait = false;
    let savedArguments;
    let saveThis;

    return function () {
        if (isWait) {
            savedArguments = arguments;
            saveThis = this;
            return;
        }
        f.apply(this, arguments);
        isWait = true;

        setTimeout(() => {
            isWait = false
            if(savedArguments && saveThis) {
                f.apply(saveThis, savedArguments);
                saveThis = null;
                savedArguments = null;
            }
        }, ms);
    }
}
