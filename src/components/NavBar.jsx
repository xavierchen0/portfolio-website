import React, { useEffect, useState } from "react"
import { motion } from "motion/react"

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  const handleItemClick = (item) => {
    setActiveTab(item.name)
    // TODO: add functionality to jump to section
  }

  return (
    <div
      className={`fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 ${className || ''}`}
    >
      <div className="flex items-center gap-3 bg-gray-100/5 border border-border backdrop-blur-lg py-2 px-3 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          return (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-rosepinelove ${isActive ? 'bg-rosepinehighlight-high' : ''}`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="navItem"
                  className="absolute inset-0 w-full bg-rosepinehighlight-high/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-rosepinelove rounded-t-full">
                    <div className="absolute w-12 h-6 bg-rosepinelove/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-rosepinelove/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-rosepinelove/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )
              }
            </motion.button>
          )
        })}
      </div>
    </div >
  )
}
