import { CloseOutlined } from '@ant-design/icons'
import React from 'react'

const SingleFilePreviewer = ({
    imagePreviews,
    deleteMasterFile,
    width,
    height,
    uploadAdvertisement,
}) => {
    return (
        <div className="relative w-fit h-full">
            {imagePreviews[0].type === 'video/mp4' ? (
                <video style={{ height: height, width: width }} controls>
                    <source src={uploadAdvertisement} />
                </video>
            ) : (
                <img
                    src={uploadAdvertisement}
                    alt=""
                    className="object-contain"
                    style={{ height: height, width: width }}
                />
            )}
            <span
                className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                onClick={() => deleteMasterFile(imagePreviews[0].name)}
            >
                <CloseOutlined />
            </span>
        </div>
    )
}

export default SingleFilePreviewer
