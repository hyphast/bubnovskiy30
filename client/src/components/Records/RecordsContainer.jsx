import React from 'react';
import {connect} from 'react-redux';
import Records from "./Records";
import {getUpcomingRecords} from "../../redux/reducers/recordsReducer/recordsActions";

const RecordsContainer = (props) => {
  return (
    <Records {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    upcomingRecords: state.records.upcomingRecords,
    finishedRecords:state.records.finishedRecords,
  }
}

export default connect(mapStateToProps, {getUpcomingRecords})(RecordsContainer);