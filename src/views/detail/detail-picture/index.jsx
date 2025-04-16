import React, { memo, useState} from 'react'
import { DetailPictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo((props) => {
    const { picUrls } = props
    const [showBrowser,setShowBrowser] = useState(false)
    function showBrowserHandle(isShow) {
        setShowBrowser(isShow)
    }
    return (
        <DetailPictureWrapper>
            <div className="pic-content">
                <div className="pic pic-left">
                    <div className=" img-content img-left">
                        <img src={picUrls[0]} alt="" />
                        <div className="cover"></div>
                    </div>
                </div>
                <div className="pic pic-right">
                    {picUrls.slice(1, 5).map(item =>
                        <div className="img-content img-right" key={item}>
                            <img src={item} alt="" />
                            <div className="cover"></div>
                        </div>
                    )}

                </div>
            </div>
            <div className="show-browser-btn" onClick={e=>showBrowserHandle(true)}>
                显示详细照片
            </div>
            {showBrowser&& <PictureBrowser pics={picUrls}  closeBrowserHandle={e=>showBrowserHandle(false)}></PictureBrowser>}
        </DetailPictureWrapper>
    )
})

export default DetailPicture    