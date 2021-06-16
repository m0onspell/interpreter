const mapToReduxState = statePayload => {
  const keys = Object.keys(statePayload);
  const state = [];

  keys.forEach(reference => {
    const { initialValue: score } = statePayload[reference];
    state.push({ score, reference });
  });

  return state;
};

export { mapToReduxState };
