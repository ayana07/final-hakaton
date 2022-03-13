import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDmqtanAPidsqrXiaeFOT6eszk0Y2KeFhM",
	authDomain: "my-final-project-182d6.firebaseapp.com",
	projectId: "my-final-project-182d6",
	storageBucket: "my-final-project-182d6.appspot.com",
	messagingSenderId: "1046012656780",
	appId: "1:1046012656780:web:f7d29d2ed396577df1cfa9",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
