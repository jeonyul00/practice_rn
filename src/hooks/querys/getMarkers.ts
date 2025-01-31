import {useQuery} from '@tanstack/react-query';
import {UseQueryCutomOptions} from '../../types/common';
import {getMarkers} from '../../api/maker';
import {queryKeys} from '../../const/Keys';
import {Marker} from '../../types/domain';

export function useGetMarkers(queryOptions?: UseQueryCutomOptions<Marker[]>) {
  return useQuery({
    queryFn: getMarkers,
    queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
    ...queryOptions,
  });
}
