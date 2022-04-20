<template>
    <div class="row">
        
          <div class="rocket">
      <img src="@/assets/file-invoice-dollar-solid.png" class="firsti" />
    </div>
    <div class="col-12 text-center mb-4">
            <h2 class = "abc">Реєстрація</h2>
        </div>
        <div class="col-sm-5 m-auto">
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="signupRequest" id="signup-form" class="register">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <input type="email" id="email"  placeholder ="email adress" v-model="email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        
                        <input type="password" id="password" placeholder ="password" v-model="password" class=" rvm form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="raise ravs">
                            <span v-if="! xhrRequest">Зареєструвати</span>
                            <span v-if="xhrRequest">Please Wait...</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div class=" racketa col-sm-12 text-center form-group mt-5">
                        <p>
                            Already have an account? 
                            <router-link to="/sign-in">Вхід</router-link>
                        </p>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase/compat/app";
export default {
    name: "Signup",
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        }
    }, 
    methods: {
        signupRequest() {

            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase
                .auth()
                .createUserWithEmailAndPassword(v.email, v.password).then(
                () => {
                    v.successMessage = "Register Successfully.";
                    v.xhrRequest = false;
                    this.$router.replace('/')
                    
                
                }
                
            );
        }
    }
}
</script>
<style lang="scss" scoped>
.racketa{
    text-align:center;
    margin-top:2%;
}
.firsti {
   display:block;
   margin:0 auto;
   width:5%;
   height:5%;
}
._loader {
    position:relative;
    top:6px;
    left:10px;
}
.row{
    margin-top:2%;
}
input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;
  }
  input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
 .forms {
	display: flex;
	min-height: 100vh;
}

form.register {
	color: #FFF;
	
}
form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}
form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}


h2.abc {
    color:rgb(142,129,129);
    text-align: center;
    margin-top:3%;
}
.rvm{
    margin-top:-2%;
}
.raise.ravs{
    display:block;
    margin:0 auto;
}

</style>