import brazil from '@/assets/images/brazil.jpg'
import cyprus from '@/assets/images/cyprus.jpg'
import dubai from '@/assets/images/dubai.jpg'
import egypt from '@/assets/images/egypt.jpg'
import london from '@/assets/images/london.jpg'
import maldives from '@/assets/images/maldives.jpg'
import miami from '@/assets/images/miami.jpg'
import singapore from '@/assets/images/singapore.jpg'
import sydney from '@/assets/images/sydney.jpg'
import zanzibar from '@/assets/images/zanzibar.jpg'


// function updateLocalStorage(wishList) {
//   localStorage.setItem('wishList', JSON.stringify(wishList))
// }
function updateLocalStorage(bucket) {
  localStorage.setItem('bucket', JSON.stringify(bucket))
}

const state = {
  places: [
    {
      id: 1,
      city: "Miami",
      continent: "North America",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Dollars ($USD)",
      image: miami
    },
    {
      id: 2,
      city: "Roi de Janeiro",
      continent: "South America",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Brazilian Real (R$)",
      image: brazil
    },
    {
      id: 3,
      city: "London",
      continent: "Europe",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Pounds Sterling (£)",
      image: london
    },
    {
      id: 4,
      city: "Zanzibar",
      continent: "Africa",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Tanzanian shillings (TSh)",
      image: zanzibar
    },
    {
      id: 5,
      city: "Singapore",
      continent: "Asia",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Singapore dollar (S$)",
      image: singapore
    },
    {
      id: 6,
      city: "Sydney",
      continent: "Australia",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Australian dollar (AU$)",
      image: sydney
    },
    {
      id: 7,
      city: "Maldives",
      continent: "Asia",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Maldivian rufiyaa (MRF)",
      image: maldives
    },
    {
      id: 8,
      city: "Cyprus",
      continent: "Europe",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Euro (€)",
      image: cyprus
    },
    {
      id: 9,
      city: "Cairo",
      continent: "Africa",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Egyptian pound (E£)",
      image: egypt
    },
    {
      id: 10,
      city: "Dubai",
      continent: "MidEast",
      ratings: 4,
      fact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      currency: "Dirham ( د.إ )",
      image: dubai
    }
  ],
  singlePlace: null,
  bucket: []
}

const mutations = {
  setSinglePlace: (state, id) => {
    const singlePlace = state.places.find(elem => elem.id === +id);
    console.log({ singlePlace, id: Number(id) })
    if (!singlePlace) {
      return state.singlePlace = null;
    } else {
      return state.singlePlace = singlePlace;
    }
  },

  addToBucket: (state, { place, spaces }) => {
    let placeInBucket = state.bucket.find(elem => {
      return elem.place.id === Number(place.id);
    });

    if (placeInBucket) {
      placeInBucket.spaces += spaces;
      return
    } else {
      state.bucket.push({ place, spaces })
    }
    updateLocalStorage(state.bucket)

  },

  removeFromBucket: (state, place) => {
    let item = state.bucket.find(elem => elem.place.id === +place.id)

    if (item) {
      if (item.spaces > 1) {
        item.spaces--
      } else {
        state.bucket = state.bucket.filter(elem => elem.place.id !== place.id)
      }
    }
    updateLocalStorage(state.bucket)
  },

  clearBucketItems: (state) => {
    state.bucket = [];
    updateLocalStorage(state.bucket)
  },

  updateBucketFromLocalStorage(state){
    const bucket = localStorage.getItem('bucket');
    if(bucket) {
      state.bucket = JSON.parse(bucket)
    }
  }


}

const actions = {

}

const getters = {
  getPlaces: state => state.places,
  singleTouristSite: (state) => {
    return state.singlePlace
  },
  bucketItems: state => state.bucket

}

export default {
  state,
  getters,
  actions,
  mutations
};