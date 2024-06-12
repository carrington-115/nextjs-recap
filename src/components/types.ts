interface userTestimonyType {
  id: number;
  name: string;
  country: string;
  date_of_birth: string;
  date_of_testimony: string;
  message: string;
  profession: string;
  marital_status: string;
  car_model: string;
  mileage: string;
  rating: number;
  recommend: boolean;
}

interface testimonialCardType extends userTestimonyType {}

export type { userTestimonyType, testimonialCardType };
