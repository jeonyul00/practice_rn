import {useMutation} from '@tanstack/react-query';
import {UseMutationCustomOptions} from '../../types/common';
import {uploadImages} from '../../api/images';

export function useMutateImages(mutateOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: uploadImages,
    ...mutateOptions,
  });
}
