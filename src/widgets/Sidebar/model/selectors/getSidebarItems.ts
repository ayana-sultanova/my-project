import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'enteties/User'
import { type SidebarItemType } from '../types/sidebarSchema'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon
      },
      {
        path: RoutePath.about,
        text: 'О нас',
        Icon: AboutIcon
      }
    ]
    if (userData) {
      SidebarItemsList.push({
        path: RoutePath.profile + userData?.id,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true
      })
    }
    return SidebarItemsList
  }
)
