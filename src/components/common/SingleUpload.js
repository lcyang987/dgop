import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, message } from 'antd';


class SingleUpload extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    formData: PropTypes.object.isRequired,
    formPicUpload: PropTypes.func.isRequired,
    formSetData: PropTypes.func.isRequired,
    filePath: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired,
  }
  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('只能上传jpg或者png!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('必须小于2mb!');
    }
    return isJPG && isLt2M;
  }
  handleChange (info) {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      this.props.formSetData({
        [this.props.filePath]: info.file.response.result.filePath,
        [this.props.fileUrl]: info.file.response.result.fileUrl
      })
    }
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.props.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传图片</div>
      </div>
    );
    const imageUrl = this.props.formData[this.props.fileUrl]
    return (
      <Upload
        name="file"
        showUploadList={false}
        listType="picture-card"
        action="/common/uploadFile.json"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange.bind(this)}>
        {imageUrl ? <img src={`${imageUrl}/w/100/h/100`} alt="图片" /> : uploadButton}
      </Upload>
    )
  }
}


export default SingleUpload;