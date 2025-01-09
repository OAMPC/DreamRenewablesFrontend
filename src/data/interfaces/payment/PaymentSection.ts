import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { PaymentOption } from '../util/PaymentOption';

export interface PaymentSection {
  title: string;
  subTitle: string;
  paymentOptions: Array<PaymentOption>;
  paymentOptionIcon: ImageStrapiContent;
}
