function hithi(id, opts) {
  let el = null;
  try {
    el = document.getElementById(id);
  } catch (e) {
    throw new Error(e);
  }
}
