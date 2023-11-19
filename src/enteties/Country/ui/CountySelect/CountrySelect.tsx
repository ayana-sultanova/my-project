import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'
import { memo, useCallback } from 'react'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Kyrgyzstan, content: Country.Kyrgyzstan },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Belarus, content: Country.Belarus }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation()
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Country)
    }
  }, [onChange])

  return (
        <Select
            readonly={readonly}
            label={t('Укажите страну')}
            options={options}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
        />
  )
})
