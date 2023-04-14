import filterStyles from '../styles/Filter.module.css'

export default function PageBottomNav({ loadMore }) {
    return(
        <div className={filterStyles.filter}>
            <button 
                className={filterStyles.button}
                onClick={loadMore}
            >
                Load More
            </button>
            <button 
                className={filterStyles.button}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
                Scroll To Top
            </button>
        </div>
    )
}