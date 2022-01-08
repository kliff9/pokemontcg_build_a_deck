import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hourglass } from "react-spinners-css";
import { detailsDECK, update_deck } from "../Actions/DeckActions";
import MessageBox from "../componets/MessageBox";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import { EffectCoverflow } from "swiper";

import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import ExistingCard from "../componets/ExitingCards";
import { useParams } from "react-router";
import CardsScreen from "./CardsScreen";
import { DECK_EMPTY } from "../Constants/DeckConstants";

export default function EditDeck(P) {
  const dispatch = useDispatch();

  const deckDetails = useSelector((state) => state.deckDetails);
  const { DECK, error, loading } = deckDetails;
  const params = useParams();
  const { id: deckId } = params;

  console.log("Deck:", DECK);

  useEffect(() => {
    dispatch(detailsDECK(deckId));
  }, [dispatch, deckId]);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      update_deck({
        _id: deckId,
        Cards: DECK.Cards,
      })
    );
  };

  const EmptyHandler = () => {
    if (window.confirm("Are you sure to Clear?")) {
      dispatch({ type: DECK_EMPTY });
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <button
            className="btn btn-primary btn-block btn-large"
            onClick={updateHandler}
          >
            Save
          </button>
          <button
            className="btn btn-primary btn-block btn-large"
            onClick={EmptyHandler}
          >
            Clear
          </button>

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            effect="coverflow"
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="row center">
              {DECK.Cards.map((pokemon) => (
                <SwiperSlide>
                  <ExistingCard
                    key={pokemon._id}
                    Pokemon={pokemon}
                  ></ExistingCard>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          <CardsScreen></CardsScreen>
        </div>
      )}
    </React.Fragment>
  ); // end of return
}
