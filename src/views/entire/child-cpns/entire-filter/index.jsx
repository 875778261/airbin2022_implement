import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filter_data from "@/assets/data/filter_data.json";
import classNames from 'classnames';
const EntireFilter = memo(() => {
    const [selectedItems, setSelectedItems] = useState([])
    function filterItemClickHandle(item) {
        const newItems = [...selectedItems]
        if (newItems.includes(item)) {
            /* 取消选中 */
            const currentIndex = newItems.findIndex((element) => element === item)
            newItems.splice(currentIndex, 1)
        } else {
            /* 选中 */
            newItems.push(item)
        }
        setSelectedItems(newItems)
    }
    return (
        <EntireFilterWrapper>
            <div className='filter-list'>
                {filter_data.map(item =>
                    <div className="filter-item " key={item}>
                        <div className={classNames('filter-item-inner', { active: selectedItems.includes(item) })}
                            onClick={e => filterItemClickHandle(item)}
                        >
                            {item}
                        </div>

                    </div>
                )}
            </div>
        </EntireFilterWrapper>
    )
})

export default EntireFilter