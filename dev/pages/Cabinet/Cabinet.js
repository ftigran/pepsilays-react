import React from 'react';

import Grid from '@material-ui/core/Grid';

import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '@material-ui/core/Button';

import {verify} from '../../components/Modal/SimpleModal/SimpleModal'
import Form from '../../components/Form/Form'
import './Cabinet.scss'
class Cab extends React.Component{
render()    {
    return(
        <Grid container direction="column" alignItems='center' className='cabinet'>
            <h1>Личный кабинет</h1>
            <p className='cabinetSrok'>Срок регистрации чеков: <br/>
        с 10.02.2021 по 25.03.2021 года</p>
        <div className='cabinetCard'>
            <div className='cabinetInfo'>
                <div className='cabinetMyStat'>
                    <p>Мои призы <span>{this.props.user.prizi}</span></p>
                    <p>Мои чеки <span>{this.props.user.cheki}</span></p>
                </div>
                <div className='checkboxWrap'>
                <Checkbox>Я  согласен получать информацию 
                об акции по e-mail</Checkbox>
                <Checkbox>Я  согласен получать информацию 
                об акции по sms</Checkbox>
                </div>
                <a href='empty'>Как добавить стикер в мессенджер? </a>
            </div>
            <div className='cabinetSeparator'/>
            <div className='cabinetRegCheki'>
                <h2>Зарегистрируй чек</h2>
                <p>В чеке должно быть минимум два 
                    акционных продукта.<br/>
                    На фото должны быть чётко видны 
                    данные чека и QR-код.
                </p>
                <Button className='borderedBtn'>
                    посмотреть требования к чеку
                </Button>
                <Button className='filledBtn'>
                    Зарегистрировать чек
                </Button>
            </div>
        </div>
        <SimpleTabs/>
        </Grid>
        
    )
}
}




import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../store/store'

const mapStateToProps=(state)=>{
    return {
        user: state.user
    }
};
const putActionsToProps=(dispatch)=>{
    return {
        changeUser: bindActionCreators(changeUser, dispatch)
    }
}

const WrapedCab = connect(mapStateToProps, null)(Cab)

export default class CabWithStore extends React.Component{
    render(){
    return (
        <Provider store={store}>
            <WrapedCab/>
        </Provider>
    )
}
}



import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ColumnsCheki = [
    { 
        id: 'date',
        label: 'Дата',
        },
      { 
        id: 'fd',
        label: 'ФД',
     },
      {
        id: 'stat',
        label: 'Статус модерации',
      },
  ]
  function createData(date, fd, stat=false){
      stat==true ? stat='Принят':stat='Отклонен'
      return {date,fd,stat}
  }
  const rowsCheki = [
    createData('25.02.21', 12345678, true),
    createData('25.02.21', 12536748),
    createData('25.02.21', 23635782, true),
    createData('25.02.21', 15899346, true),

  ]
  return (
    <div className='tabpage'>
      <AppBar position="static" className="TabBar">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Чеки" {...a11yProps(0)} />
          <Tab label="Призы" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Table 
        columns={ColumnsCheki} 
        rows={rowsCheki}
        rowsPerPage={2}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        PRIZI
      </TabPanel>
    </div>
  );
}


import Table from '../../components/Table/Table'