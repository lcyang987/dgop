import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Spin } from 'antd';
import PropTypes from 'prop-types';
import CommonFormModal from '@/components/common/FormModal';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class ComponentsJobTypeManagerMachineForm extends Component {
  static propTypes = {
    table: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    machineList: PropTypes.array.isRequired,
    machineListLoading: PropTypes.bool.isRequired,
    machineComponentList: PropTypes.array.isRequired,
    machineComponentListLoading: PropTypes.bool.isRequired,
    machineComponentListGet: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  }
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const formSingleItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <CommonFormModal {...this.props} width={500}>
        <Form style={{ margin: '8px 16px' }}>
          <Row>
            <Col span={12}>
              <Spin spinning={this.props.machineListLoading}>
                <FormItem label={'农机'} {...formItemLayout}>
                  {getFieldDecorator('machineId', {
                    rules: [{
                      required: true,
                      message: '请选择农机!',
                    }],
                  })(
                    <Select onSelect={this.props.onSelect.bind(this)}>
                      {
                        this.props.machineList.map(t => <Option key={t.id} value={t.id}>{t.name}</Option>)
                      }
                    </Select>
                  )}
                </FormItem>
              </Spin>
            </Col>
            {
              !getFieldValue('machineId') ? '' :
                <Col span={12}>
                  <Spin spinning={this.props.machineListLoading}>
                    <FormItem label={'组件'} {...formItemLayout}>
                      {getFieldDecorator('machineComponentId')(
                        <Select>
                          {
                            this.props.machineComponentList.map(t => <Option key={t.id} value={t.id}>{t.name}</Option>)
                          }
                        </Select>
                      )}
                    </FormItem>
                  </Spin>
                </Col>
            }
            <Col span={24}>
              <FormItem label={'备注'} {...formSingleItemLayout}>
                {getFieldDecorator('comment', {
                  rules: [{
                    max: 100,
                    message: '不能超过100个字'
                  }],
                })(
                  <TextArea placeholder="不能超过100个字" autosize={{ minRows: 4 }} style={{ resize: 'none' }} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </CommonFormModal>
    )
  }
};

export default Form.create({
  mapPropsToFields(props) {
    const values = {};
    for (var v in props.formData) {
      values[v] = Form.createFormField({
        value: props.formData[v],
      })
    }
    return values;
  }
})(ComponentsJobTypeManagerMachineForm);
