import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider, message } from 'antd';
import { COLLECT_WITHDRAW_APPLY } from '@/actions';
import ThisTable from '@/components/withdraw/collectWithdrawApply/table';
import ThisBtns from '@/components/withdraw/collectWithdrawApply/btns';

class ContainersCollectWithdrawApplyTable extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    searchData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    batchApply: PropTypes.array.isRequired,
    tableGet: PropTypes.func.isRequired,
    tableApply: PropTypes.func.isRequired,
    tableSetBatchApply: PropTypes.func.isRequired,
  }
  apply(ids) {
    if(JSON.parse(ids).length > 100) {
      message.error('不能选中超过100个');
      return false;
    }
    this.props.tableApply({
      ids: ids,
    }).then(response => {
      message.success(response.result);
      const searchData = { ...this.props.searchData };
      if (JSON.parse(ids).length > 1) {
        searchData.currentPage = 1;
      } else {
        if (this.props.table.length === 1 && searchData.currentPage !== 1) { searchData.currentPage -= 1 };
      }
      this.props.tableGet(searchData);
    });
  }
  render() {
    return (
      <React.Fragment>
        {
          !this.props.table.length ? '' :
            <React.Fragment>
              <ThisBtns {...this.props} apply={this.apply} />
              <Divider style={{ margin: 0 }} />
            </React.Fragment>
        }
        <ThisTable {...this.props} apply={this.apply} />
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  const data = state.withdraw.collectWithdrawApply;
  return {
    table: data.table.data,
    count: data.table.count,
    searchData: data.table.searchData,
    loading: data.table.loading,
    batchApply: data.table.batchApply,
  }
}

const methods = COLLECT_WITHDRAW_APPLY;

const mapDispatchToProps = {
  tableGet: methods.tableGet,
  tableApply: methods.tableApply,
  tableSetBatchApply: methods.tableSetBatchApply,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersCollectWithdrawApplyTable)