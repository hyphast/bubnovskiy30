import React, {useState} from 'react';
import {Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import AvatarUploadStyles from './AvatarUpload.scss';
import {savePhoto} from "../../../redux/reducers/profileReducer/profileActions";

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Вы можете загружать только файлы в форматах JPG/PNG!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Изображение должно быть меньше 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const AvatarUpload = ({photoUrl, savePhoto}) => {
  const [loading, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    if (img) {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result, savePhoto));
      reader.readAsDataURL(img);
    }
  }

  const handleChange = ({fileList, ...info}) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    getBase64(info.file.originFileObj, (imageUrl, savePhoto) => {
      savePhoto(imageUrl);
      setLoading(false);
    })
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined/> : <PlusOutlined/>}
      <div style={{marginTop: 8}}>Загрузить</div>
    </div>
  );
  return (
    <ImgCrop rotate shape='round' modalTitle='Редактировать изображение' modalCancel='Отмена'>
      <Upload
        name="avatar"
        visible={true}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={photoUrl}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        accept="image/x-png,image/jpeg"
      >
        {photoUrl ? <img src={photoUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
      </Upload>
    </ImgCrop>
  );
}

export default AvatarUpload;