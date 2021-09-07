<template>
  <div class="form-box">
    <h2>Connect with us</h2>
    <form class="row g-3">
      <div class="form-floating col-md-6">
        <!-- <label for="inputName" class="form-label">Name</label> -->
        <input
          type="text"
          class="form-control"
          id="inputName"
          placeholder="Your name..."
        />
      </div>
      <div class="form-floating col-md-6">
        <!-- <label for="inputEmail4" class="form-label">Email</label> -->
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="name@example.com"
        />
      </div>
      <div class="form-floating col-md-6">
        <!-- <label for="inputNumber" class="form-label">Number</label> -->
        <input
          type="number"
          class="form-control"
          id="inputNumber"
          placeholder="555-555-555"
        />
      </div>
      <div class="form-floating col-md-6">
        <!-- <label for="inputSubject" class="form-label">Subject</label> -->
        <input
          type="text"
          class="form-control"
          id="inputSubject"
          placeholder="Subject"
        />
      </div>
      <div class="form-floating col-12">
        <!-- <label for="inputAddress" class="form-label">Address</label> -->
        <textarea
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Your message"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-box {
  width: 80%;
  /* width: 380px; */
  /* height: 550px; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
}
form input,
textarea {
  margin-top: 15px;
}
textarea {
  height: 200px;
}
button {
  margin-top: 15px;
}
</style>