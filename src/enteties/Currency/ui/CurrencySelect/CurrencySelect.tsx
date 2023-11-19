import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.RUB, content: Currency.RUB }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation()
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Currency)
    }
  }, [onChange])

  return (
        <Select
            readonly={readonly}
            label={t('Укажите валюту')}
            options={options}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
        />
  )
})
