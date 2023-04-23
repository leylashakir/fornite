import filterStyles from '../styles/Filter.module.css'
import {MdChevronRight} from 'react-icons/md'

export default function LoadNext({ loadMore }) {
    return(
        <div className={filterStyles.navButton}>
            <MdChevronRight size={70} onClick={loadMore}/>
        </div>
    )
}