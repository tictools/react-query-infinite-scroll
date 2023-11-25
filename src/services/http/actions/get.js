export const get = async (resourcePath) => {
  const response = await globalThis.fetch(resourcePath);
  const data = await response.json();

  return data;
};
