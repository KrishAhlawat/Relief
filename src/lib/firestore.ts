import { collection, query, orderBy, getDocs, addDoc, Timestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { ReliefPoint } from '../types/relief'

const reliefCol = collection(db, 'relief_points')

/**
 * Fetches relief points ordered by creation time.
 */
export async function fetchReliefPoints(): Promise<ReliefPoint[]> {
  const q = query(reliefCol, orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Omit<ReliefPoint, 'id'>) }))
}

/**
 * Adds a new relief point entry.
 */
export async function addReliefPoint(data: Omit<ReliefPoint, 'id' | 'createdAt'>): Promise<void> {
  await addDoc(reliefCol, {
    ...data,
    createdAt: Timestamp.now(),
  })
}