export interface Image {
  id?: number
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: Painting_Images;
}

export interface Artist {
  image: string;
  name: string;
}

export interface Painting_Images {
  thumbnail: string;
  hero: Hero;
  gallery: string; 
}

export interface Hero {
  small: string;
  large: string;
}
