import '../styles/global.scss'
import { Button, ConfigProvider, Space } from 'antd';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              colorTextHeading: '#E1FAEC',
              colorTextDescription: '#9E9E9E',
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
