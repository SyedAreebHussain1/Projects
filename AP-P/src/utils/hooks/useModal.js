import { useState } from 'react'

export function useModal() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    function toggle() {
        setIsModalVisible((prev) => !prev)
    }
    return [isModalVisible, toggle]
}