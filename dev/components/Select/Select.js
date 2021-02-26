import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Select.scss'
export default function SimpleSelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
        <FormControl variant="outlined" className='Select'>
          <InputLabel id="demo-simple-select-label">Тема</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            icon
          >
            <MenuItem value={1}>Призы</MenuItem>
            <MenuItem value={2}>Чеки</MenuItem>
            <MenuItem value={3}>Работа сайта</MenuItem>
            <MenuItem value={4}>Другое</MenuItem>

          </Select>
        </FormControl>
    )
}