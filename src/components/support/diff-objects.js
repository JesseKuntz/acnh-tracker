function areObjectsDifferent(newObj, oldObj) {
  const keys = Object.keys(newObj);

  for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
    const newVal = newObj[keys[keyIndex]];
    const oldVal = oldObj[keys[keyIndex]];

    if ((newVal && !oldVal) || (!newVal && oldVal)) {
      return true;
    }
  }

  return false;
}

export { areObjectsDifferent };
