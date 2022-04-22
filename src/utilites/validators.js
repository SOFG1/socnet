export const statusValidator = (status) => {
  if (typeof status === "string") {
    return /[a-zA-Z1-9]/.test(status) || status.length === 0;
  }
};

export const emailValidator = (email) => {
  if (!(email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
    return { code: 4, message: "Invalid email address" };
  }
};

export const textValidator = (maxLength) => (text) => {
  if (!text) return { code: 0, message: "Value mustn't be empty !" };
  if (text && text.length > maxLength)
    return { code: 1, message: `Max length: ${maxLength} characters !` };
  if (text && !/[a-zA-Z1-9]/.test(text))
    return { code: 2, message: "Value must contain numbers or letters !" };
  return undefined;
};

export const authValidator = (login) => {
  if (login && login.length < 4)
    return { code: 2, message: "Min length is 4 characters !" };
  if (login && login.length > 20)
    return { code: 3, message: "Max length is 20 characters !" };
  if (login && !/[a-zA-Z]/.test(login))
    return { code: 1, message: "Value must contain letters !" };
  if (!login) return { code: 0, message: "This field is required" };
  return undefined;
};
