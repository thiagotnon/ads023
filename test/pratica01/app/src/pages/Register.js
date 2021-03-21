import React from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonButton,
  IonList,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonApp
} from '@ionic/react';

export default function Register() {
  return (
    <>
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>
                Novo registro
            </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem >
                <IonLabel position="floating">Nome</IonLabel>
                <IonInput type="email" value={''}></IonInput>
              </IonItem>
              <IonItem >
                <IonLabel position="floating">E-mail</IonLabel>
                <IonInput type="email" value={''}></IonInput>
              </IonItem>
              <IonItem >
                <IonLabel position="floating">CPF</IonLabel>
                <IonInput type="email" value={''}></IonInput>
              </IonItem>
              <IonItem >
                <IonLabel position="floating">Telefone</IonLabel>
                <IonInput type="email" value={''}></IonInput>
              </IonItem>
              <IonItem >
                <IonLabel position="floating">E-mail</IonLabel>
                <IonInput type="email" value={''}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Senha</IonLabel>
                <IonInput type="password" value={''}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Confirmar senha</IonLabel>
                <IonInput type="password" value={''}></IonInput>
              </IonItem>
            </IonList>
            <IonButton color="light">Cancelar</IonButton>
            <IonButton color="secondary" >Cadastrar</IonButton>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
}