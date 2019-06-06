import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">MadGeniusBlink</h1>
            <p>Unleash the innate creative.<br /> Break Free.<br />  Master Thinking without Thinking.</p>
            <button onClick={startLogin} className="login-button">Enter MadGeniusBlink</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)