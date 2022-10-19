import './styles/categories.scss'
import Icon from '../images/icon.svg'
import {FaBox} from 'react-icons/fa'

const categories= [
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
    {name:"Technology"},
]
function Categories() {
    return(
        <div className="categories">
            <div className="container">
                <h2 className="heading">Popular Categories</h2>
                <div className='categories-list'>
                    {
                        categories.map((item,index) => (
                            <div key={index} className='categorie-list-item'>
                                <div className='box'><img src={Icon} alt="" className='box-img' /></div>
                                <h5 className='item-text'>{item.name}</h5>
                             </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories;