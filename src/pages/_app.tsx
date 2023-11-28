import '../styles/global.scss'
import { Button, ConfigProvider, Space } from 'antd';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              colorTextHeading: '#F3E1FA',
              colorTextDescription: '#B1A4B6',
              borderRadiusLG: 2
            }
          }
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider >
    </>
  )
}

export default MyApp
