export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const map = document.getElementById(divId) as Element;

    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}
