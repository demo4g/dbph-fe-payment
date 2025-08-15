import { notifications } from '@mantine/notifications';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { EApiStatusCode } from '~/services/enum';
import { COLORS } from '~/theme';
import { IResponse } from '~/types';

export interface IOriginRequest extends AxiosRequestConfig {
  _retry: boolean;
}

const handleRequestSuccess = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
};

const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const handleResponseSuccess = (response: AxiosResponse) => {
  const errorCode = response?.data?.errorCode;

  //Hiển thị thông báo lỗi
  if (errorCode !== EApiStatusCode.SUCCESS) {
    notifications.show({
      title: response?.data?.message || 'Đã có lỗi xảy ra!',
      message: '',
      color: '#FF0000',
    });

    throw response.data;
  }

  if (response.config.method === 'get') return response.data?.data;

  return response.data;
};

const handleResponseError = async (error: AxiosError<IResponse<any>>) => {
  console.log('Request error: ', { error });

  //show message error
  if (error?.name === 'AxiosError') {
    notifications.show({
      title: 'Thất bại!',
      message: 'Đã có lỗi xảy ra!',
      color: COLORS.RED,
    });
  }

  return Promise.reject(error.response);
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(handleRequestSuccess as any, handleRequestError);
axiosInstance.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default axiosInstance;
