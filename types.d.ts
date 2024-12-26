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

export interface useStateTypes {
  navbar: Array<NavbarTypes>;
  imagesCats: Array<ImagesCats>;
}

export interface Props {
  url: string | undefined;
  imgHeigth: number;
  imgWidth: number;
}
