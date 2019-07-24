import firebase from 'firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection("users").doc('4XavheDmO7GLyArJgGjF').collection("cartItems").doc("XHB91h7Gj8Xiq3j0YDfL")
firestore.doc('/user/.../cartitems/..');
firestore.collection('/user/.../cartitems/..');