import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { JOBTYPE_MANAGER } from '@/actions';
import ThisTable from '@/components/jobTypeManager/jobPoundageTable';

class ContainersJobTypeManagerJobPoundageTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    editAble: PropTypes.bool.isRequired,
    max: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableSetData: PropTypes.func.isRequired,
    tableEnableEdit: PropTypes.func.isRequired,
    tableDisableEdit: PropTypes.func.isRequired,
  }
  transData(editData) {
    editData.reduce((prev, next) => {
      next.jobQuantityMin = prev.jobQuantityMax;
      if (!next.jobQuantityMax || next.jobQuantityMax <= next.jobQuantityMin) {
        next.jobQuantityMax = next.jobQuantityMin + 1;
      }
      return next;
    }, { jobQuantityMax: 0 });
    editData = editData.map((t, i) => ({ ...t, id: i + 1 }));
    editData[editData.length - 1].jobQuantityMax = this.props.max;
    this.props.tableSetData(editData);
  }
  add(record) {
    let index = record.constructor === Number ? record : this.props.table.findIndex(t => t.id === record.id);
    let editData = [...this.props.table];
    if (index === this.props.table.length) {
      if (editData[editData.length - 1].jobQuantityMin >= this.props.max - 1) {  return false; };
      editData[editData.length - 1].jobQuantityMax = editData[editData.length - 1].jobQuantityMin + 1;
    }
    editData.splice(index, 0, {
      comment: '',
      unitPoundage: 0,
      jobQuantityMax: 0,
      jobQuantityMin: 0,
    });
    this.transData(editData);
  }
  remove(record) {
    let index = this.props.table.findIndex(t => t.id === record.id);
    let editData = [...this.props.table];
    editData.splice(index, 1);
    this.transData(editData);
  }
  save(form, record, max, index) {
    form.validateFields((error, row) => {
      if (!error) {
        let editData = [...this.props.table];
        editData[index] = {
          ...row,
          jobQuantityMax: row.jobQuantityMax > max ? max : row.jobQuantityMax,
          validate: true,
        }
        this.transData(editData);
        form.resetFields(); // 必须重置，不然initalValue无法更改编辑过后显示的值
      } else {
        let editData = [...this.props.table];
        this.props.tableSetData(editData.map(t => t.id === record.id ? { ...t, validate: false, ...row } : t));
      }
    });
  }
  render() {
    return (
      <div>
        <ThisTable {...this.props} add={this.add.bind(this)} save={this.save.bind(this)} remove={this.remove.bind(this)} />
        {
          !this.props.editAble ? '' :
            <Button
              style={{ margin: 6 }}
              onClick={this.add.bind(this, this.props.table.length)}
              disabled={this.props.table.length && this.props.table[this.props.table.length - 1].jobQuantityMin >= this.props.max - 1}
            >新增</Button>
        }
      </div>
    )
  }
};

const mapStateToProps = state => {
  const data = state.jobTypeManager;
  return {
    table: data.jobPoundageTable.data,
    loading: data.jobPoundageTable.loading,
    editAble: data.jobPoundageTable.editAble,
    max: data.jobPoundageTable.max,
    searchData: data.jobPoundageTable.searchData,
  }
};

const methods = JOBTYPE_MANAGER;

const mapDispatchToProps = {
  tableGet: methods.jobPoundageTableGet,
  tableSetData: methods.jobPoundageTableSetData,
  tableEnableEdit: methods.jobPoundageTableEnableEdit,
  tableDisableEdit: methods.jobPoundageTableDisableEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersJobTypeManagerJobPoundageTable);