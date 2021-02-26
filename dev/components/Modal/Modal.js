import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import './Modal.scss'

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(props.isOpen);
console.log(props.isOpen)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='modalContainer'>
      {getBtn(props.btnText, handleOpen)}
      
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
          <div className={'modalWindow'+props.className}>
            <h2 id="transition-modal-title">{props.title}</h2>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                    <CloseIcon/>
                </IconButton>
            {props.children}
            {getBtn(props.childBtnText, handleClose, props.btnClass)}
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function getBtn(name, handle, btnClass){
  if (name){
    return <Button 
    className={'modalBtn '+btnClass} 
    color='secondaty'
    onClick={handle}
    >
      {name}
    </Button>
  }
} 

