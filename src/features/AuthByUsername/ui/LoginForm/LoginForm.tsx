import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginIsloading } from '../../model/selectors/getLoginIsloading/getLoginIsloading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const password = useSelector(getLoginPassword)
  const username = useSelector(getLoginUsername)
  const isLoading = useSelector(getLoginIsloading)
  const error = useSelector(getLoginError)

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onClickLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, username])

  return (
      <DynamicModuleLoader
          reducers={initialReducers}
          removeAfterUnmount
      >
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                type='text'
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                type='text'
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={onClickLogin}
            >
                {t('Войти')}
            </Button>
        </div>
      </DynamicModuleLoader>
  )
})

export default LoginForm
