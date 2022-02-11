<template>
  <section-hero
    herotitle="Contact Us"
    herodesc="Contact Us for your queries "
    heroimg="inst-hero-contact.jpg"
  />
  <div class="columns">
    <div class="column">
      <div class="container">
        <h2 class="subtitle">Contact Us with the form below !</h2>
        <form class="contact-form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input
            type="text"
            v-model="user_name"
            name="user_name"
            placeholder="Please Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            v-model="user_phone"
            name="user_phone"
            placeholder="Please Enter Your Phone Number"
            required
          />
          <label>Email</label>
          <input
            type="email"
            v-model="user_email"
            name="user_email"
            placeholder="Please Enter Your Email"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Give your Message"
            v-model="message"
            cols="30"
            rows="5"
            required
          ></textarea>
          <input
            type="submit"
            @click="isShow = !isShow"
            class="text-white bg-primary"
            value="Send"
          />
        </form>

        <div class="thank">
          <div class="thank2">
            <div v-show="isShow" class="subtitle">
              Thank You For Submitting !!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="container-m contactus">
        <div class="">
          <div class="subtitle">
            Call or Email us with the information provided below
          </div>
          Email:
          <a href="mailto:Australianapplied@gmail.com"
            >Australianapplied@gmail.com</a
          >
          <br />
          Mobile: <a href="tel:+61430306061">+61 4 3030 6061</a>
        </div>
      </div>
    </div>
  </div>

  <!--  -->
</template>

<script>
import emailjs from "emailjs-com";
import SectionHero from "../components/SectionHero.vue";
export default {
  components: {
    SectionHero,
  },
  name: "ContactUs",
  data() {
    return {
      user_name: "",
      user_phone: "",
      user_email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_a4hnsel",
          "template_tquwdwj",
          e.target,
          "user_BuzDlQqLeQG5RMAH4XEyr",
          {
            user_name: this.user_name,
            user_phone: this.user_phone,
            user_email: this.user_email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.user_name = "";
      this.user_phone = "";
      this.user_email = "";
      this.message = "";
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.columns {
  margin: 5px 30px;
}
.column {
  margin-left: 12px !important;
}
.container {
  padding: 10vh 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
[type="number"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(13, 212, 226, 0.795);
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: rgba(13, 212, 226, 0.795);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s linear;
}

input[type="submit"]:hover {
  background-color: rgba(11, 191, 204, 0.897);
}
.contactus {
  display: flex;
  margin: 10px auto !important;

  justify-content: center;
  align-items: center;
  text-align: center;
}
.container-m {
  height: 100%;
}
@media screen and (max-width: 1024px) {
  .columns {
    margin: 0 !important;
  }
}
</style>
