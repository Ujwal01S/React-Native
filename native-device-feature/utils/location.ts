const GOOGLE_API_KEY = "AIzaSyD_KkSedSqjB2WibjOrcN5b_GfvGHwWxrw";

export function getMapPreview({ lat, lng }: { lat: number; lng: number }) {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}, ${lng}&zoom=13&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
&key=${GOOGLE_API_KEY}`;

  // console.log(imagePreview);

  return imagePreview;
}

// &markers=color:green%7Clabel:G%7C40.711614,-74.012318 &signature=YOUR_SIGNATURE
// &markers=color:red%7Clabel:C%7C40.718217,-73.998284
