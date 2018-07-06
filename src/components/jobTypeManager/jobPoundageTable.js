import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Form, Input, InputNumber, Popconfirm, Divider } from "antd";

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = (form, record, save, max) => {
    if (this.props.inputType === "number") {
      return <InputNumber onBlur={() => save(form, record)} min={0} max={max} />;
    }
    return <Input onBlur={() => save(form, record)} />;
  };
  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      save,
      max,
      ...restProps
    } = this.props;
    const rules = this.props.rules || [];
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules,
                    initialValue: record[dataIndex],
                  })(this.getInput(form, record, save, max))}
                </FormItem>
              ) : (
                  restProps.children
                )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
};

class EditableTable extends React.Component {
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.props.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => {
          const index = this.props.table.findIndex(t => t.id === record.id);
          return {
            record,
            inputType: col.inputType,
            dataIndex: col.dataIndex,
            title: col.title,
            rules: col.rules,
            save: this.props.save,
            max: this.props.max - (this.props.table.length - index) + 1,
            editing: this.props.editAble && (index !== this.props.table.length - 1 || col.dataIndex !== 'jobQuantityMax'),
          };
        },
      };
    });
    return (
      <React.Fragment>
        {
          this.props.table && this.props.table.length ?
            <Table
              rowKey="id"
              columns={columns}
              components={components}
              dataSource={this.props.table}
              loading={this.props.loading}
              size="middle"
              pagination={false}
            /> :
            <div><Table columns={columns} size="middle" locale={{ emptyText: !this.props.table.length && !this.props.loading ? '数据为空' : '正在加载' }} /></div>
        }
      </React.Fragment>
    );
  }
}

class ComponentsJobTypeManagerJobPoundageTable extends Component {
  static propTypes = {
    editAble: PropTypes.bool.isRequired,
    add: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    let columns = [{
      title: '最少作业数量',
      dataIndex: 'jobQuantityMin',
      align: 'right',
    }, {
      title: '最多作业数量',
      dataIndex: 'jobQuantityMax',
      align: 'right',
      editable: true,
      inputType: 'number',
      rules: [{
        required: true,
        message: '必须填写最多作业数量!',
      }],
    }, {
      title: '每亩手续费',
      dataIndex: 'unitPoundage',
      align: 'right',
      editable: true,
      inputType: 'number',
      rules: [{
        required: true,
        message: '必须填写每亩手续费!',
      }, {
        pattern: /^[0-9]+[.]?[0-9]{0,2}[0]*$/,
        message: '最多两位小数'
      }],
      render: text => `￥${text}`,
    }, {
      title: '备注',
      dataIndex: 'comment',
      editable: true,
      rules: [{
        max: 20,
        message: '不能超过20个字!',
      }],
    }]
    if (this.props.editAble) {
      columns.push({
        title: '操作',
        render: (text, record) => {
          return (
            <span>
              <a onClick={() => this.props.add(record)}>新增</a>
              {
                this.props.table.length > 1 ?
                  <React.Fragment>
                    <Divider type="vertical" />
                    <Popconfirm
                      title="确认删除?"
                      onConfirm={() => this.props.remove(record)}
                    >
                      <a>删除</a>
                    </Popconfirm>
                  </React.Fragment> : ''
              }
            </span>
          );
        },
      })
    }
    return <EditableTable columns={columns} {...this.props} />
  }
};

export default ComponentsJobTypeManagerJobPoundageTable;