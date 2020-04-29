import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from "@ionic/react";
import React from "react";
// import { useParams } from "react-router";
import "./Page.css";


const PageComponent = (WrappedComponent: React.FunctionComponent<any>) => {
  class Page extends React.PureComponent {
    render() {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle>Test</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Test</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonText>
              <WrappedComponent />
            </IonText>
          </IonContent>
        </IonPage>
      );
    }  
  }
  return Page;
}

export default PageComponent;
