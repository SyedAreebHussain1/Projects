import React from 'react'
import SurveysTable from './helpers/SurveysTable'
const Surveys = ({ visible, toggle }) => {
    return <SurveysTable visible={visible} toggle={toggle} />
}
export default Surveys