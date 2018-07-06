import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Avatar } from 'antd';
import PagesExpandedRowTable from '@/components/common/PagesExpandedRowTable';
import SingleTable from '@/components/common/SingleTable';

class ComponentsAuditMachineTable extends Component {
  static propTypes = {
    dictData: PropTypes.object.isRequired,
    dictLoading: PropTypes.bool.isRequired,
    get: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }
  render() {
    let expandedRowRender = record => {
      const columns = [{
        title: '审核结果',
        dataIndex: 'auditResult',
        render: text => this.props.dictData.auditResult.find(t => t.value === text).name,
      }, {
        title: '审核人',
        dataIndex: 'auditUserName',
      }, {
        title: '审核时间',
        dataIndex: 'auditTime',
      }, {
        title: '备注',
        dataIndex: 'comment',
      }];
      return <SingleTable columns={columns} table={record.auditHistoryList || []} loading={this.props.dictLoading} defaultExpandAllRows={false} />;
    };
    let columns = [{
      title: '农机图片',
      dataIndex: 'machinePictureList',
      render: (text, record) => (
        <span>
          <a onClick={this.props.show.bind(this, text, record, '农机')}>
            {
              text.map((t, i) => <Avatar key={i} src={t} />)
            }
          </a>
        </span>
      )
    }, {
      title: '农机名称',
      dataIndex: 'machineName',
    }, {
      title: '农机品牌',
      dataIndex: 'machineBrandName',
    }, {
      title: '农机型号',
      dataIndex: 'machineModelName',
    }, {
      title: '身份证',
      render: (text, record) => {
        const pic = record.certificateList.find(t => t.certificateType === 'IDENTITY_CARD');
        return (
          pic ?
            <span>
              <a onClick={this.props.show.bind(this, pic.certificatePictureList, record, '身份证')}>
                {
                  pic.certificatePictureList.map((t, i) => <Avatar key={i} src={t} />)
                }
              </a>
            </span> :
            '暂无'
        )
      },
    }, {
      title: '驾驶证',
      render: (text, record) => {
        const pic = record.certificateList.find(t => t.certificateType === 'DRIVING_LICENSE');
        return (
          pic ?
            <span>
              <a onClick={this.props.show.bind(this, pic.certificatePictureList, record, '驾驶证')}>
                {
                  pic.certificatePictureList.map((t, i) => <Avatar key={i} src={t} />)
                }
              </a>
            </span> :
            '暂无'
        )
      },
    }, {
      title: '行驶证',
      render: (text, record) => {
        const pic = record.certificateList.find(t => t.certificateType === 'DRIVING_PERMIT');
        return (
          pic ?
            <span>
              <a onClick={this.props.show.bind(this, pic.certificatePictureList, record, '行驶证')}>
                {
                  pic.certificatePictureList.map((t, i) => <Avatar key={i} src={t} />)
                }
              </a>
            </span> :
            '暂无'
        )
      },
    }, {
      title: '会员名称',
      dataIndex: 'memberName',
    }, {
      title: '手机号码',
      dataIndex: 'memberPhone',
    }, {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={this.props.success.bind(this, record)}>审核通过</a>
          <Divider type="vertical" />
          <a onClick={this.props.get.bind(this, record)}>审核不通过</a>
        </span>
      ),
    }];
    return <PagesExpandedRowTable {...this.props} columns={columns} expandedRowRender={expandedRowRender} className='components-table-demo-nested' />
  }
}

export default ComponentsAuditMachineTable;