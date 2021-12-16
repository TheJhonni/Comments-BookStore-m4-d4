
import {Badge} from "react-bootstrap"

const MyBadge=(props)=>{
    return(    
                   <Badge  variant={props.color}> {props.str} </Badge>
           
       
        )
        
    }
    export default MyBadge
