// 'use client'

// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from './firebase'
// import {
//   onAuthStateChanged,
//   signOut as firebaseSignOut,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth'

// interface AuthContextType {
//   user: any
//   loading: boolean
//   login: (email: string, password: string) => Promise<void>
//   register: (email: string, password: string) => Promise<void>
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | null>(null)

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<any>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser)
//       setLoading(false)
//     })
//     return () => unsubscribe()
//   }, [])

//   const login = async (email: string, password: string) => {
//     await signInWithEmailAndPassword(auth, email, password)
//   }

//   const register = async (email: string, password: string) => {
//     await createUserWithEmailAndPassword(auth, email, password)
//   }

//   const logout = () => firebaseSignOut(auth)

//   return (
//     <AuthContext.Provider value={{ user, loading, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (!context) throw new Error('useAuth must be used within AuthProvider')
//   return context
// }
