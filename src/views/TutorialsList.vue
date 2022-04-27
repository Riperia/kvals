<template>
  <div class="home container">
    <div class="textto">
      <h2 class="textadd">ПІБ Водія</h2>
      <h2 class="textadd">Автотранспорт</h2>
      <h2 class="textadd">Категорія</h2>
    </div>
    <div
      class="invoicess"
      :class="{ active: index == currentIndex }"
      v-for="(tutorial, index) in tutorials"
      :key="index"
      @click="setActiveTutorial(tutorial, index)"
    >
      <div class="left flex">
        <span class="tracking-number">{{ tutorial.title }}</span>
        <span class="rect">{{ tutorial.description }}</span>
        <span class="rects">{{ tutorial.categoriya }}</span>
      </div>
    </div>
    <div id="components-back-top-demo-custom">
      <a-back-top>
        <div class="ant-back-top-inner">↑</div>
      </a-back-top>
    </div>
    <div v-if="currentTutorial" class="list row">
      <div class="col-md-6">
        <div v-if="currentTutorial">
          <tutorial-details
            :tutorial="currentTutorial"
            @refreshList="refreshList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import TutorialDetails from "./Tutorial";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  },

  methods: {
    onDataChange(items) {
      let _tutorials = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          title: data.title,
          description: data.description,
          published: data.published,
          categoriya: data.categoriya,
        });
      });

      this.tutorials = _tutorials;
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
  },
  beforeUnmount() {
    TutorialDataService.getAll().off("value", this.onDataChange);
  },
};
</script>

<style  lang="scss" scoped>
.textto {
  display: flex;
}
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #7c5dfa;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.invoicess {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;
  &:hover {
    background-color: #242740;
  }
  span {
    font-size: 13px;
  }

  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;

    span {
      flex: 1 126px;
      margin-left: 1%;
    }

    .tracking-number {
      text-transform: uppercase;
    }
    .rect {
      padding-left: 10%;
    }
    .rects {
      padding-left: 10%;
    }
  }

  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;

    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}

.spol {
  display: flex;
  margin-top: 6%;
}
.spolucha {
  display: block;
  margin: 0 auto;
}
.spoluch {
  display: block;
  margin: 0 auto;
  margin-left: 5%;
}

.adi {
  display: block;
}
.list {
  text-align: left;
  max-width: 750px;
  padding-top: 3%;
  margin: 0 auto;
}

.raise.ravs.adi {
  text-align: center;
  width: 120%;
  margin: 0 auto;
  display: block;
  border: 4px;
  border-radius: 4px;
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
}
.textadd {
  color: white;
  text-align: center;
  padding-bottom: 34px;
  margin: 0 auto;
}
</style>
