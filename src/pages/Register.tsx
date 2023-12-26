// Ionic.
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';

const Register: React.FC = () => {

    const router = useIonRouter();

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    };

    return (
        <IonPage>

            <IonHeader>

                <IonToolbar color='primary'>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>

            </IonHeader>
            
            <IonContent 
                scrollY={ false }
                className='ion-padding'
            >

                <IonGrid fixed >

                    <IonRow className='ion-justify-content-center' >
                        <IonCol 
                            size='12'
                            sizeMd='8'
                            sizeLg='6'
                            sizeXl='4' 
                        >
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={ doRegister } >
                                        <IonInput
                                            label='Username'
                                            labelPlacement='floating'
                                            type='text'
                                            placeholder='pepitoperez'
                                            fill='outline' 
                                        />
                                        <IonInput
                                            className='ion-margin-top'
                                            label='Password'
                                            labelPlacement='floating'
                                            type='password'
                                            placeholder='********'
                                            fill='outline' 
                                        />
                                        <IonButton
                                            className='ion-margin-top'
                                            type='submit'
                                            expand='block'
                                        >
                                            Create My Account
                                            <IonIcon icon={ checkmarkDoneOutline } slot='end' />
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                        

                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default Register;