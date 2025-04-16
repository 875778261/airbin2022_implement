import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import vData from '@/assets/data/filter_data.json'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
const Demo = memo(() => {
    const [slectedIndex, setSlectedIndex] = useState(0)
    function ctrlHandle(isNext) {
        let newIndex = isNext ? slectedIndex + 1 : slectedIndex - 1
        if (newIndex < 0) newIndex = vData.length-1
        if (newIndex>vData.length-1) newIndex = 0
        console.log(newIndex);
        setSlectedIndex(newIndex)
    }
    return (
        <DemoWrapper>
            <div className="indicator">
                <Indicator slectedIndex={slectedIndex}>
                    {vData.map((item, index) => (
                        <div key={item} className={classNames("indicator-item",{'activ':slectedIndex===index}) }>
                            {item}
                        </div>
                    ))}
                </Indicator>
            </div>
            <div className="ctrl">
                <button onClick={() => ctrlHandle(false)}>prev</button>
                <button onClick={() => ctrlHandle(true)}>next</button>
            </div>
        </DemoWrapper>
    )
})

export default Demo