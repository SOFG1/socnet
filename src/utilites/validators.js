export const statusValidator = (status) => {
    if (typeof status === "string") {
        return /[a-zA-Z1-9]/.test(status) || status.length === 0;
    }
};

export const textValidator = (length) => (text) => {
    if (!text) return {code: 0, message: "Value mustn't be empty !"}
    if (text && text.length > length) return {code: 1, message: `Max length: ${length} characters !`}
    if(text && !/[a-zA-Z1-9]/.test(text)) return {code: 2, message: "Value must contain numbers or letters !"}
    return undefined
}