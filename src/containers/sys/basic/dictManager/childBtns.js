import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { DICT_MANAGER } from '@/actions';

class ContainersDictManagerChildBtns extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    searchData: PropTypes.object.isRequired,
    formSetData: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }
  onClick() {
    this.props.reset();
    this.props.formSetData({ codeType: this.props.searchData.codeType });
    this.props.show('新增字典');
  }
  render() {
    return (
      <div style={{ margin: '8px 0 10px 6px' }}>
        <Button onClick={this.onClick.bind(this)} loading={this.props.loading || this.props.table.some(t => t.loading)}>新增</Button>
        <Button onClick={this.props.hide} style={{ marginLeft: 6 }} type="danger">关闭</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const data = state.sys.basic.dictManager;
  return {
    table: data.childTable.data,
    loading: data.childTable.loading,
    searchData: data.childTable.searchData,    
  }
}

const methods = DICT_MANAGER;

const mapDispatchToProps = {
  formSetData: methods.childFormSetData,
  hide: methods.childTableHide,
  reset: methods.childFormReset,
  show: methods.childFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersDictManagerChildBtns);