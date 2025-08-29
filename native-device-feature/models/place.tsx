class Place {
  title;
  imageUrl;
  address;
  location;
  id;
  constructor({
    title,
    imageUrl,
    address,
    location,
  }: {
    title: string;
    imageUrl: string;
    address: string;
    location: { lat: number; lng: number };
  }) {
    (this.title = title),
      (this.imageUrl = imageUrl),
      (this.address = address),
      (this.location = location),
      (this.id = new Date().toString() + Math.random().toString());
  }
}

export type PlaceType = InstanceType<typeof Place>;

export default Place;
