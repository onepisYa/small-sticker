// import { useLocation } from "react-router-dom"
// import { useLocation } from 'react-router';
// import list from '../utils/router';
// import { useState } from 'react'
// import { Alert } from 'antd';
import { motion } from "framer-motion"

export default function Navbar() {
  // const h = 10
  const h = new Date().getHours()

  // @unocss-include
  const time_list = [
    ['夜已深，注意休息哦！', 'i-ri-moon-cloudy-fill'], // 0,1,2
    ['晚安全世界，快去睡觉吧！', 'i-ri-sparkling-2-fill'], // 3,4,5
    ['早安呀！', 'i-ri-sun-foggy-fill'], // 6,7,8
    ['早生蚝！', 'i-ri-sun-cloudy-fill'], // 9,10,11
    ['中午咯~打个盹？', 'i-ri-sun-fill'], // 12,13,14
    ['下午好，继续加油哇！', 'i-ri-game-fill'], // 15,16,17
    ['吃了嘛！！', 'i-ri-restaurant-fill'], // 18,19,20
    ['累了一天吧，该睡觉咯~', 'i-ri-moon-foggy-fill'], // 21,22,23
  ]

  // 获取问好消息
  const getMsg = () => {
    switch (h) {
      case 15:
        return ['三点几嘞，做做做撚啊做！', 'i-ri-beer-fill']
      default:
        return time_list[Math.floor(h / 3)]
    }
  }
  // const [showText , setShowText] = useState(false)
  // const location = useLocation()
  // const tag = list.done.find((e)=> e.url === location.pathname)
  return (
    <div bg='white' overflow-hidden>
      <div>
        <div className='h-[64px]' px-4 flex='~ items-center justify-between'>
          <div  flex-1 >
            <div className="i-ri-menu-fill text-2xl text-gray-500 animate-spin " />
          </div>
          <a flex='~ items-center' href='/' decoration-none text-zinc-900>
            <img src='/wsj.png' alt='logo' className='animate-spin w-12 h-12' />
            {/* <img src='/sticker_logo.png' alt='logo' className='w-8 h-8' /> */}
            {/* <div text='lg' font='bold'>大贴纸</div> */}
          </a>
          {/* {tag?
            <div flex='~ items-center' bg-gray-50 px-2 py-1 rounded-full>
              <img src={tag.logo} alt="logo" w-5 h-5 mr-2 />
              <div>{tag.name}</div>
            </div>:''
          } */}
          {/* <button onClick={()=>{setShowText(!showText)}}></button> */}
          <motion.div className='flex justify-end flex-1'>
            <a href="/sponsor" decoration-none text-zinc-900 min-w-8 h-8 px-3 bg-orange-100 rounded-full flex='~ items-center justify-center' className='animated-button= animate-spin '>
              {/* <motion.div 
                initial="collapsed"
                animate={
                  showText ?'open':'collapsed'
                }
                exit="collapsed"
                variants={{
                  open: { opacity: 1, width: "auto" },
                  collapsed: { opacity: 0, width: 0 }
                }}
                transition={{ type: "spring" }}className=' text-blue-500 '
              >
                
              </motion.div> */}
              <div className={`i-ri-cup-fill text-orange-500`} />
              <div className='whitespace-nowrap overflow-hidden text-sm ml-1 text-orange-500'>请我喝咖啡</div>
            </a>
          </motion.div>
        </div>
      </div>
      <div px-4 pb-4 text='zinc-500' flex='~ items-center justify-center' animate-spin >
        <div className={getMsg()[1]} text-lg text-blue-500></div>
        <div pl-2>{getMsg()[0]}</div>
      </div>
      {/* <Alert message="本站仅供娱乐，所造成的一切后果与本站无关" banner /> */}
    </div>
  )
}
