
import './styles/job-list.scss'
import Button from '../shared/Button';
import {HiOutlineLocationMarker, HiOutlineArrowsExpand} from 'react-icons/hi'
import {JobList} from '../backend/data';

function Joblist() {
    return(
        <div className="job-lists">
            <div className="container">
                <div className="title">
                    <h2>All Popular Listed jobs</h2>
                </div>
                <div className='job-list'>
                    { JobList.map((item, index)=> (
                            <div className='job-list-items' key={index}>
                                <div className='job-details'>
                                    <div className="res-circle">
                                        <div className="circle-txt">J</div>
                                    </div>
                                    <div className='details'>
                                        <span>Match company limited</span>
                                        <h3>{item.name}</h3>
                                        <div className='other-info'>
                                            <span> <HiOutlineLocationMarker color='#338573' size={18} /> {item.location}</span>
                                            <span><HiOutlineArrowsExpand size={15} color='#338573' /> {item.type}</span>
                                            <span>{item.salary}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className='btn-primary' type='button' text='View Details' />
                            </div>
                        ))
                    }
                </div>
                <div className='view-more-btn'>
                    <Button className="btn-primary"  type="button" text="view More" />
                </div>
            </div>
        </div>
    )
}

export default Joblist;