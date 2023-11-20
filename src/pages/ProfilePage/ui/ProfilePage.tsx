import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import {
  fetchProfileData,
  getProfileError,
  getProfileIsloading, getProfileValidateErrors, profileActions,
  ProfileCard,
  profileReducer, ValidateProfileError
} from 'enteties/Profile'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'enteties/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'
import { getProfileForm } from 'enteties/Profile/model/selectors/getProfileForm/getProfileForm'
import { type Currency } from '../../../enteties/Currency'
import { type Country } from 'enteties/Country'
import { TextTheme, Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  profile: profileReducer
}
interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const form = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsloading)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('Имя пользователя не заполнено'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст')
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ name: value || '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    const regexOnlyNumbers = /\d$/g
    if (value?.match(regexOnlyNumbers)) {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
              <ProfilePageHeader />
              {validateErrors?.length && validateErrors.map(err => (
                  <Text
                      theme={TextTheme.ERROR}
                      text={validateErrorTranslates[err]}
                      key={err}
                  />
              ))}
                <ProfileCard
                    data={form}
                    error={error}
                    isLoading={isLoading}
                    readonly={readOnly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
  )
}

export default ProfilePage
