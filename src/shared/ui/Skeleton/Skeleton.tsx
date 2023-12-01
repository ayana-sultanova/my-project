import {classNames} from "shared/lib/classNames/classNames";
import cls from './Skeleton.module.scss'
import { useTranslation } from 'react-i18next'

interface SkeletonProps {
    className?: string
}

export const Skeleton = ({className}: SkeletonProps) => {
  const { t } = useTranslation()
  
    return (
        <div className={classNames(cls.Skeleton, {}, [className])}>
        
        </div>
    );
};