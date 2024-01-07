// hooks/useFirebaseData.js
import { useEffect, useState } from 'react';
import { database } from '../Firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const useFirebaseData = (path) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const dataRef = ref(database, path);

		const unsubscribe = onValue(dataRef, (snapshot) => {
			const val = snapshot.val();
			setData(val);
		});

		return () => unsubscribe();
	}, [path]);

	return data;
};

export default useFirebaseData;
