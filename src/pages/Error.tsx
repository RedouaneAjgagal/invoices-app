import { useRouteError, useNavigate } from 'react-router-dom'


const Error = () => {
  const navigate = useNavigate()
  const routeError = useRouteError() as { data: { errorMsg: string } }
  const isError = routeError?.data?.errorMsg ? true : false

  const backHomeHandler = () => {
    return navigate('/invoices')
  }
  return (
    <div className='fixed left-[50%] top-16 -translate-x-2/4 text-center dark:text-darkTextGray text-lightTextGray text-lg grid gap-4'>
      <p className=''>Oups.. something went wrong</p>
      {isError && <p>{routeError.data.errorMsg}</p>}
      <button onClick={backHomeHandler} className='dark:bg-darkTextGray bg-lightDarkBlue dark:text-darkerBlue text-lightGray w-28 m-auto'>Back Home</button>
    </div>
  )
}

export default Error