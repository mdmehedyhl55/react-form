import React from 'react';
import Form from '../Form/Form';

const Header = () => {
    return (
        <div>
            {/* <h1>Header</h1> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                form
            </button>
            <Form/>
        </div>
    );
};

export default Header;