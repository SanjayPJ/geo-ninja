<template>
    <div id="map"></div>
</template>

<script>
import firebase, { database } from 'firebase/app'
import db from '@/firebase/init'

require('firebase/auth')

export default {
  data(){
    return {
      lat: 53,
      lng: -2
    }
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: this.lat, lng: this.lng},
          zoom: 6,
          maxZoom: 15,
          minZoom: 3,
          streetViewControl: false
        });

        db.collection('users').get().then(users => {
          users.docs.forEach(doc => {
            let data = doc.data();
            if(data.geolocation){
               let marker = new google.maps.Marker({
                position: {
                  lat: data.geolocation.lat,
                  lng: data.geolocation.lng
                },
                map
              });
              marker.addListener('click', () => {
                console.log(doc.id);
                this.$router.push({ name: 'profile' , params: { id: doc.id }})
              })
            }
          });
        })
    }
  },
  mounted(){
    let user = firebase.auth().currentUser;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        this.renderMap();

        if(user){
          db.collection('users').where('user_id', '==', user.uid).get().then((snapshot) => {
          snapshot.forEach(doc => {
            db.collection('users').doc(doc.id).update({
              geolocation: {
                lat: this.lat,
                lng: this.lng
              }
            })
          });
        })
        }
      }, err => { this.renderMap(); }, {maximumAge: 60000})
    }
    this.renderMap();
  }
};
</script>

<style scoped>
#map{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
}
</style>
