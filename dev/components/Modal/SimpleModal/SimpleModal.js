import React from 'react';
import Modal from '../Modal'

import './SimpleModal.scss'

export default function SimpleModal(props) {
    return(
        <Modal 
        className={' SimpleModal'} 
        title={props.title} 
        btnText={props.btnText}
        childBtnText={'OK'}
        >
            <p className={'SimpleModalText'}>
                {props.text}
            </p>

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

export const question= <SimpleModal
title={'Ваш вопрос отправлен'}
text={'Ответ поступин в ближайшее время на указанную почту'}
btnText={'Задать вопрос'} 
/>




