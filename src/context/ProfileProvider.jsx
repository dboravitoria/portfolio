import ProfileContext from "./ProfileContext"
import profile from '../../data/profile.json'

export default function ProfileProvider({children}) {
  return (
        <ProfileContext.Provider value={profile}>
            {children}
        </ProfileContext.Provider>
  )
}

