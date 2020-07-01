import React from 'react';
import Logo from '../Logo/Logo';

function SignIn({ onRouteChange }) {
    return (
        <article className='tc br2 ba shadow-5 b--black-10 w-100 w-50-m w25-l mw6 center bg-white '>
            <main className=' pa4 black-80'>
                <form className=' measure'>
                    <Logo />
                    <fieldset id='signin'
                        className=' ba b--transparent ph0 mh0'>
                        <legend className=' f2 g4 gw6 ph0 mh0'>Sign In</legend>
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
                            onClick={() => onRouteChange('home')}
                            value='Sign In' />
                    </div>
                    <div className="lh-copy mt3">
                        <p className='f6 link dim black db'
                            onClick={() => onRouteChange(' register')}>Register</p>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default SignIn