import {
  TOGGLE_EDIT_MODE,
  OPEN_MODAL,
  CLOSE_MODAL
} from './actionTypes';

// const initialState = {
//   isEditModeEnabled: false,
//   modal: {
//     isOpen: false,
//     title: ''
//   }
// };

export function isEditModeEnabled(state = false, action) {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return !state;
    default:
      return state;
  }
}

export function modal(state = { isOpen: false, title: '' }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { isOpen: true, title: action.title || '' };
    case CLOSE_MODAL:
      return { isOpen: false, title: '' };
    default:
      return state;
  }
}
