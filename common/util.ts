import { BG_WIDTH, MID_WIDTH, SM_WIDTH, BG, SM, MID } from 'common/constant'
// @ts-ignore
import Cookies from 'js-cookie'


// 防止文档传屏滚动
export const avoidScollingOverflow = (selecter: string = 'body') => {
  // document.documentElement.style.height = window.screen.height + 'px'
  const top = document.documentElement.scrollTop
  let element = document.querySelector(selecter)
  element!.setAttribute(
    'style',
    `top: ${-top}px; overflow: hidden; position: fixed; width: 100%;`
  )

  // 返回清除方法
  return () => {
    element!.removeAttribute('style')
    document.documentElement.scrollTo({
      top: top,
    })
    element = null
  }
}

// 格式化浏览器默认语言
export const getHeaderDefaultLang = (lang: string) => {
  return lang.split(',')[0].replace('-', '_') // 并将zh-CN, 换成zh_CN的格式, 好处理
}

// 判断是否为移动端
export const isMobile = (userAgent: string) => {
	const ua = userAgent.toLowerCase();
	return /mobile|android|iphone|ipod|phone|ipad/i.test(ua);
}

// 获取屏幕大小, 并设置到cookie中, 方便下次访问服务端渲染, 可以根据屏幕大小返回不同的资源

export const getResponseSize = ()=> {
  const width = window.screen.width
  if (width <= SM_WIDTH) {
    Cookies.set('responseSize', SM)
    return SM
  } else if (width >= MID_WIDTH && width <= BG_WIDTH) {
    Cookies.set('responseSize', MID)
    return MID    
  } else {
    Cookies.set('responseSize', BG)
    return BG    
  }
}