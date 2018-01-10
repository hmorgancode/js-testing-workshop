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
    expect(shallow(<Modal><ModalBody /></Modal>)).toMatchSnapshot();
  });

  it('closes when the close button is clicked', () => {
    const mockClose = jest.fn();
    const modal = shallow(<Modal handleCloseModal={mockClose} />);
    modal.find('.js-close-modal').simulate('click');
    expect(mockClose).toHaveBeenCalled();
  });

  it('closes when the area outside of the modal is clicked', () => {
    const mockClose = jest.fn();
    const modal = shallow(<Modal handleCloseModal={mockClose} />);
    modal.find('.js-modal-background').simulate('click');
    // again, this is basically what toHaveBeenCalled is doing behind the scenes:
    expect(mockClose.mock.calls.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the provided modal title', () => {
    const modal = shallow(<Modal title="Test Title" />);
    expect(modal.find('.js-modal-title').text()).toBe('Test Title');
  });

  it('renders its children as the modal body', () => {
    const modal = shallow(<Modal><ModalBody /></Modal>);
    expect(modal.find(ModalBody).length).toBe(1);
  });

  it('renders the provided modal footer', () => {
    const modal = shallow(<Modal foot={<div className="js-test-foot"></div>} />);
    expect(modal.find('.js-test-foot').length).toBe(1);
  });
});
