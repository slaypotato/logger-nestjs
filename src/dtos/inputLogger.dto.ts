export default class inputLoggerDto {
  timestamp?: string;
  level?: string;
  context: string;
  message: string;
  applicationName?: string;
  account_id?: string;
  merchant_id?: string;
  driver_id?: string;
  order_id?: string;
  request_id?: string;
  payload?: any;
  query?: any;
  params?: any;
  request?: any;
  response?: any;
  term?: string;
  page?: string;
  size?: string;
  latitude?: string;
  longitude?: string;
  cursor?: string;
}
