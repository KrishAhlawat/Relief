import { Timestamp, GeoPoint } from 'firebase/firestore'
export interface ReliefPoint {
  id: string
  name: string
  type: string
  location: GeoPoint
  createdAt: Timestamp
  createdBy: string
}
