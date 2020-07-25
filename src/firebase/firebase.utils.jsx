import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyACnGMyLlKTz_cjUtZNVAP2J17giZSS8DA",
	authDomain: "ecommerce-db-dc6de.firebaseapp.com",
	databaseURL: "https://ecommerce-db-dc6de.firebaseio.com",
	projectId: "ecommerce-db-dc6de",
	storageBucket: "ecommerce-db-dc6de.appspot.com",
	messagingSenderId: "384071479138",
	appId: "1:384071479138:web:feae993a8f72c99941c63b",
	measurementId: "G-L9EG48NXE6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const userSnapshot = await userRef.get();
	if(!userSnapshot.exists){
		const {displayName, email} = userAuth;
		const createdAt = new Date();
	
		try{
			await userRef.set({
				displayName, email,
				createdAt, ...additionalData
			})

		} catch(error){
			console.log('User getting error ', error.message);
		}
	}
	return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promth: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;