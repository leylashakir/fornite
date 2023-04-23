import filterStyles from '../styles/Filter.module.css'
import {MdChevronLeft} from 'react-icons/md'

export default function LoadPrevious({ loadPrevious }) {
    return(
        <div className={filterStyles.navButton}>
            <MdChevronLeft size={70} onClick={loadPrevious}/>
        </div>
    )
}