import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { type InputHTMLAttributes, memo, useEffect, useState, useRef } from 'react'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HtmlInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  type?: string
  autoFocus?: boolean
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const isCaretVisible = isFocused && !readOnly

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }
  return (
        <div className={classNames(cls.InputWrapper, { [cls.readOnly]: readOnly }, [className])}>
            {placeholder && <div className={cls.placeholder}>
                {`${placeholder}>`}
            </div>}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    disabled={readOnly}
                    {...otherProps}
                />
                {isCaretVisible &&
                    <span
                        style={{ left: `${caretPosition * 9}px` }}
                        className={cls.caret}
                />}
            </div>
        </div>
  )
})
