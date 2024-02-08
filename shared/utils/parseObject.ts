export const parseObject = (value: string | null) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};
