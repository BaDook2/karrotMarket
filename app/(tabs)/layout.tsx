import TabBar from '@/components/tab-bar'
import React from 'react'

function TabLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}<TabBar/></div>
  )
}

export default TabLayout