import {useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {getFormDataImages} from '../utils/getFormDataImages';
import {useMutateImages} from './querys/useMutateImages';
import {ImageUri} from '../types/domain';

interface UseImagePickerProps {
  init: ImageUri[];
}

const useImagePicker = ({init = []}: UseImagePickerProps) => {
  const uploadImages = useMutateImages();
  const [imageUris, setImageUris] = useState(init);

  const addImageUris = (uris: string[]) => {
    setImageUris(prev => [...prev, ...uris.map(uri => ({uri}))]);
  };

  const handleChange = () => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
      multiple: true,
      includeBase64: true,
      maxFiles: 5,
      cropperChooseText: '완료',
      cropperCancelText: '취소',
    })
      .then(v => {
        const formData = getFormDataImages(v);
        uploadImages.mutate(formData, {
          onSuccess: data => addImageUris(data),
        });
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          throw error;
        }
      });
  };
  return {imageUris, handleChange};
};

export default useImagePicker;
