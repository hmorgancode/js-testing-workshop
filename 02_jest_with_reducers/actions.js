import {
  TOGGLE_EDIT_MODE,
  OPEN_MODAL,
  CLOSE_MODAL
} from './actionTypes';

export function toggleEditMode() {
  return {
    type: TOGGLE_EDIT_MODE
  }
}

export function openModal(title) {
  return {
    type: OPEN_MODAL,
    title
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
