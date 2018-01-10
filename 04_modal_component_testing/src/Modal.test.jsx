import React from 'react';
import { shallow } from 'enzyme';
import { ModalWithoutState as Modal } from './Modal';
// import renderer from 'react-test-renderer';

function ModalBody() {
  return <p>Modal Body</p>;
}

// it('renders correctly with react-test-renderer', () => {
//   const tree = renderer
//     .create(<Modal><ModalBody /></Modal>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe('Modal', () => {
  it('renders correctly with enzyme', () => {
    // Snapshot testing!
  });

  it('closes when the close button is clicked', () => {
  });

  it('closes when the area outside of the modal is clicked', () => {
  });

  it('renders the provided modal title', () => {
  });

  it('renders its children as the modal body', () => {
  });

  it('renders the provided modal footer', () => {
  });
});
