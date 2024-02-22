import React from 'react';

const Tags = ({content}) => {
    return (
            <div className='tags-content'>{content?.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })
            }</div>
    );
};

export default Tags;