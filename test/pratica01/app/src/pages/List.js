import React from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

export default function List() {
  return (
    <>
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>
                Lista de Contatos
            </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage >
      </IonApp>
    </>
  );
}