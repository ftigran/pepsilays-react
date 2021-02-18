import React from 'react';
import Modal from '../Modal'
import Button from '@material-ui/core/Button';

import './SimpleModal.scss'

export default function SimpleModal(props) {
    return(
        <Modal className={' SimpleModal'} title={props.title} btnText={props.btnText}>
            <p className={'SimpleModalText'}>
                {props.text}
            </p>
            <Button className={'SimpleModalBtn'}>
                ОК   
            </Button>
        </Modal>
    )
}
export const sbros= <SimpleModal
title={'Восстановление пароля'}
text={'Пароль к твоему Личному кабинету отправленна указанный e-mail'}
btnText={'1'} 
/>

export const verify= <SimpleModal
title={'Подтверждение данных'}
text={'На указанный E-mail отправлен пароль. Для завершения регистрации в Акции войди в личный кабинет, указав полученный в письме пароль. Если письмо с паролем так и не приходит, обратись в службу поддержки Акции.'}
btnText={'2'} 
/>
export const regCheck= <SimpleModal
title={'Регистрация чека'}
text={'Спасибо, чек принят для проверки. Результат проверки станет доступен в твоем Личном кабинете в течение ближайших 3-х рабочих дней.'}
btnText={'3'} 
/>




