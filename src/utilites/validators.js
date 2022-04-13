export const statusValidator = (status) => {
    if (typeof status === "string") {
        return /[a-zA-Z1-9]/.test(status) || status.length === 0;
    }
};