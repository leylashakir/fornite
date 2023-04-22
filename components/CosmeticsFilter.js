import { useState } from 'react'
import filterStyles from '../styles/Filter.module.css'
import CosmeticsCards from './CosmeticsCards';
import PageBottomNav from './PageBottomNav';

export default function CosmeticsFilter({ cosmetics }) {
    const [cosmeticsToShow, setCosmeticsToShow] = useState(cosmetics);
    const [filterByParam, setFilterByParam] = useState('');
    const [searchedCosmetic, setSearchedCosmetic] = useState('Select an option: ');
    const itemsShownOnPage = 6
    const [currentPage, setCurrentPage] = useState(itemsShownOnPage);

    function loadMore() {
        setCurrentPage((prevPage) => prevPage + itemsShownOnPage)
    }

    // Create a set of all the chapters and sort ascending
    const chapters = [...new Set(cosmetics.map((item) => item.introduction?.chapter))].filter(Number).sort()

    // Create a set with all the rarity values obtained from data
    const rarity_values = [...new Set(cosmetics.map((item) => item.rarity.displayValue))];

    const type_values = [...new Set(cosmetics.map((item) => item.type.displayVvalue))].sort();

    const handleSelectSearchParam = (event) => {
        setFilterByParam(event.target.value);
    };

    const handleSelectSearchFilter = (event) => {
        setSearchedCosmetic(event.target.value);
    };

    function filterByRarity() {
        return cosmetics.filter(
            (cosmetic) => {
                return cosmetic.rarity?.displayValue == searchedCosmetic
            }
        )
    }

    function filterByIntroduction() {
        return cosmetics.filter(
            (cosmetic) => {
                return cosmetic.introduction?.chapter == searchedCosmetic
            }
        )
    }

    function filterByType() {
        return cosmetics.filter(
            (cosmetic) => {
                return cosmetic.type.displayValue == searchedCosmetic
            }
        )
    }

    async function showNew() {
        const res = await fetch(`https://fortnite-api.com/v2/cosmetics/br/new`)
        const newCosmetics = await res.json()
        .then(data => data.data.items)
        setCosmeticsToShow(newCosmetics)
    }

    function handleSubmit() {
        if (filterByParam === 'rarity') {
            setCosmeticsToShow(filterByRarity(cosmeticsToShow))
        }
        if (filterByParam === 'introduction') {
            setCosmeticsToShow(filterByIntroduction(cosmeticsToShow))
        }
        if (filterByParam === 'type') {
            setCosmeticsToShow(filterByType(cosmeticsToShow))
        }
        if (filterByParam === 'all') {
            setCosmeticsToShow(cosmetics)
        }

        if (filterByParam === 'new') {
            showNew() 
        }
        setCurrentPage(itemsShownOnPage)
    }

    return (
        <>
            <div className={filterStyles.filter}>
                <label className={filterStyles.label}></label>
                <select
                    className={filterStyles.select}
                    value={filterByParam}
                    onChange={handleSelectSearchParam}
                >
                    <option value='all'>All Cosmetics</option>
                    <option value='new'>New Cosmetics</option>
                    <option value='introduction'>First Introduction</option>
                    <option value='rarity'>Rarity</option>
                    <option value='type'>Type</option>
                </select>
                {filterByParam === 'introduction' &&
                    <select
                        className={filterStyles.select}
                        onChange={handleSelectSearchFilter}
                        value={searchedCosmetic}
                    >
                        <option value='Select an option: '>Select an option: </option>
                        {chapters.map((item) => (
                            <option key={item} value={item}>Chapter {item}</option>
                        ))}
                    </select>
                }
                {filterByParam === 'rarity' &&
                    <select
                        className={filterStyles.select}
                        onChange={handleSelectSearchFilter}
                        value={searchedCosmetic}
                    >
                        <option value='Select an option: '>Select an option: </option>
                        {rarity_values.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                }
                {filterByParam === 'type' &&
                    <select
                        className={filterStyles.select}
                        onChange={handleSelectSearchFilter}
                        value={searchedCosmetic}
                    >
                        <option value='Select an option: '>Select an option: </option>
                        {type_values.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                }
                <button
                    className={filterStyles.button}
                    onClick={() => handleSubmit(filterByParam)}
                >
                    Filter
                </button>
            </div>
            <CosmeticsCards cosmetics={cosmeticsToShow} paginate={currentPage} />
            <PageBottomNav loadMore={loadMore}/>
        </>
    )
}