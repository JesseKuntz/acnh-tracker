function dataExists(data) {
  return !(!data || !Object.keys(data).length);
}

export { dataExists };
