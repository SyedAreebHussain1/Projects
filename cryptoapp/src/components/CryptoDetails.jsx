import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import LineChart from './LineChart'
import { useGetCryptosQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'

import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const [cryptoDetails, setCryptoDetails] = useState([])
    const [timeperiod, setTimeperiod] = useState('7d')
    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptosQuery(coinId)
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    const parse = require('html-react-parser');

    useEffect(() => {
        setCryptoDetails(data?.data?.coins)
    }, [data?.data?.coins !== undefined])

    if (isFetching) return <Loader />

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.price && millify(cryptoDetails?.[0]?.price) : "00"}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: `${cryptoDetails !== undefined ? cryptoDetails?.[0]?.rank : '00'}`, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.['24hVolume'] && millify(cryptoDetails?.[0]?.['24hVolume']) : '00'}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.marketCap && millify(cryptoDetails?.[0]?.marketCap) : '00'}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.price && millify(cryptoDetails?.[0]?.price) : '00'}`, icon: <TrophyOutlined /> },
    ];
    // console.log(stats)
    const genericStats = [
        { title: 'Price to USDNumber Of Markets', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.price && millify(cryptoDetails?.[0]?.price) : '00'}`, icon: <DollarCircleOutlined /> },
        { title: 'Number Of Exchanges', value: `${cryptoDetails !== undefined ? cryptoDetails?.[0]?.rank : '00'}`, icon: <NumberOutlined /> },
        { title: 'Aprroved Supply', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.['24hVolume'] && millify(cryptoDetails?.[0]?.['24hVolume']) : '00'}`, icon: <ThunderboltOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.marketCap && millify(cryptoDetails?.[0]?.marketCap) : '00'}`, icon: <DollarCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails !== undefined ? cryptoDetails?.[0]?.price && millify(cryptoDetails?.[0]?.price) : '00'}`, icon: <TrophyOutlined /> },
    ];
    return (
        <Col className="coin-detail-container">
            <Col className="coin-heading-container">
                <Title level={2} className="coin-name">
                    {cryptoDetails?.[0]?.name} ({cryptoDetails?.[0]?.symbol}) Price
                </Title>
                <p>{cryptoDetails?.[0]?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Select defaultValue='7d' className='select-timeperiod' placeholder='Select Timeperiod'
                onChange={(value) => setTimeperiod(value)}
            >
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>

            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.[0]?.price)} coinName={cryptoDetails?.[0]?.name} />

            <Col className='stats-container'>
                <Col className='coin-value-statistics'>
                    <Col className='coin-value-statistics-heading'>
                        <Title level={3} className='coin-detailes-heading'>
                            {cryptoDetails?.[0]?.name} Value Statistics
                        </Title>
                        <p>An overview showing the statistics of {cryptoDetails?.[0]?.name}, such as the base and quote currency, the rank, and trading volume.</p>
                    </Col>
                    {stats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
                <Col className='other-stats-info'>
                    <Col className='coin-value-statistics-heading'>
                        <Title level={3} className='coin-detailes-heading'>
                            {cryptoDetails?.[0]?.name} Value Statistics
                        </Title>
                        <p>An overview showing the statistics of {cryptoDetails?.[0]?.name}, such as the base and quote currency, the rank, and trading volume.</p>
                    </Col>
                    {genericStats.map(({ icon, title, value }) => (
                        <Col className="coin-stats">
                            <Col className="coin-stats-name">
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className="stats">{value}</Text>
                        </Col>
                    ))}
                </Col>
            </Col>
            <Col className='coin-desh-link'>
                <Row className='coin-desc'>
                    <Title level={3} className='coin-details-heading'>
                        What is {cryptoDetails?.[0]?.name}?
                        {HTMLReactParser('<p>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.</p>')}
                    </Title>
                </Row>
                <Col className='coin-links'>
                    <Title level={3} className='coin-details-heading'>
                        {cryptoDetails?.[0]?.name} Links
                    </Title>

                    {/* {cryptoDetails.links?.map((link) => (
                        <Row className="coin-link" key={link.name}>
                            <Title level={5} className="link-name">{link.type}</Title>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                        </Row>
                    ))} */}

                </Col>
            </Col>
        </Col >
    )
}

export default CryptoDetails