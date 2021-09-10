import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-08-03T00:00:00.000Z',
      '2021-08-04T00:00:00.000Z',
      '2021-08-05T00:00:00.000Z',
      '2021-08-06T00:00:00.000Z',
      '2021-08-07T00:00:00.000Z',
      '2021-08-08T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.1,
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#eb7900',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 20, 61, 18, 109],
  },
];

export default function Dashboard(): JSX.Element {
  return (
    <>
      <Flex direction="column" vh="100vh">
        <Header />

        <Flex width="100%" maxWidth={1080} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            <Box p={['4', '6']} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Week Paper Selling
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
            <Box p={['4', '6']} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Scranton Branch Taxes
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
