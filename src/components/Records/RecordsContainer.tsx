import React, { FC } from 'react'
import { connect } from 'react-redux'
import Records from './Records'
import {
  getUpcomingRecords,
  deleteRecord,
  resetModified,
} from '../../redux/reducers/recordsReducer/recordsActions'
import { RecType } from '../../redux/reducers/commonTypes'
import { StateType } from '../../redux/reducers/rootReducer'

type MapStateToPropsType = {
  upcomingRecords: Array<RecType>
  finishedRecords: Array<RecType>
  recordsIds: Array<string>
}
type MapDispatchToPropsType = {
  getUpcomingRecords: () => void
  deleteRecord: (id: string) => void
  resetModified: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const RecordsContainer: FC<PropsType> = (props) => {
  return <Records {...props} />
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    upcomingRecords: state.records.upcomingRecords,
    finishedRecords: state.records.finishedRecords,
    recordsIds: state.records.recordsIds,
  }
}

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  any, //TODO was {}
  StateType
>(mapStateToProps, { getUpcomingRecords, deleteRecord, resetModified })(
  RecordsContainer,
)
