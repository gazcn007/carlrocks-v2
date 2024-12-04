import React from 'react';
import { Card, ConfigProvider, theme, Row, Col } from 'antd';
const { defaultAlgorithm, darkAlgorithm } = theme;
import { useColorMode } from '@docusaurus/theme-common';
const { Meta } = Card

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };

type GearCardProp = {

}

const GearCard: React.FC = () => {
    const { isDarkTheme } = useColorMode();

    return <ConfigProvider
        theme={{
            algorithm: isDarkTheme ? darkAlgorithm : defaultAlgorithm,
        }}>
        <Row gutter={16}>
          <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
          </Col>
          <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
          </Col>
          <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
          </Col>
        </Row>
    </ConfigProvider>
};

export default GearCard;