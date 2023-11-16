import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void

}

export const LoginModal = ({ className, onClose, ...props }: LoginModalProps) => {
  return (
        <Modal
            className={classNames('', {}, [className])}
            lazy
            {...props}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
  )
}
