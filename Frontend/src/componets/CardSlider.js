// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; 
import "swiper/swiper-bundle.min.css"; 
import 'swiper/swiper.scss';
import PokeCard from './PokeCard';
import { EffectCoverflow } from 'swiper';

//   'swiper/swiper.scss';
// Import Swiper styles
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';


export default function CardSlider() {

  const PokemonCards = [
    {
        id: 1,
        name: "Zaptos",
        type: "electric",
        image: "/img/ZAptos450.jpg",
        energy:['electric', 'electric']

    },
    {
        id: 2,
        name: "Zaptos",
        type: "electric",
        image: "/img/ZAptos450.jpg",
        energy:['electric', 'electric']


    },
    {
        id: 3,
        name: "Zaptos",
        type: "electric",
        image: "/img/ZAptos450.jpg",
        energy:['electric', 'electric', 'electric']


    },
    {
        id: 4,
        name: "Zaptos",
        type: "electric",
        image: "/img/ZAptos450.jpg",
        energy:['electric', 'electric', 'electric', 'electric']

    }
]

  return (
    <Swiper
      // install Swiper modules
      /*     <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper>*/
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      effect="coverflow"
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className="row center">         
          {PokemonCards.map((pokemon) => (            
           <SwiperSlide><PokeCard key={pokemon._id} Pokemon={pokemon}> </PokeCard></SwiperSlide>
          ))};
        </div>
    </Swiper>
  );
};


