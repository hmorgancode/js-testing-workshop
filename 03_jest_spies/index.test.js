import { handleInputGroupKeyPress } from '.';

describe('handleInputGroupKeyPress', () => {
  let inputs;
  let event;

  beforeEach(() => {
    inputs = [{
      focus: jest.fn(),
    },{
      focus: jest.fn(),
    }, {
      focus: jest.fn(),
    }, {
      focus: jest.fn(),
    }, {
      focus: jest.fn(),
    },
    ]
    // inputs[0].focus()
  });

  describe('When current input is the first input', () => {
    it('goes to the last input when the left arrow key is pressed', () => {
      event = {
        preventDefault: jest.fn((arguments) => 'result'),
        key: 'Left',
        target: inputs[0]
      };

      handleInputGroupKeyPress(inputs, event);
      // expect(event.preventDefault).toHaveBeenCalled();
      expect(inputs[4].focus).toHaveBeenCalled();
      expect(inputs[4].focus.mock.calls.length).toBeGreaterThanOrEqual(1);
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });

  });

  describe('When current input is the last input', () => {
  });

  describe('When current input is neither the first nor the last input', () => {
  });
});
