import { Button } from "@mui/material";

export default function FilterBtn(props) {
    return (
        <Button 
            type='button' 
            onClick={() => props.setFilter(props.name)}
            variant={props.isPressed ? "contained" : "outlined"}
            sx={{marginLeft: '15px'}} 
        >
            {props.name}
        </Button>
    )
    
}