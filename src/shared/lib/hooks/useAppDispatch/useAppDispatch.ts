import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/providers/StoryProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()
