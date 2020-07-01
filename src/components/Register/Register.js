import React from 'react';
import Logo from '../Logo/Logo';

function Register(onRouteChange) {
    return (
        <article className='tc br2 ba shadow-5 b--black-10 w-100 w-50-m w25-l mw6 center bg-white '>
            <main className=' pa4 black-80'>
                <form className=' measure'>
                    <Logo />
                    <fieldset
                        className=' ba b--transparent ph0 mh0'>
                        <legend className=' f2 g4 gw6 ph0 mh0'>Register</legend>
                        <div className='mt3'>
                            <label className='db fw6 lh-copy f6' type='text' htmlFor='name'>
                                Name
                                </label>
                            <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br-pill' />
                        </div>
                        <div className='mt3'>
                            <label className='db fw6 lh-copy f6' htmlFor='email'>
                                Email
                                </label>
                            <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br-pill' />
                        </div>
                        <div className='mv3'>
                            <label className='db fw6 lh-copy f6' htmlFor='password'>
                                Password
                                </label>
                            <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br-pill' />
                        </div>
                    </fieldset>
                    <div className=''>
                        <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill'
                            type="submit"
                            value="Register" />
                    </div>
                </form>
            </main>
        </article>
    );
}

export default Register;