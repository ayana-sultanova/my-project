import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const optionsList = useMemo(() => options?.map((opt) => (
      <option
          className={cls.option}
          value={opt.value}
          key={opt.value}
      >
        {opt.content}
      </option>
  )), [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label &&
                (
                    <span className={cls.label}>
                        {label + '>'}
                    </span>
                )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
  )
})
