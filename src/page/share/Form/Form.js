import React, { useState } from 'react';

const Form = () => {
    const [dispalyShow, setDisplayshow] = useState(1);
    const [person, setPerson] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    console.log({person, name, email, phone})
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ borderBottom: 'none' }}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <section id="section-1" style={{ display: dispalyShow === 1 ? "block" : "none" }}>
                                <div className='text-center'>
                                    <a href="http://" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <button className='btn btn-primary'>
                                            Zoom
                                        </button>
                                    </a>
                                    <br />
                                    <button className='btn btn-primary mt-3' onClick={() => setDisplayshow(2)}>In-persion</button>
                                </div>
                            </section>
                            <section id="section-2" style={{ display: dispalyShow === 2 ? "block" : "none" }}>
                                <div className='text-center'>
                                    <button className='btn btn-primary mt-3' onClick={() => [setDisplayshow(3), setPerson('Lions Bay')]}>Lions Bay</button>
                                    <br />
                                    <button className='btn btn-primary mt-3' onClick={() => [setDisplayshow(3), setPerson('West Vancouver')]}>West Vancouver</button>
                                    <br />
                                    <button className='btn btn-primary mt-3' onClick={() => [setDisplayshow(3), setPerson('East Vancouver')]}>East Vancouver</button>
                                </div>
                            </section>
                            <section id="section-3" style={{ display: dispalyShow === 3 ? "block" : "none" }}>
                                <div>
                                    <label htmlFor='name'>Name</label>
                                    <input onChange={(e) => setName(e.target.value)} type='text' id="name" className='form-control' placeholder='Enter Your Name'/>
                                </div>
                                <div>
                                    <label htmlFor='email'>Email</label>
                                    <input  onChange={(e) => setEmail(e.target.value)} type='text' id="email" className='form-control' placeholder='Enter Your Email'/>
                                </div>
                                <div>
                                    <label htmlFor='phone'>Phone</label>
                                    <input  onChange={(e) => setPhone(e.target.value)} type='text' id="phone" className='form-control' placeholder='Enter Your Phone'/>
                                </div>
<br/>
                                <button type="button" onClick={() => [setDisplayshow(1)]} className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Submit</button>
                            </section> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;