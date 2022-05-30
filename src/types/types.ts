export type UserProfileType = {
  aboutMe: string;
  contacts: UserProfileContactsType;
  followed: boolean;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: UserProfilePhotosType;
  status: string;
  userId: number;
};

export type UserProfileContactsType = {
  facebook: string;
  github: string;
  instagram: string;
  mainLink: string;
  twitter: string;
  vk: string;
  website: string;
  youtube: string;
};

export type UserProfilePhotosType = {
  large: string;
  small: string;
};

export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: UserProfilePhotosType
  status: string
  uniqueUrlName: null | string
}

export type MessageType = {
  date: string
  id: number
  text: string
}