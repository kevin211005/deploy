import React from 'react';
import { useState, useEffect } from 'react';
import {Chip, Box} from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs, 
} from 'firebase/firestore';
function App() {
  const [data, setData] = useState<string[]>([]);
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  }; 
  const app = initializeApp(config);
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const testDB = collection(db, 'TestData');
      const snapshot = await getDocs(testDB);
      const docsData = snapshot.docs.map(doc => doc.data());
      const data = docsData.map((doc: any) => doc.Data);
      setData(data);
    }
    fetchData();
  }, [app]);

  return (
    <Box >
      <h1>This is deploy test V1-12 test too3123</h1>
      {
        data.map((item, index) => (
          <Chip key={index} label={item} />
        ))
      }
      <h1>check force push</h1>
    </Box>
  );
}

export default App;
