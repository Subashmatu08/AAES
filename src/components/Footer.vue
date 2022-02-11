<template>
  <div class="footer-main">
    <div class="left">&copy;2021 Australian Applied Engineering Systems</div>
    <hr />
    <div class="right">
      <ul>
        <div class="top">
          <li>Phone: <a href="tel:+61430306061">+61 430306061</a></li>
          <li>
            Email:
            <a href="mailto: Australianapplied@gmail.com"
              >Australianapplied@gmail.com</a
            >
          </li>
        </div>
        <li class="address">
          Australian Applied Engineering Systems Pty ltd. <br />
          82 Copeland Road<br />
          Beecroft, NSW 2119 <br />
          Australia.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-main {
  min-height: 5vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background: rgb(231, 229, 229);
  box-shadow: 1px 1px 5px grey;
}
.footer-main > * {
  padding: 1rem 0;
  margin: auto 2rem;
}
.address {
  min-width: 20vw;
}
hr {
  display: none;
}
@media screen and (max-width: 769px) {
  .footer-main {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
  }
  hr {
    display: block;
    padding: 0 !important;
    background: rgb(139, 138, 138);
  }
}
</style>
