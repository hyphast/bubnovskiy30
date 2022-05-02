import { useEffect, useState } from 'react'
import { Button } from 'antd'
import UpcomingRecords from './UpcomingRecords/UpcomingRecords'
import FinishedRecords from './FinishedRecords/FinishedRecords'
import { useHistory } from 'react-router-dom'

const Records = ({
  upcomingRecords,
  finishedRecords,
  getUpcomingRecords,
  deleteRecord,
  recordsIds,
}) => {
  const [isUpcoming, setIsUpcoming] = useState(true)
  const history = useHistory()

  useEffect(() => {
    getUpcomingRecords()
  }, [getUpcomingRecords]) //TODO was: []

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Button onClick={() => setIsUpcoming(false)} type="dashed">
          Архив
        </Button>
        <Button
          onClick={() => setIsUpcoming(true)}
          style={{ marginLeft: '0.4rem' }}
        >
          Текущие записи
        </Button>
        <Button
          onClick={() => history.push('/records-calendar')}
          style={{ float: 'right' }}
        >
          Календарь
        </Button>
      </div>
      {isUpcoming ? (
        <UpcomingRecords
          recordsIds={recordsIds}
          deleteRecord={deleteRecord}
          upcomingRecords={upcomingRecords}
        />
      ) : (
        <FinishedRecords finishedRecords={finishedRecords} />
      )}
    </>
  )
}

export default Records
