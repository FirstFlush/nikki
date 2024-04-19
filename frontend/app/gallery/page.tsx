"use client";
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import StyledCard from '../components/styled-card';
import { apiCall, ApiCallOptions } from '../../services/apiServices';
import { HttpMethod } from '../common/enums';
import styles from './page.module.css';
import { apiRoutes } from '../../services/apiRoutes';
import { useAuth } from '../auth/auth-context';


type ImageData = {
    img_url: string;
    img_url_thumb: string;
    caption: string;
    description: string;
    date: string;
};


type Images = {
    imgs:ImageData[];
};


const NikkiImageGallery:React.FC = () => {

    const [images, setImages] = useState<Images>({ imgs: [] })
    const { auth } = useAuth();
    useEffect (() => {
    
        const fetchData = async() => {
            const options:ApiCallOptions = {
                url: apiRoutes.gallery,
                // url: 'api/nikki/gallery/',
                method: HttpMethod.GET,
                errorMessage: 'Failed to fetch images',
                headers: { "Authorization": `Bearer ${auth.token}` }
                // throwError: true,
            }
            const data = await apiCall<Images>(options)
            return data
        }
        fetchData()
            .then(data => {
                data && setImages(data);
        })
    }, [])

    const imagesForGallery = images.imgs.map((img) => ({
        original: img.img_url,
        originalClass: styles.imageWrap,
        thumbnail: img.img_url_thumb,
        description: img.description,
        originalAlt: img.caption,
        thumbnailAlt: img.caption,
        
    }));

    return (
        <>
        {auth.token ? (
            <Box sx={{margin:"3rem 0"}}>
                <ImageGallery
                    items={imagesForGallery}
                    lazyLoad={true}
                    showPlayButton={false}
                    additionalClass={styles.imageGallery}
                />
            </Box>
            ) : (
                <Box className="flex flex-col items-center">
                    <StyledCard title="Image Gallery">
                        You must be signed in to view the image gallery.
                    </StyledCard>
                </Box>
            )
        }
        </>
    )


}

export default NikkiImageGallery;


