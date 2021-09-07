<template>
  <div>
    <h3>Our Services</h3>
    <div class="services-holder">
      <div class="card">
        <i class="fa fa-university"></i>
        <h5>Affordable Hotels</h5>
        <p>
          Lorem, ipsum dolor sit amet repellendus omnis labore tempora similique
          non necessitatibus autem assumenda, cupiditate adipisci illo
          obcaecati, maxime consequatur excepturi. Odio, suscipit.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-plane"></i>
        <h5>Fastest Travel</h5>
        <p>
          Lorem, ipsum dolor sit amet repellendus omnis labore tempora similique
          non necessitatibus autem assumenda, cupiditate adipisci illo
          obcaecati, maxime consequatur excepturi. Odio, suscipit.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-cutlery"></i>
        <h5>Food And Drinks</h5>
        <p>
          Lorem, ipsum dolor sit amet repellendus omnis labore tempora similique
          non necessitatibus autem assumenda, cupiditate adipisci illo
          obcaecati, maxime consequatur excepturi. Odio, suscipit.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-globe"></i>
        <h5>Around The World</h5>
        <p>
          Lorem, ipsum dolor sit amet repellendus omnis labore tempora similique
          non necessitatibus autem assumenda, cupiditate adipisci illo
          obcaecati, maxime consequatur excepturi. Odio, suscipit.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-camera"></i>
        <h5>New Memories</h5>
        <p>
          Lorem, ipsum dolor sit amet repellendus omnis labore tempora similique
          non necessitatibus autem assumenda, cupiditate adipisci illo
          obcaecati, maxime consequatur excepturi. Odio, suscipit.
        </p>
      </div>
      <div class="card">
        <i class="fa fa-bullhorn"></i>
        <h5>Safety Guide</h5>
        <p>
          Lorem, ipsum dolor sit amet repellendus omnis labore tempora similique
          non necessitatibus autem assumenda, cupiditate adipisci illo
          obcaecati, maxime consequatur excepturi. Odio, suscipit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.services-holder {
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
}
h3{
  margin-top: 80px;
  margin-bottom: 30px;
}
.card {
  position: relative;
  width: 380px;
  /* margin-left: 5px; */
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.card i {
  position: absolute;
  font-size: 30px;
  margin: 20px;
  padding: 10px;
  border-radius: 50%;
  background: #3c99d2;
  color: #fff;
}
.card h5{
  font-weight: bold;
  margin-top: 100px;
  text-align: left;
  margin-left: 20px;
}
.card p{
  text-align: left;
  margin-left: 20px;
}
</style>