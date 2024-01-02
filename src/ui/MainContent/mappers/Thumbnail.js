export const Thumbnail =
  (sprites) =>
  ([key, src]) => ({
    key,
    src,
    position: sprites.indexOf(key),
  });
