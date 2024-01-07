// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBPIv8dtF5nOZ6xvmbli9UAUlQS-_MjSJA',
	authDomain: 'portfolio-nico-8f9c5.firebaseapp.com',
	projectId: 'portfolio-nico-8f9c5',
	storageBucket: 'portfolio-nico-8f9c5.appspot.com',
	messagingSenderId: '989494412444',
	appId: '1:989494412444:web:e5e1ce47c04abbb7b51959',
	databaseURL: 'https://portfolio-nico-8f9c5-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
