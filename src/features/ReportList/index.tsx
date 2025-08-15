import { Group, Input, SimpleGrid, Stack, Text } from '@mantine/core';
import { IoMdSearch } from 'react-icons/io';
import ReportItem from './ReportItem';

export interface IReportListProps {}

export default function ReportList(props: IReportListProps) {
  return (
    <Stack>
      <Group justify="space-between">
        <Text fz={24} fw={500}>
          Danh sách báo cáo
        </Text>

        <Input w={320} placeholder="Tìm kiếm báo cáo" leftSection={<IoMdSearch size={20} />} />
      </Group>
      <SimpleGrid cols={3}>
        {Array.from({ length: 5 }).map((_, index) => (
          <ReportItem key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
