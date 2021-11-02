import axios from "axios"
import { useEffect, useState } from "react"

export const useBackground = (category: string, limit = 1) => {
    
    const [image, setImage] = useState(null)

    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        axios.get(`https://api.pexels.com/v1/search?query=${category}&page=${getRandomInt(1,100)}&per_page=${limit}`, {
            headers: {
                'Authorization': "563492ad6f91700001000001a85a86eb753c4a3e8ef5cb469ac6666b"
            }
        }).then((images) => {
            const photo = images.data.photos[0].src
            setImage(photo)
        })
    }, [category, limit])

    return image
}