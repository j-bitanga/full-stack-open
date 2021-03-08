const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <>
    
        {message.includes("successfully") && (<div className='success'>{message}</div>)}
        {message.includes("error") && (<div className='error'>{message}</div>)}
          </>
    )
}

export default Notification