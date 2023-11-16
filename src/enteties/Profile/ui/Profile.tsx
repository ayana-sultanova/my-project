import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Profile.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'enteties/Profile'

const reducers: ReducersList = {
  profile: profileReducer
}
interface ProfileProps {
  className?: string
}

export const Profile = ({ className }: ProfileProps) => {
  return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(cls.Profile, {}, [className])}>

        </div>
      </DynamicModuleLoader>
  )
}
