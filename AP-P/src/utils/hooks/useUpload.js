import { useEffect, useState } from 'react'

export function useUpload() {
    const [files, setFiles] = useState([])
    const [imagePreviews, setImagePreviews] = useState([])
    const [progress, setProgress] = useState(0)
    const [filesCount, setFilesCount] = useState(0)

    useEffect(() => {
        if (files.length > 0) {
            setImagePreviews([])
            setProgress(0)
            for (let i = 0; i < files.length; i++) {
                const data = new FileReader()
                data.onload = () => {
                    setImagePreviews((prev) => [
                        ...prev,
                        {
                            url: data.result,
                            name: files[i].name,
                            size: files[i].size,
                            type: files[i].type,
                        },
                    ])
                }
                data.onprogress = (event) => {
                    const percent = (event.loaded / event.total) * 100
                    setProgress(percent.toFixed(2))
                }
                data.readAsDataURL(files[i])
            }
        } else {
            setImagePreviews([])
        }
    }, [files])
    function deleteFile(name) {
        const updatedFiles = files.filter((file, i) => name !== file.name)
        setFiles(updatedFiles)
        setProgress(0)
    }
    function resetProgress() {
        setProgress(0)
        setFiles([])
        setImagePreviews([])
    }

    return [
        files,
        setFiles,
        imagePreviews,
        deleteFile,
        { progress, resetProgress },
        { count: filesCount, setState: setFilesCount },
    ]
}
