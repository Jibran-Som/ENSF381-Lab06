import React from 'react';

function Contact(prop){
    return(
        <div>
            <h2>{prop.message.title}</h2>
            <p>{prop.message.desc}</p>
        </div>
    );
};

export default Contact;