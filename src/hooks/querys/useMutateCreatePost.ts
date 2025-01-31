import {useMutation} from '@tanstack/react-query';
import {createPost} from '../../api/post';
import {UseMutationCustomOptions} from '../../types/common';
import {queryClient} from '../../api/queryClient';
import {queryKeys} from '../../const/Keys';
import {Marker} from '../../types/domain';

function useMutateCreatePost(mutateOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: newPost => {
      // queryClient.invalidateQueries({
      //   queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      // });

      queryClient.setQueryData<Marker[]>(
        [queryKeys.MARKER, queryKeys.GET_MARKERS],
        (existingMakers: any) => {
          const newMarker = {
            id: newPost.id,
            latitude: newPost.latitude,
            longitude: newPost.longitude,
            color: newPost.color,
            score: newPost.score,
          };
          return existingMakers ? [...existingMakers, newMarker] : [newMarker];
        },
      );
    },

    ...mutateOptions,
  });
}

export default useMutateCreatePost;
