import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import {getPosts, ResponsePost} from '../../api/post';
import {ResponseError} from '../../types/common';

export function useGetInfinitePosts(
  queryOptions?: UseInfiniteQueryOptions<
    ResponsePost[],
    ResponseError,
    ResponsePost[][],
    ResponsePost[],
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: ({pageParam}) => getPosts(pageParam),
    queryKey: ['post', 'getPosts'],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPost ? allPages.length + 1 : undefined;
    },
    ...queryOptions,
  });
}
