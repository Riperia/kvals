<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4 class="tuto">Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title" style="color: white">Title</label>
        <input
          class="editstil"
          type="text"
          id="title"
          v-model="currentTutorial.title"
        />
      </div>

      <div class="form-group">
        <label for="description" style="color: white">Description</label>
        <input
          type="text"
          class="editstil"
          id="description"
          v-model="currentTutorial.description"
        />
      </div>
    </form>

    <button class="raise" @click="deleteTutorial">Видалити</button>

    <button type="submit" class="raise" @click="updateTutorial">
      Обновити
    </button>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function (tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial };
  },
};
</script>

<style>
.tuto {
  color: white;
  margin-left: 38%;
}
.edit-form {
  max-width: 300px;
  margin: auto;
}
.editstil {
  width: 80%;
  background-color: #1e2139;
  color: #fff;
  border-radius: 4px;
  padding: 12px 4px;
  border: none;
  margin: 0 auto;
  display: block;
  margin-bottom: 4%;
}
</style>
