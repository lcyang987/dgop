import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { JOBTYPE_MANAGER } from '@/actions';

class ContainersJobTypeManagerJobPoundageBtns extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    editAble: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }
  edit() {
    this.props.tableEnableEdit();
  }
  cancel() {
    this.props.tableDisableEdit();
    this.props.tableGet(this.props.searchData);
  }
  save() {
    const validate = this.props.table.every(t => t.validate !== false);
    // console.log(validate)
    if (validate) {
      this.props.tableEditSubmit({
        jobTypeId: this.props.searchData.id,
        jobPoundageList: JSON.stringify(this.props.table),
      }).then(() => {
        this.props.tableGet(this.props.searchData);
        this.props.tableDisableEdit();
      });
    }
  }
  render() {
    return (
      <div style={{ margin: '8px 0 10px 6px' }}>
        {
          this.props.editAble ?
            <React.Fragment>
              <Button onClick={this.cancel.bind(this)}>查看</Button>
              <Button onClick={this.save.bind(this)} style={{ marginLeft: 6 }}>保存</Button>
            </React.Fragment> :
            <Button onClick={this.edit.bind(this)}>编辑</Button>
        }
        <Button onClick={this.props.hide} style={{ marginLeft: 6 }} type="danger">关闭</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const data = state.jobTypeManager;
  return {
    table: data.jobPoundageTable.data,
    loading: data.jobPoundageTable.loading,
    editAble: data.jobPoundageTable.editAble,
    searchData: data.jobPoundageTable.searchData,
  }
}

const methods = JOBTYPE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.jobPoundageTableGet,
  hide: methods.jobPoundageTableHide,
  reset: methods.jobPoundageTableReset,
  tableEditSubmit: methods.jobPoundageTableEditSubmit,
  tableEnableEdit: methods.jobPoundageTableEnableEdit,
  tableDisableEdit: methods.jobPoundageTableDisableEdit,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobTypeManagerJobPoundageBtns);