<template>
  <div class="schedule-flight">
    <h3>Create A Trip</h3>
    <div class="card">
      <form action="" @submit.prevent="handleSubmit">
        <div class="form-content">
          <div class="name">
            <label for="name">Name*</label>
            <InputText id="name" v-model="name" placeholder="Your full name" />
          </div>
          <div class="email">
            <label for="email">Email*</label>
            <InputText
              id="email"
              v-model="email"
              placeholder="email@flight.com"
            />
          </div>
          <div class="departure">
            <label for="departure">From*</label>
            <Dropdown
              inputId="state"
              v-model="selectedDepartureState"
              :options="states"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="arrival">
            <label for="arrival">To*</label>
            <Dropdown
              inputId="state"
              v-model="selectedArrivalState"
              :options="states"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="departDate">
            <label for="icon">Depart*</label>
            <Calendar id="icon" v-model="departDate" :showIcon="true" />
          </div>
          <div class="returnDate">
            <label for="icon">Return</label>
            <Calendar id="icon" v-model="returnDate" :showIcon="true" />
          </div>
          <div class="travelClass">
            <label for="travelClass">Travel class</label>
            <Dropdown
              inputId="travelClass"
              v-model="selectedTravelClass"
              :options="classes"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <!-- <div class="passengers"> -->
          <div class="adults">
            <label for="adults">Adults <span>16+</span> </label>
            <Dropdown
              inputId="numberAdults"
              v-model="selectedAdults"
              :options="passengers"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="youngAdults">
            <label for="youngAdults">Young adults <span>12-15</span> </label>
            <Dropdown
              inputId="numberYoungAdults"
              v-model="selectedYoungAdults"
              :options="passengers"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="children">
            <label for="children">Children <span>2-11</span> </label>
            <Dropdown
              inputId="numberChildren"
              v-model="selectedChildren"
              :options="passengers"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="infants">
            <label for="infants">Infants <span>under 2</span> </label>
            <Dropdown
              inputId="numberInfants"
              v-model="selectedInfants"
              :options="passengers"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
        </div>

        <!-- <div class="book"> -->
        <!-- <a href="#">Confirm Booking<i class="fa fa-check-circle"></i></a> -->
        <!-- </div> -->
        <!-- </div> -->
        <button
          v-if="
            name === '' ||
            email === '' ||
            selectedDepartureState === '' ||
            selectedArrivalState === '' ||
            departDate === '' ||
            selectedTravelClass === ''
          "
          class="submit2"
          type="submit"
          disabled
        >
          Submit <i class="pi pi-check-circle"></i>
        </button>
        <button v-else class="submit" type="submit">
          Submit <i class="pi pi-check-circle"></i>
        </button>
      </form>
    </div>
  </div>

  <Dialog
    v-model:visible="showMessage"
    :breakpoints="{ '960px': '80vw' }"
    :style="{ width: '30vw' }"
    position="top"
  >
    <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
      <i
        class="pi pi-check-circle"
        :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
      ></i>
      <h5>Booking Successful!</h5>
      <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
        Your flight has been booked under the name <b>{{ name }}</b> ; it'll be
        valid next 30 days without any hitches. Please check
        <b>{{ email }}</b> for further instructions.
      </p>
    </div>
    <template #footer>
      <div class="p-d-flex p-jc-center">
        <Button label="OK" @click="toggleDialog" class="p-button-text" />
      </div>
    </template>
  </Dialog>
</template>

<script>
// import { reactive, ref, onMounted } from "vue";
// import { email, required } from "@vuelidate/validators";
// import useVuelidate from "@vuelidate/core";

export default {
  // components: { Destination },
  // setup: () => ({ v$: useVuelidate() }),
  created() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  },
  data() {
    return {
      name: "",
      email: "",
      date: null,
      // country: null,
      // accept: null,
      submitted: false,
      showMessage: false,
      departDate: null,
      returnDate: null,
      minDate: null,
      maxDate: null,
      invalidDates: null,
      selectedDepartureState: null,
      states: [
        { name: "Lagos", code: "Lagos" },
        { name: "Abuja", value: "Abuja" },
        { name: "Port Harcourt", code: "Port Harcourt" },
        { name: "Jos", code: "Jos" },
        { name: "Kaduna", code: "Kaduna" },
      ],
      selectedArrivalState: null,
      selectedTravelClass: null,
      classes: [
        { name: "Economy", code: "Economy" },
        { name: "Premium Economy", value: "Premium Economy" },
        { name: "Business/Club", code: "Business/Club" },
        { name: "First", code: "First" },
      ],
      selectedAdults: null,
      selectedYoungAdults: null,
      selectedChildren: null,
      selectedInfants: null,
      passengers: [
        { name: 0, code: 0 },
        { name: 1, code: 1 },
        { name: 2, value: 2 },
        { name: 3, code: 3 },
        { name: 4, code: 4 },
        { name: 5, code: 5 },
        { name: 6, code: 6 },
        { name: 7, code: 7 },
        { name: 8, code: 8 },
        { name: 9, code: 9 },
      ],
    };
  },
  // validations() {
  //       return {
  //           name: {
  //               required
  //           },
  //           email: {
  //               required,
  //               email
  //           },
  //           // password: {
  //           //     required
  //           // },
  //           // accept: {
  //           //     required
  //           // }
  //       }
  //   },
  methods: {
    addToBucket() {
      this.$store.commit("addToBucket", {
        place: this.place,
        quantity: 1,
      });
    },

    handleSubmit() {
      this.submitted = true;

      // if (!isFormValid) {
      //     return;
      // }

      this.toggleDialog();
      // this.name = " ",
      // this.email = " ",
      // this.selectedDepartureState = null,
      // this.selectedArrivalState = null,
      // this.departDate = null,
      // this.returnDate = null,
      // this.selectedTravelClass = null,
      // this.selectedAdults = null,
      // this.selectedYoungAdults = null,
      // this.selectedChildren = null,
      // this.selectedInfants = null
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      // if(!this.showMessage) {
      //     this.resetForm();
      // }
    },
    // handleSubmit(isFormValid) {
    //     this.submitted = true;

    //     if (!isFormValid) {
    //         return;
    //     }

    //     this.toggleDialog();
    // },
    // toggleDialog() {
    //     this.showMessage = !this.showMessage;

    //     if(!this.showMessage) {
    //         this.resetForm();
    //     }
    // },
    // resetForm() {
    //     this.name = '';
    //     this.email = '';
    //     this.submitted = false;
    // }
  },
  computed: {
    // ...mapGetters["getPlaces"],
    getPlaces() {
      return this.$store.getters.getPlaces;
    },
  },
};
</script>

<style scoped>
.hero1 {
  width: 100%;
}
.hero1 h2 {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: 700;
  width: 100%;
}
.hero1 h2 {
  margin: 80px 0 30px 0;
}

.hero1 h5 {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;
}

.departure,
.arrival,
.date,
.adult,
.children {
  margin: 10px;
}

.hero2 .cont {
  width: 85%;
  height: 350px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.hero2 .cont img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.hero2 .cont p {
  color: #fff;
  font-size: 45px;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  margin-top: -180px;
}

.more {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
}
.more p {
  padding: 5px;
  border-radius: 5px;
  background: orange;
  color: #fff;
  font-weight: 600;
}
.hero2 .fa {
  color: #fff;
  padding: 5px;
}
.schedule-flight {
  width: 85%;
  margin: auto;
}

.schedule-flight h3 {
  margin: 50px 0 30px 0;
}

.card {
  /* width: 800px; */
  margin: auto;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}

/* form {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
} */

form .form-content{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.name,
.email,
.departure,
.arrival,
.departDate,
.returnDate,
.travelClass,
.adults,
.youngAdults,
.children
/* .infants */ {
  display: grid;
  width: 45%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px auto;
  margin-right: 10px auto;
  text-align: left;
}
label {
  text-align: left;
}
.infants {
  display: grid;
  width: 45%;
  margin-top: 20px;
  margin-bottom: 20px;
  /* margin-left: -210px; */
  text-align: left;
}
.book {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: green;
  width: 150px;
  border-radius: 5px;
  margin: 20px auto;
  /* margin-left: auto;
  margin-right: auto; */
}
.submit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: green;
  color: #fff;
  width: 150px;
  border-radius: 5px;
  margin: 20px auto;
  text-decoration: none;
  padding: 10px;
  border: none;
  outline: none;
}
.submit2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: gray;
  color: #fff;
  width: 150px;
  border-radius: 5px;
  margin: 20px auto;
  text-decoration: none;
  padding: 10px;
  border: none;
  outline: none;
}
.submit i,
.submit2 i {
  margin: 4px 10px 0 5px;
  font-size: 14px;
}
.book a,
.book a:hover {
  text-decoration: none;
  color: #fff;
  padding: 10px;
}

.layout-content .content-section.implementation > h3 {
  font-weight: 600;
}

textarea {
  resize: none;
}

@media screen and (max-width: 489px) {
  .p-formgroup-inline .p-field {
    margin-bottom: 1em !important;
  }
  .schedule-flight {
    width: 330px;
    margin: auto;
  }
  .card {
    width: 330px;
    margin-left: 2px auto;
    margin-right: 2px auto;
  }
  .name,
  .email,
  .departure,
  .arrival,
  .departDate,
  .returnDate,
  .travelClass,
  .adults,
  .youngAdults,
  .children,
  .infants {
    display: grid;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  label {
    text-align: left;
  }

  /* .card {
    width: 500px;
    margin: auto;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
  }
  .schedule-flight {
    width: 50%;
    margin: auto;
  } */

  .submit {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: green;
    color: #fff;
    /* height: 30px; */
    width: 150px;
    border-radius: 5px;
    /* margin-top: 100px;
    margin-left: -100px; */
    margin: 20px auto;
    text-decoration: none;
    padding: 10px;
    border: none;
  }
  .submit2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: gray;
    color: #fff;
    width: 150px;
    border-radius: 5px;
    /* margin: 20px auto; */
    text-decoration: none;
    padding: 10px;
    border: none;
  }
  .submit i,
  .submit2 i {
    margin: 4px 10px 0 5px;
    font-size: 14px;
  }
}

@media screen and (width: 768px) {
  .card {
    /* width: 330px; */
    margin-left: 50px auto;
    margin-right: 50px auto;
  }
  .infants {
    display: grid;
    width: 45%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 15px;
  }
}
</style>