import React from 'react';
import PropTypes from 'prop-types';

// Modal Higher-Order Component
// (not the one we use in plm-ui-components)
class Modal extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    foot: PropTypes.element,
    handleCloseModal: PropTypes.func,
  }

  render() {
    const { title, foot } = this.props;
    return (
      <div className="modal is-active">
        <div className="modal-background js-modal-background" onClick={ this.props.handleCloseModal }></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title js-modal-title">{title}</p>
          </header>

          <div className="modal-card-body">
            { this.props.children }
          </div>

          <div className="modal-card-foot">
            { foot }
          </div>
          <button className="modal-close js-close-modal" onClick={this.props.handleCloseModal}></button>
        </div>
      </div>
    );
  }
}

// const ModalWithState = connect(
//   null, // not mapping state to any props in this component
//   (dispatch) => ({
//     handleCloseModal() {
//       dispatch({ type: 'CLOSE_MODAL' });
//     }
//   })
// )(Modal);
// export { Modal as ModalWithoutState, ModalWithState as Modal };

export { Modal as ModalWithoutState };
