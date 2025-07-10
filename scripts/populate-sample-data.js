// Sample data setup for Eventure
// Run this script to populate your Firestore with sample checkpoints

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';

// Firebase config - make sure your .env file is set up
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample checkpoints data
const sampleCheckpoints = [
  {
    name: "Main Stage",
    uuid: "cp_main_stage_001",
    location: { lat: 22.5726, long: 88.3639 },
    startTime: new Date('2025-07-10T10:00:00'),
    endTime: new Date('2025-07-10T22:00:00'),
    description: "Main event stage with live performances"
  },
  {
    name: "Tech Expo",
    uuid: "cp_tech_expo_002", 
    location: { lat: 22.5720, long: 88.3635 },
    startTime: new Date('2025-07-10T09:00:00'),
    endTime: new Date('2025-07-10T18:00:00'),
    description: "Technology exhibition and demos"
  },
  {
    name: "Food Court",
    uuid: "cp_food_court_003",
    location: { lat: 22.5730, long: 88.3645 },
    startTime: new Date('2025-07-10T08:00:00'),
    endTime: new Date('2025-07-10T23:00:00'),
    description: "Delicious food and refreshments"
  },
  {
    name: "Gaming Arena",
    uuid: "cp_gaming_arena_004",
    location: { lat: 22.5715, long: 88.3630 },
    startTime: new Date('2025-07-10T10:00:00'),
    endTime: new Date('2025-07-10T20:00:00'),
    description: "Gaming competitions and tournaments"
  },
  {
    name: "Art Gallery",
    uuid: "cp_art_gallery_005",
    location: { lat: 22.5735, long: 88.3650 },
    startTime: new Date('2025-07-10T11:00:00'),
    endTime: new Date('2025-07-10T19:00:00'),
    description: "Student art exhibitions and workshops"
  }
];

// Sample users data
const sampleUsers = [
  {
    id: "user_demo_001",
    name: "Alex Johnson",
    scanned: ["cp_main_stage_001", "cp_tech_expo_002"]
  },
  {
    id: "user_demo_002", 
    name: "Priya Sharma",
    scanned: ["cp_main_stage_001", "cp_food_court_003", "cp_gaming_arena_004"]
  },
  {
    id: "user_demo_003",
    name: "Rahul Kumar", 
    scanned: ["cp_tech_expo_002"]
  }
];

async function populateSampleData() {
  try {
    console.log('🔄 Populating sample checkpoints...');
    
    // Add checkpoints
    for (const checkpoint of sampleCheckpoints) {
      await addDoc(collection(db, 'checkpoints'), checkpoint);
      console.log(`✅ Added checkpoint: ${checkpoint.name}`);
    }

    console.log('🔄 Populating sample users...');
    
    // Add users
    for (const user of sampleUsers) {
      await setDoc(doc(db, 'users', user.id), {
        name: user.name,
        scanned: user.scanned
      });
      console.log(`✅ Added user: ${user.name}`);
    }

    console.log('🎉 Sample data population complete!');
    console.log('📱 You can now test the app with sample checkpoints and users.');
    
  } catch (error) {
    console.error('❌ Error populating sample data:', error);
  }
}

// Run the script
populateSampleData();
