import type { NextPage } from 'next'
import Image from 'next/image'
import './index.scss'
import CollpaseMenu from '../CollapseMenu'
import { useTranslation } from 'react-i18next'

import { navs } from './constant'
import { useCallback } from 'react'

const Header: NextPage = () => {
  const { i18n } = useTranslation()

  const changeLang = useCallback((lang: any) => {
    i18n.changeLanguage(lang.key)
    // i18n.reloadResources()
  }, [])

  return (
    <>
      <header className="okx-header">
        {/* logo区域 */}
        <div className="logo-wrapper">
          <Image src="/images/logo.png" alt="OKX" width={82} height={36} />
        </div>

        {/* 导航栏区域 */}
        <div className="navs">
          {navs.map((el) => {
            return (
              <CollpaseMenu menu={el.children} key={el.title}>
                <div className="nav-item sm-screen-hidden">
                  <span>{el.title}</span>
                  <span className="title-arrow okx-header-footer-arrow-chevrons-down"></span>
                </div>
              </CollpaseMenu>
            )
          })}
        </div>

        {/* 登录区域 */}
        <div className="login-wrapper">
          <span className="login sm-screen-hidden">Log in</span>
          <span className="signup">Sign up</span>
          <span className="menu bg-screen-hidden okx-header-footer-hamburger"></span>
        </div>

        {/* 多语言区域 */}
        <CollpaseMenu
          position="right"
          menu={[
            {
              title: '简体中文',
              key: 'zh',
            },
            {
              title: 'English',
              key: 'en',
            },
          ]}
          menuClick={changeLang}
        >
          <div className="languages sm-screen-hidden">
            <span className="okx-header-footer-language"></span>
          </div>
        </CollpaseMenu>
      </header>
      <div className="fixed-block"></div>
    </>
  )
}

export default Header
