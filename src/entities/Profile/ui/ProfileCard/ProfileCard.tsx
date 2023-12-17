import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/ProfileSchema'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from 'entities/Currency'
import { type Currency } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'
import { HStack, VStack } from 'shared/ui/Stack'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeLastName?: (value: string) => void
  onChangeFirstName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeAge,
    onChangeCity,
    onChangeLastName,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
            <HStack align={'center'} className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </HStack>
    )
  }

  if (error) {
    return (
            <HStack align={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибке при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
        <VStack max gap={'8'} className={classNames(cls.ProfileCard, mods, [className])}>
                {data?.avatar && (
                    <HStack justify={'center'} max className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                        />
                    </HStack>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                    onChange={onChangeLastName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
        </VStack>
  )
}
