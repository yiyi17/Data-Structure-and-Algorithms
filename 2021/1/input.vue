<template>
  <div>
    <div>
      <input v-model="inputValue" @change="inputChange" type="text" />
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in recommandList" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { post } from "./axios";

export default {
  data() {
    return {
      inputValue: "",
      timer: null,
      recommandList: [],
      map: new Map(),
    };
  },
  method: {
    axios(params) {
      axios.inspect((res, req) => {
        if (res.config.url === "xxx") {
          this.map.set(res.params.data, req);
        }
      });
    },
    async inputChange() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // 防抖
      this.timer = setTimeout(() => {
        // 返回数据与当前输入框做比较
        // 如果找到就返回最新的
        // 如果没找到1s后返回查询的最新的

        const res = axios.post("", { data: this.inputValue });
        if (this.map.has(this.inputValue)) {
          this.recommand = this.map.get(this.inputValue);
        } else {
          this.recommand = res;
        }

        this.recommandList = res;
      }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
