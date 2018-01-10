import React from 'react';
import { shallow, mount } from 'enzyme';
import { ModalWithoutState as Modal } from './Modal';
import renderer from 'react-test-renderer';

function ReallyBigDailyMeForm() {
  return <p>LOTS OF HTML</p>;
}

it('renders correctly with react-test-renderer', () => {
  // const tree = renderer
  //   .create(<Modal><p>sldkfjlsdkjfsdf</p></Modal>)
  //   .toJSON();
  // expect(tree).toMatchSnapshot();
});

describe('Modal', () => {
  it('renders correctly with enzyme', () => {
    // Snapshot testing!
    // shallow(<Modal />);
    expect(shallow(<Modal><ReallyBigDailyMeForm /></Modal>)).toMatchSnapshot();
  });

  it('closes when the close button is clicked', () => {
    // todo:
    // compare toBe and toEqual chai equivs
    // compare spyOn and jest.fn() to sinon equivs
    // coverage
    // react test render, then shallow vs mount vs render
    // THEN snapshot testing
    // THEN DOM interactions
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
