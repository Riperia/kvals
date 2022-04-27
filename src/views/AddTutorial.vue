<template>
  <div class="oas">
    <div class="submit-form">
      <h2 class="textadd">Прив'язка водія і транспоту</h2>
      <div v-if="!submitted">
        <div class="form-group">
          <input
            placeholder="ПІБ ВОДІЯ"
            type="text"
            class="addstil"
            id="title"
            required
            v-model="tutorial.title"
            name="title"
          />
        </div>

        <div class="form-group">
          <input
            placeholder="МАШИНА"
            class="addstil"
            id="description"
            required
            v-model="tutorial.description"
            name="description"
          />
        </div>

        <button @click="saveTutorial" class="raise addd">Submit</button>
      </div>
      <div v-else>
        <a-alert message="Success Tips" type="success" show-icon />
        <button class="raise" @click="newTutorial">Add</button>
      </div>
    </div>
    <div class="vlike">
      <h2 class="textadd">Категорії водійських посвідчень</h2>
      <a-checkbox-group
        v-model:value="this.$store.state.category"
        style="width: 100%"
      >
        <a-row>
          <a-col :span="8">
            <a-checkbox value="B"></a-checkbox>
            <img src="@/assets/cat-07.png" class="cecar" />
          </a-col>
          <a-col :span="8">
            <a-checkbox value="C"></a-checkbox>
            <img src="@/assets/cat-04.png" class="cecar" />
          </a-col>
          <a-col :span="8">
            <a-checkbox value="C1"></a-checkbox>
            <img src="@/assets/cat-03.png" class="cecar" />
          </a-col>
          <a-col :span="8">
            <a-checkbox value="CE"></a-checkbox>
            <img src="@/assets/cat-05.png" class="cecar" />
          </a-col>
          <a-col :span="8">
            <a-checkbox value="BE"></a-checkbox>
            <img src="@/assets/cat-06.png" class="cecar" />
          </a-col>
        </a-row>
      </a-checkbox-group>
    </div>
  </div>
</template>

<script scoped>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        title: "",
        description: "",
        published: false,
        categorys: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        published: false,
        categoriya: this.$store.state.category,
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
          this.$store.state.category = null;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false,
      };
    },
  },
};
</script>

<style>
.oas {
  display: flex;
}
.cecar {
  width: 60%;
  padding-left: 15%;
}
.ant-checkbox {
  transform: scale(2);
}
.ant-checkbox-inner {
  background-color: #1e2139;
  border-color: #1e2139;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #141625;
  border-color: #141625;
}
.ant-checkbox + span {
  color: white;
}
.submit-form {
  margin-top: 6%;
  width: 50%;
}
.rightadd {
  width: 100%;
  margin-top: 0%;
}
.addstil {
  width: 70%;
  background-color: #1e2139;
  color: #fff;
  border-radius: 4px;
  padding: 12px 4px;
  border: none;
  margin: 0 auto;
  display: block;
  margin-bottom: 4%;
}
.textadd {
  color: white;
  text-align: center;
  padding-bottom: 7%;
}
.vlike {
  border-left: 6px solid #a4c8d3;
  height: 100%;
  left: 50%;
  margin-top: 6%;
  width: 50%;
  display: block;
}
.inpik {
  color: white;
}
.raise.addd {
  display: block;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
}
.ant-alert-success {
  width: 30%;
  background-color: #141625;
  border: none;
}
.ant-row {
  display: block;
  margin: 0 auto;
}
.ant-col-8 {
  margin: 0 auto;
  margin-left: 40%;
  margin-bottom: 5%;
}
</style>
