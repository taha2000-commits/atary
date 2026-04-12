export const removeEmptyValues = (object = {}) =>
  Object.fromEntries(Object.entries(object).filter(([, v]) => v !== ""));
