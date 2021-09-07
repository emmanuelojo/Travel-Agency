import ba1 from '@/assets/images/ba1.jpg'
// import ba2 from '@/assets/images/ba2.jpg'
// import ba3 from '@/assets/images/ba3.jpg'
// import ba4 from '@/assets/images/ba4.jpg'
// import photo2 from '@/assets/images/photo2.jpeg'
import pencil from '@/assets/images/pencil.jpeg'

// import photo from '@/assets/images/photo.jpeg'
// import sunset from '@/assets/images/sunset.jpg'


// function updateLocalStorage(cart) {
//   localStorage.setItem('cart', JSON.stringify(cart))
// }

const state = {
  flights: [
    {
      id: 1,
      title: "pencil rice",
      description: "Tasty Nigerian local rice",
      image: pencil,
      price: 500
    },
    {
      id: 2,
      title: "Ewa Agoyin",
      description: "Tasty Nigerian local ba1",
      image: ba1,
      price: 200
    },
  ],
  bookedFlights: []
}

const mutations = {
  bookFlight: (state, { flight, quantity }) => {
    // let bookedFlight = state.bookedFlights.find()
    state.bookedFlights.push( {
      flight, quantity
    })
  }
}

const actions = {

}

const getters = {
  getFlights: state => state.flights
}

export default {
  state,
  getters,
  actions,
  mutations
};