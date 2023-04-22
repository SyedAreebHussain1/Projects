import React, { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment'
import Loader from './Loader';


const { Text, Title } = Typography
const { Option } = Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    //   const count = simplified ? 10 : 100
    const { data } = useGetCryptosQuery(100)
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })

    if (!cryptoNews?.value) { return <Loader /> }



    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col>
                    <Select showSearch
                        className='select-news'
                        optionFilterProp='children'
                        placeholder='Select a Crypto'
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
                    >
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {data?.data?.coins.map((currency) => <Option value={currency?.name}>{currency?.name}</Option>)}
                    </Select>
                </Col>
            )}


            {cryptoNews?.value?.map((newsVal, i) => {
                // console.log(newsVal);
                return <Col xs={24} sm={12} lg={8} key={i} >
                    <Card hoverable className='news-card'>
                        <a href={newsVal?.url} target='_blank' >
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{newsVal?.name}</Title>
                                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={newsVal?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                            </div>
                            <p>
                                {newsVal.description > 100 ? `${newsVal?.description.substring(0, 100)}...` : newsVal?.description}
                            </p>
                            <div className='provider-container'>
                                <div>
                                    <Avatar src={newsVal?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                                    <Text className='provider-name'>{newsVal?.provider[0]?.name}</Text>
                                </div>
                                <Text >{moment(newsVal.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            })
            }
        </Row>
    )
}

export default News