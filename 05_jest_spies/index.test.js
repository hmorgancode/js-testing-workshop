import { handleInputGroupKeyPress } from '.';

describe('handleInputGroupKeyPress', () => {
  let inputs;
  let event;

  beforeEach(() => {
    inputs = new Array(5).fill(0).map(() => ({
      focus: jest.fn(),
    }));
  });

  describe('When current input is the first input', () => {
    it('uses left arrow to go to the last input', () => {
      event = {
        preventDefault: () => null,
        target: inputs[0],
        key: 'Left',
      };
      handleInputGroupKeyPress(inputs, event);
      expect(inputs[4].focus).toHaveBeenCalled();
    });
  });

  describe('When current input is the last input', () => {
    it('uses right arrow to go back to the first input', () => {
      event = {
        preventDefault: () => null,
        target: inputs[4],
        key: 'Right',
      };
      handleInputGroupKeyPress(inputs, event);
      expect(inputs[0].focus).toHaveBeenCalled();
    });
  });

  describe('When current input is neither the first nor the last input', () => {
    it('uses left arrow to go left one input', () => {
      event = {
        preventDefault: () => null,
        target: inputs[1],
        key: 'Left'
      };
      handleInputGroupKeyPress(inputs, event);
      expect(inputs[0].focus).toHaveBeenCalled();
    });

    it('uses right arrow to go right one input', () => {
      event = {
        preventDefault: () => null,
        target: inputs[1],
        key: 'Right'
      };
      handleInputGroupKeyPress(inputs, event);
      expect(inputs[2].focus).toHaveBeenCalled();
    });
  });
});
