import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonInput,
  IonCheckbox
} from '@ionic/react';

export default function Login() {
  return (
    <>
      <IonPage>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle style={{ textAlign: 'center' }}>Login</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonList>
                      <IonItem >
                        <IonLabel position="floating">E-mail</IonLabel>
                        <IonInput type="email" value={''}></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Senha</IonLabel>
                        <IonInput type="password" value={''}></IonInput>
                      </IonItem>
                      <IonItem lines="none">
                        <IonLabel>Lembrar-me</IonLabel>
                        <IonCheckbox slot="start" color="primary" />
                      </IonItem>
                      <IonButton expand="block" style={{ marginTop: '15px' }}>Entrar</IonButton>
                    </IonList>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage >
    </>
  );
}