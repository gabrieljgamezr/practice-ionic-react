// React.
import React from 'react';
// Ionic.
import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
// Swiper.
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
// Recursos.
import captain from '../assets/intro/marvel-captain.jpg';
import spider from '../assets/intro/marvel-spider.jpg';
import thor from '../assets/intro/marvel-thor.jpg';

import './intro.css';

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({children}: any) => {
    const swiper = useSwiper();
    return (
        <IonButton
            onClick={() => swiper.slideNext()}
        >
            {children}
        </IonButton>
    );
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
    return (
        <Swiper>
            <SwiperSlide>
                <img src={ captain } alt='Captain' />
                <IonText>
                    Captain America
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
                <img src={ spider } alt='Spider' />
                <IonText>
                    Spider-Man
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
                <img src={ thor } alt='Thor' />
                <IonText>
                    Thor
                </IonText>
                <IonButton
                    onClick={ () => onFinish() }
                >
                    Finish
                </IonButton>
            </SwiperSlide>
        </Swiper>
    );
};

export default Intro;