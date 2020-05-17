<template>
    <div class="here-map">
        <div ref="map" :style="{ width: width, height: height }"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      map: {},
      platform: {},
      style: {},
      behaviour: {},
      ui: {},
      bubble: null,
      defaultLayers: {},
      provider: {},
      location: {},
      marker: null,
      geocodingService:{},
      // these are for search by address
      // search: "",
      // apiKey: "0C0MhowQ-YXjusAKajwdY8wm3Qmnki9dpA59HEIkas4"
    };
  },
  methods: {
    dropMarker(position){
      console.log(this.marker);
       if (this.marker) this.map.removeObject(this.marker);
        this.marker = new H.map.Marker({lat: position.lat, lng: position.lng});
     this.map.addObject(this.marker);
     console.log("added");
   
    }
  },
  props: {
    appCode: String,
    appID: String,
    lat: String,
    lng: String,
    width: String,
    height: String,
    value: {
      type: Object
    }
  },
  model: {
    event: "change",
    prop: "value"
  },
  created() {
    this.platform = new H.service.Platform({
      app_code: this.appCode,
      app_id: this.appID
    });
    this.geocodingService = this.platform.getGeocodingService();
  },

  mounted() {
    this.defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(this.$refs.map, this.defaultLayers.normal.map, {
      zoom: 7,
      center: { lng: this.lng, lat: this.lat }
    });
    this.provider = this.map.getBaseLayer().getProvider();
    this.style = this.provider.getStyle;
    this.behaviour = new H.mapevents.Behavior(
      new H.mapevents.MapEvents(this.map)
    );
    this.ui = new H.ui.UI.createDefault(this.map, this.defaultLayers);
  }
};
</script>
<style>
</style>