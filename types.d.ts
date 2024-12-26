export interface NavbarTypes {
  uid: number;
  name: string;
  to: string;
  active: boolean;
}
export interface ImagesCats {
  url: string | undefined;
  id?: number;
  heigth: number;
  width: number;
}
export interface Comments {
  id: number;
  picture: {
    large: string;
  };
  name: { first: string; last: string; title: string };
  email: string;
  gender: string;
}
export interface useStateTypes {
  navbar: Array<NavbarTypes>;
  imagesCats: Array<ImagesCats>;
  comments: Array<Comments>;
}

export interface Props {
  url: string | undefined;
  imgHeigth: number;
  imgWidth: number;
}
