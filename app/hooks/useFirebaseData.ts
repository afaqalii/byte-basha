import { database } from '@/firebase';
import { DataProps } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';
import { ref, get } from 'firebase/database';

const fetchData = async (path: string): Promise<DataProps[]> => {
    const dbRef = ref(database, path);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
        return Object.values(snapshot.val());
    } else {
        throw new Error('No data available');
    }
};

export const useFirebaseData = (path: string) => {
    return useQuery({
        queryKey: [path],
        queryFn: () => fetchData(path),
        staleTime: 1000 * 60 * 5, 
    });
};