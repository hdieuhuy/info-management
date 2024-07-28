import { EGender } from "@/types/enums";
import { Document, Schema, model, models } from "mongoose";

interface IFamilyInfo {
  fullname: string;
  isDead: string;
  birthday: Date;
  job: string;
}

export interface IInfo {
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
  date_join_group: Date;
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
    your_step: number;
  };

  more_info: {
    fullname: string;
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

export interface IInfoDocument extends Document {
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
  date_join_group: Date;
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
    your_step: number;
  };

  more_info: {
    fullname: string;
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
const infoSchema = new Schema<IInfoDocument>({
  fullname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  identification: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: Object.values(EGender),
    required: true,
  },
  birth_place: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  permanent_address: {
    type: String,
    required: true,
  },
  residence_address: {
    type: String,
    required: true,
  },
  family_work_main: {
    type: String,
    required: true,
  },
  your_work_main: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
  },
  qualification_main: {
    type: String,
  },
  language: {
    type: String,
  },
  date_join_group: {
    type: Date,
  },
  date_join_party: {
    type: Date,
  },
  date_join_party_official: {
    type: Date,
  },
  bonus: {
    type: String,
    required: true,
  },
  discipline: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  wage: {
    type: String,
  },
  wage_step: {
    type: String,
  },
  workplace: {
    type: String,
  },
  father_info: {
    fullname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    isDead: {
      type: String,
      default: "LIVE",
    },
  },

  mother_info: {
    fullname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    isDead: {
      type: String,
      default: "LIVE",
    },
  },

  couple_info: {
    fullname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    son_count: {
      type: Number,
    },
  },

  family_info: {
    son_count: {
      type: Number,
    },
    boy_count: {
      type: Number,
    },
    girl_count: {
      type: Number,
    },
    your_step: {
      type: Number,
    },
  },

  more_info: [
    {
      lineage: {
        type: String,
        required: true,
      },
      fullname: {
        type: String,
        required: true,
      },
      year_of_birth: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],

  created_at: {
    type: Date,
    default: Date.now(),
  },
  create_by: {
    type: String,
  },
  update_at: {
    type: Date,
  },
  update_by: { type: String },

  _destroy: {
    type: Boolean,
    default: false,
  },
});
const Info = models.Info || model<IInfoDocument>("Info", infoSchema);
export default Info;
