import React from 'react';

interface ParentProps {
    children

}


const ParentComponent = (props: ParentProps) => {
    return (
        <div className='flex justify-between'>
            {props.children}
        </div>
    )
}



export default ParentComponent;