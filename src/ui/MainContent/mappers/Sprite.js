export const Sprite =
  (sprites) =>
  ([key, src]) => ({
    key,
    src,
    position: sprites.indexOf(key),
  });
