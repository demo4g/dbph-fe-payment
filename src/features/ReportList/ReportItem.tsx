import { Box, Button, Group, Image, Stack, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { IoMdCloudDownload } from 'react-icons/io';
import { useTheme } from 'styled-components';
import pdf from '~/assets/images/pdf.png';
import { BorderBoxWrapper } from '~/components/GlobalStyled';
import { DATE_FORMAT } from '~/constants';
import { utils } from '~/utils';

export interface IReportItemProps {}

export default function ReportItem(props: IReportItemProps) {
  const theme = useTheme();
  const title = 'Karofi L68: NÓNG NHANH LẠNH SÂU, GẤP 2 HIỆU SUẤT';
  const size = 374394; // in bytes
  const downloads = 1000;
  const createdAt = dayjs().format(DATE_FORMAT);

  return (
    <BorderBoxWrapper p={12}>
      <Group wrap="nowrap" align="flex-start" gap={20}>
        <Image src={pdf} w={60} h={60} />

        <Stack gap={8} flex={1}>
          <Text fw={500} lineClamp={1} title={title}>
            {title}
          </Text>

          <Group align="flex-end" justify="space-between">
            <Box>
              <Text fz={14} c={theme?.colors.GRAY}>
                Kích thước: {utils.format.numberToBytes(size)}
              </Text>
              <Text fz={14} c={theme?.colors.GRAY}>
                Lượt tải: {utils.format.displayNumber(downloads)}
              </Text>
              <Text fz={14} c={theme?.colors.GRAY}>
                Ngày tạo: {createdAt}
              </Text>
            </Box>

            <Button size="sm" leftSection={<IoMdCloudDownload size={18} />}>
              Tải xuống
            </Button>
          </Group>
        </Stack>
      </Group>
    </BorderBoxWrapper>
  );
}
