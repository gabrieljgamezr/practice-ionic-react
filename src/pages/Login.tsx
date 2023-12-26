// React.
import { useEffect, useState } from 'react';
// Ionic.
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { logInOutline, personCircleOutline, eyeOutline } from 'ionicons/icons';
// Capacitor.
import { Preferences } from '@capacitor/preferences';
// Recursos.
import logoLogin from '../assets/login.png';
// Componentes.
import Intro from '../components/Intro';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {

    const router = useIonRouter();

    const [ introSeen, setIntroSeen ] = useState( true );

    const [ present, dismiss ] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY });
            setIntroSeen( seen.value === 'true' );
        }
        checkStorage();
    }, []);

    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in...');
        setTimeout(() => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);
    };

    const finishIntro = async () => {
        setIntroSeen( true );
        Preferences.set({ key: INTRO_KEY, value: 'true' });
    };

    const seeIntroAgain = () => {
        setIntroSeen( false );
        Preferences.remove({ key: INTRO_KEY });
    };

    return (
        <>
            {!introSeen ? (
                <Intro onFinish={ finishIntro } />
            ) : (
                <IonPage>

                    <IonHeader>

                        <IonToolbar color='primary' >
                            <IonTitle>IONIC</IonTitle>
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
                                    <div className='ion-text-center ion-padding' >
                                        <img 
                                            src={ logoLogin }
                                            alt='Logo-Login'
                                            width='50%'
                                        />
                                    </div>
                                </IonCol>
                            </IonRow>

                            <IonRow className='ion-justify-content-center' >
                                <IonCol 
                                    size='12'
                                    sizeMd='8'
                                    sizeLg='6'
                                    sizeXl='4' 
                                >
                                    <IonCard>
                                        <IonCardContent>
                                            <form onSubmit={ doLogin }>
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
                                                    Login
                                                    <IonIcon icon={ logInOutline } slot='end' />
                                                </IonButton>
                                                <IonButton
                                                    color='secondary'
                                                    className='ion-margin-top'
                                                    expand='block'
                                                    type='button'
                                                    routerLink='/register'
                                                >
                                                    Create Account
                                                    <IonIcon icon={ personCircleOutline } slot='end' />
                                                </IonButton>
                                                <IonButton
                                                    fill='clear'
                                                    color='medium'
                                                    className='ion-margin-top'
                                                    expand='block'
                                                    type='button'
                                                    size='small'
                                                    onClick={ seeIntroAgain }
                                                >
                                                    Watch intro again
                                                    <IonIcon icon={ eyeOutline } slot='end' />
                                                </IonButton>
                                            </form>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                        </IonGrid>

                    </IonContent>

                </IonPage>
            )}
        </>
    );
};

export default Login;