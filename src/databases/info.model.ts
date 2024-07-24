import { EGender } from "@/types/enums";
import { Document, Schema, model, models } from "mongoose";

interface IFamilyInfo {
  fullname: string;
  isDead: boolean;
  birthday: Date;
  job: string;
}

export interface IInfo extends Document {
  _id: string;
  fullname: string;
  birthday: Date;
  identification: string;
  gender: EGender;
  birth_place: string;
  country: string;
  nation: string;
  nationality: string;
  religion: string;
  permanent_address: string;
  residence_address: string;
  family_work_main: string;
  your_work_main: string;
  level: number;
  qualification: string;
  qualification_main: string;
  language: string;
  job: string;
  wage: string;
  date_join_party: Date;
  date_join_party_official: Date;
  wage_step: string;
  workplace: string;
  bonus: string; // maybe constants
  discipline: string; // maybe constants

  father_info: IFamilyInfo;
  mother_info: IFamilyInfo;
  couple_info: IFamilyInfo & {
    son_count: number;
  };

  family_info: {
    son_count: number;
    boy_count: number;
    girl_count: number;
  };

  more_info: {
    name: string;
    lineage: string;
    year_of_birth: number;
    description: string;
  }[];

  created_at: Date;
  create_by: string;
  update_at: Date;
  update_by: string;

  _destroy: boolean;
}
const infoSchema = new Schema<IInfo>({
  _destroy: {
    type: Boolean,
    default: false,
  },
});
const Info = models.Info || model<IInfo>("Info", infoSchema);
export default Info;
