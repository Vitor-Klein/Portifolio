import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react'
import styles from "./repositorio.module.scss";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  name: string;
  date: string;
  image: string;
}

const { Meta } = Card;

const RepoLink: React.FC<ButtonProps> = ({ children, url = '', name = '', date = '', image = '', ...rest }) => {
  return (
    <>
      <Row justify={'space-between'}>
        <Link href={url}>
          <Card
            hoverable
            style={{
              width: 300,
              backgroundColor: '#252032',
              borderColor: '#252032',
            }}
            cover={
              <img
                alt="example"
                src={image}
              />
            }
          >
            <Meta
              avatar={<Avatar src="https://github.com/Vitor-Klein.png" />}
              title={name}
              description={date}
            />
          </Card>
        </Link>
      </Row>
    </>
  )
}

export default RepoLink;
