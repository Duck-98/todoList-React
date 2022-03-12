import styled from 'styled-components';
import { IToDo } from '../atoms';


const Li = styled.li`
color : white;
`

function ToDo({text}:IToDo){

    return (
        <Li>
            <span>{text}</span>
            <button>To Do</button><button>Doing</button><button>Done</button>
        </Li>
    )
}

export default ToDo;