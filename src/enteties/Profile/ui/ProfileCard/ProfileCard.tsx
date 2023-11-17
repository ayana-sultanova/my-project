import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'enteties/Profile/model/selectors/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  // const error = useSelector(getProfileError)
  // const isLoading = useSelector(getProfileIsloading)

  return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.name}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваше фамилия')}
                    className={cls.input}
                />

            </div>
        </div>
  )
}
