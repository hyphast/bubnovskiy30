import React, {FC} from 'react';
import {connect} from 'react-redux';
import Records from "./Records";
import {getUpcomingRecords, deleteRecord} from "../../redux/reducers/recordsReducer/recordsActions";
import {finishedRecType, upcomingRecType} from "../../redux/reducers/commonTypes";
import {stateType} from "../../redux/reducers/rootReducer";

type mapStateToPropsType = {
  upcomingRecords: Array<upcomingRecType>,
  finishedRecords: Array<finishedRecType>,
  recordsIds: Array<string>,
}
type mapDispatchToPropsType = {
  getUpcomingRecords: () => void,
  deleteRecord: (id: string) => void,
}
type propsType = mapStateToPropsType & mapDispatchToPropsType;

const RecordsContainer: FC<propsType> = (props) => {
  return (
    <Records {...props}/>
  );
};

const mapStateToProps = (state: stateType): mapStateToPropsType => {
  return {
    upcomingRecords: state.records.upcomingRecords,
    finishedRecords: state.records.finishedRecords,
    recordsIds: state.records.recordsIds,
  }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, stateType>
(mapStateToProps, {getUpcomingRecords, deleteRecord})(RecordsContainer);