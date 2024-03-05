import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { apiCall, ApiCallOptions } from '../../services/apiServices';
import { HttpMethod } from '../types/enums';


export const ImageGallery:React.FC = async() => {

    const options:ApiCallOptions = {
        url: 'api/nikki/gallery/',
        method: HttpMethod.GET,
        errorMessage: 'Failed to fetch images'
    }

    await apiCall(options)


    return (
        <div>blehhhhh</div>
    )


}