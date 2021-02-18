import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import './Modal.scss'

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {props.btnText}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={'modalWindow'}>
            <h2 id="transition-modal-title">{props.title}</h2>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                    <CloseIcon/>
                </IconButton>

            <p id="transition-modal-description">react-transition-group animates me.</p>
            {props.children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}