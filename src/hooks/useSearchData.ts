import { useDebouncedState } from '@mantine/hooks';
import { useMemo } from 'react';
import { utils } from '~/utils';

interface IUseSearchData<T extends object> {
  list: T[];
  keys: Array<keyof T>;
}

const useSearchData = <T extends object>({ list, keys }: IUseSearchData<T>) => {
  const [searchValue, setSearchValue] = useDebouncedState('', 500);

  const remainingData = useMemo(() => {
    if (!searchValue) return list;

    return list.filter((e) => {
      return keys.some((key) =>
        utils.format
          .formatVietnameseToEn(e[key] as string)
          .includes(utils.format.formatVietnameseToEn(searchValue))
      );
    });
  }, [keys, list, searchValue]);

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return { remainingData, handleSearch };
};

export default useSearchData;
