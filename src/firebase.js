import { initializeApp, getApp, getApps} from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBvJm5TNYdiU36A_dpWG_ZZVDF1Qo3MaJ0",
    authDomain: "offshorewindfarm-c4f6b.firebaseapp.com",
    databaseURL: "https://offshorewindfarm-c4f6b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "offshorewindfarm-c4f6b",
    storageBucket: "offshorewindfarm-c4f6b.appspot.com",
    messagingSenderId: "625070994693",
    appId: "1:625070994693:web:824f19beb92b693467f36c"
};

// Initialize Firebase

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const rtdb = getDatabase()

export { rtdb, ref, onValue }