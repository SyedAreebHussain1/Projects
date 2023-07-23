import Alert from 'react-bootstrap/Alert';
function AlertMsg({ alertMsg }) {
    return (
        <>
            <Alert key={alertMsg?.keyName} variant={alertMsg?.keyName}>
                {alertMsg?.msg}
            </Alert>

        </>
    );
}

export default AlertMsg;