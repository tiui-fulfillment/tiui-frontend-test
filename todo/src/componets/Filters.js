import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export const Filters = ({setFilter}) => {
  return (
    <div className='Filter-container'>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} className=''>
          <ToggleButton 
            id="tbg-radio-1" 
            value={1}
            onClick={() => setFilter("todas")}
            title='Seleccionar todas las tareas'
            >
          Todas
          </ToggleButton>
          <ToggleButton 
            id="tbg-radio-2" 
            value={2}
            onClick={() => setFilter("completadas")}
            title='Seleccionar las tareas completadas'
            >
          Completadas
          </ToggleButton>
          <ToggleButton 
            id="tbg-radio-3" 
            value={3}
            onClick={() => setFilter("pendientes")}
            title='Selecctionar las tareas pendientes'
            >
          Pendientes
          </ToggleButton>
        </ToggleButtonGroup>
    </div>
  )
}
