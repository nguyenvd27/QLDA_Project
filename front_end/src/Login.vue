<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form>
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>
        </form>
        <button v-on:click="login" class="btn btn-lg btn-primary btn-block">Sign in</button>
      </div>
    </div>
  </div> -->
  <div class="login-box">
    <div class="login-logo">
      <b>Admin</b>VDN
    </div>
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <p v-if="filled==0" class="login-box-msg text-danger">Please fill email and password</p>
        <p v-if="error==1" class="login-box-msg text-danger">Email or password is incorrect</p>
        <form>
          <div class="input-group mb-3">
            <input type="email" name="email" class="form-control" required placeholder="Email" v-model="email">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" required placeholder="Password" v-model="password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-12">
              <button v-on:click="login" class="btn btn-primary btn-block">Sign In</button>
            </div>
          </div> -->
        </form>

        <div class="row">
          <div class="col-12">
            <button v-on:click="login" class="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
        <div class="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
            Sign in with Facebook
          </fb-signin-button>
        </div>

        <p class="mb-0">
          <router-link to="/register" class="text-center">Register a new membership</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../callApi/Api";
import EventBus from "./EventBus";
import VueCookie from "vue-cookie";
import facebookLogin from 'facebook-login-vuejs';
//  'vue-facebook-signin-button'

export default {
  data() {
    return {
      error: 0,
      filled: 1, 
      email: "",
      password: "",
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    };
  },
  components: {
    facebookLogin
  },
  methods: {
    login() {
      this.error = 0
      this.filled = 1
      if(this.email == null || this.email == "" || this.password == null || this.password == ""){
        this.filled = 0
      }
      else {
        axios
        .post("/users/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if(res.data.token){
            console.log(res.data.token);
            VueCookie.set("usertoken", res.data.token, "1h");
            this.emitMethod();
            this.$router.push({ name: "homepage", path: "/" });
          }
          else {
            this.password = ""
            this.error = 1
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },

    onSignInSuccess (response) {
      FB.api('/me', { fields: 'id,name,email, picture' }, data => {
        console.log(`data ${data}`)
        console.log(`Good to see you, ${data.name}.`)
        console.log(`Good to see you, ${data.email}.`)
        console.log(`Good to see you, ${data.id}.`)
        console.log(`Good to see you, ${data.picture.data.url}.`)
        axios.post('users/oauth/facebook', {
          id: data.id,
          name: data.name,
          email: data.email,
          picture: data.picture.data.url
        })
        .then( res => {
          console.log(res.data.token)
          VueCookie.set("usertoken", res.data.token, "1h");
          this.emitMethod();
          this.$router.push({ name: "homepage", path: "/" });
        })
        .catch(err => {
          console.log(err);
        });
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
};
</script>
<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
.fb-signin-button:hover {
  cursor: pointer;
}
</style>