import ProfileContext from "./ProfileContext"
import profile from '../../profile.json'

export default function ProfileProvider({children}) {
  return (
        <ProfileContext.Provider value={profile}>
            {children}
        </ProfileContext.Provider>
  )
}

