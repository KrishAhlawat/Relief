'use client'
import { useEffect, useState } from 'react'

// Mock function to fetch relief points
async function fetchReliefPoints() {
  return [
    { id: '1', data: () => ({ name: 'Point A', type: 'Type 1', location: { latitude: 12.34, longitude: 56.78 } }) },
    { id: '2', data: () => ({ name: 'Point B', type: 'Type 2', location: { _lat: 34.56, _long: 78.90 } }) },
  ]
}

interface ReliefPoint {
  id: string
  name: string
  type: string
  location: any  // we'll narrow this in a second
}

export default function ReliefPointList() {
  const [points, setPoints] = useState<ReliefPoint[]>([])

  useEffect(() => {
    fetchReliefPoints().then(docs => {
      const pts = docs.map(d => ({ id: d.id, ...d.data() }))
      setPoints(pts)
    })
  }, [])

  const formatLocation = (loc: any) => {
    // Firestore GeoPoint
    if ('latitude' in loc && 'longitude' in loc) {
      return `${loc.latitude.toFixed(4)}, ${loc.longitude.toFixed(4)}`
    }
    // internal Firestore fields
    if ('_lat' in loc && '_long' in loc) {
      return `${loc._lat.toFixed(4)}, ${loc._long.toFixed(4)}`
    }
    // plain object { lat, lng }
    if ('lat' in loc && 'lng' in loc) {
      return `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`
    }
    // fallback
    return JSON.stringify(loc)
  }

  return (
    <ul className="space-y-4">
      {points.map(p => (
        <li key={p.id} className="p-4 border rounded">
          <h3 className="font-semibold">{p.name}</h3>
          <p>Type: {p.type}</p>
          <p>Location: {formatLocation(p.location)}</p>
        </li>
      ))}
    </ul>
  )
}
