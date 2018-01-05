import { isEditModeEnabled, modal } from './reducers';
import {
  toggleEditMode,
  openModal,
  closeModal,
} from './actions';

describe('isEditModeEnabled', () => {
  test('TOGGLE_EDIT_MODE', () => {
    expect(isEditModeEnabled(false, toggleEditMode())).toBe(true);
    expect(isEditModeEnabled(true, toggleEditMode())).toBe(false);
  });

  test('default state', () => {
    // we have to pass undefined for default params to take effect.
    expect(isEditModeEnabled(undefined, {})).toBe(false);
  });
});

describe('modal', () => {
  test('OPEN_MODAL', () => {
    expect(modal({
      isOpen: false,
    }, openModal('Test Modal!'))).toEqual({
      isOpen: true,
      title: 'Test Modal!'
    });

    expect(modal({ isOpen: false }, openModal())).toEqual({
      isOpen: true,
      title: ''
    });

    // // coverage notices without this.
    // expect(modal({ isOpen: false }, openModal())).toEqual({
    //   isOpen: true,
    //   title: ''
    // });
  });

  test('CLOSE_MODAL', () => {
    expect(modal({
      isOpen: true,
    }, closeModal())).toEqual(expect.objectContaining({
      isOpen: false
    }));
  });

  test('default state', () => {
    expect(modal(undefined, {})).toEqual({
      isOpen: false,
      title: ''
    });
  });
});
