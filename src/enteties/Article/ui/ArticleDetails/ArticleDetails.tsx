import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArtcileDetails.module.scss'
import { useTranslation } from 'react-i18next'

interface ArtcileDetailsProps {
  className?: string
}

export const ArtcileDetails = ({ className }: ArtcileDetailsProps) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.ArtcileDetails, {}, [className])}>

        </div>
  )
}
