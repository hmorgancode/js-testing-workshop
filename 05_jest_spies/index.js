
/**
 * Takes an arrow key input and navigates to the appropriate choice.
 * @param  {array} inputs       An array of refs to input elements.
 * @param  {object} event        An input event object
 */
export function handleInputGroupKeyPress(inputs, event) {
  event.preventDefault();

  const keyName = event.key;
  const navKeys = ['Left', 'Right'];
  if (!navKeys.includes(keyName)) {
    return;
  }

  // selectedInnputIndex is the item the user is leaving, not entering
  const selectedInputIndex = inputs.findIndex((input) => event.target === input);
  let newIndex;

  const goesRight = keyName === 'Right';
  const goesLeft = !goesRight;

  if (selectedInputIndex === 0 && goesLeft) {
    newIndex = inputs.length - 1;
  } else if (selectedInputIndex === inputs.length - 1 && goesRight) {
    newIndex = 0;
  } else if (goesRight) {
    newIndex = selectedInputIndex + 1;
  } else {
    newIndex = selectedInputIndex - 1;
  }

  inputs[newIndex].focus();

  // dispatch('Left');
}
