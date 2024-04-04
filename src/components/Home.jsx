import './styles/home.scss'
import Banner from '../images/banner.png'
import Button from '../shared/Button';
import AppContext from '../backend/api';
import {useContext} from 'react'


function Home() {
    const {allJob} = useContext(AppContext)
    return (
        <div className="home">
            <div className="container">
                <div className='content-sec'>
                    <h1>Find A <span>Job</span> That <span>Matches</span> Your Passion</h1>
                    <p>Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
                    <form action="">
                        <div className='input-group'>
                            <input type="text" placeholder='Search by job titile.....' />
                           <Button className='btn-primary' text='Search' />
                        </div>
                    </form>
                </div>
                <img src={Banner} alt="" className='hero-img' />
            </div>
        </div>
    )
}

export default Home;