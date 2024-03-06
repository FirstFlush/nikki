"use client";

import { Swiper, SwiperSlide} from 'swiper/react';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { apiCall, ApiCallOptions } from '../../services/apiServices';
import { HttpMethod } from '../types/enums';


type ImageData = {
    img_url: string;
    caption: string;
    description: string;
    date: string;
};

type Images = {
    imgs:Array<ImageData>;
};

const ImageGallery:React.FC = () => {

    const [images, setImages] = useState<Images>({ imgs: [] })

    useEffect (() => {
        const fetchData = async() => {
            const options:ApiCallOptions = {
                // url: 'http://192.168.1.165:8000/api/nikki/gallery/',
                url: 'api/nikki/gallery/',
                method: HttpMethod.GET,
                errorMessage: 'Failed to fetch images',
                throwError: true,
            }
            const data = await apiCall<Images>(options)
            return data
        }
        fetchData()
            .then(data => {
                data && setImages(data);
        })
    }, [])

    return (
        
        <div>
            {images.imgs.map((image, index) => (
                <div key={index}>
                    <img src={image.img_url}></img>
                </div>
            ))}
        </div>
    )


}

export default ImageGallery;