//Redux
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, filter } from '../utils/todoListReducer';

//Material
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditIcon from '@mui/icons-material/Edit';
import {TaskAdd} from './taskAdd';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

export const TodoList = () => {
    const childRef = React.useRef();
    const data = useSelector((state) => state.todolist);
    const dispatch = useDispatch();

    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      dispatch(filter(event.target.value));
    };

    const controlProps = (item) => ({
      checked: selectedValue == item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

  
    const listItems = data.map((element) => {
        return (
                <ListItem className='note-line' key={element.id}
                  secondaryAction={
                    <div>
                      <IconButton color="primary" disabled={element.completed} onClick={() => childRef.current.openModal(element)}>
                        <EditIcon/>
                      </IconButton>
                      <IconButton edge="end" color="error" onClick={() => childRef.current.deleteModal(element, true)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  }
                >
                <ListItemAvatar className='note-check'>
                  <IconButton sx={{ pr: '0.7rem' }} color={(element.completed ? 'success' : '')}  onClick={() => dispatch(toggle(element))}>
                    {element.completed
                      ? <TaskAltIcon />   
                      : <RadioButtonUncheckedIcon />
                    }
                  </IconButton>
                </ListItemAvatar>
                <ListItemText className={"note-text " + (element.completed ? 'checked' : '')}
                  primary={element.task}
                />
              </ListItem>
        );
    });

    const Filters = () => {
    
      return (
        <FormControl className='note-filters'>
          <RadioGroup
          className='note-filters-radio'
            row
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value=""
              control={<Radio {...controlProps('')} color="success" />}
              label={<Typography color="white">Todas</Typography>}
              labelPlacement="top"
            />
            <FormControlLabel
              value="true"
              control={<Radio {...controlProps('true')} color="success"/>}
              label={<Typography color="white">Completas</Typography>}
              labelPlacement="top"
            />
            <FormControlLabel
              value="false"
              control={<Radio {...controlProps('false')} color="success" />}
              label={<Typography color="white">Pendientes</Typography>}
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      );
    };

    return (
        <React.Fragment>
            <Filters/>
            {listItems.length>0 
              ? <List dense={false}>{listItems}</List>
              : <ListItem className='note-line' key="none">
                  <ListItemText
                    primary="Sin tareas"
                  />
                </ListItem>
            }
            <TaskAdd ref={childRef}/>
        </React.Fragment>
        );
  }