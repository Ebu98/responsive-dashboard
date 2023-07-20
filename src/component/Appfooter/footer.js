import { Typography } from 'antd'
import React from 'react'

const AppFooter = () => {
  return (
    <div className="app-footer">
      <Typography.Link href="tel: +23455667767">+2347039634445</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}> Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>Terms of Use</Typography.Link>
    </div>
  )
}

export default AppFooter