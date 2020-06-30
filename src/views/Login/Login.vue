<template>
  <div>
    <div class="logo">
      <img src="../../assets/images/logo/logo.png" alt />
    </div>
    <div class="logoin">
      <p class='tips' >{{tips}}</p>
      <p>
        <i class="iconfont">&#xe71d;</i>
        <input type="text" v-model="username" placeholder="用户名" />
      </p>
      <p>
        <i class="iconfont pswd">&#xe60e;</i>
        <input type="password" v-model="password" placeholder="密码" />
      </p>
    </div>
    <el-button type="danger" class="btn1" plain @click="loginHandler">Ring Up</el-button>
    <el-button type="danger" plain class="btn2" @click="registeredHandler">Account registration</el-button>
    <p class="forget" @click="forgetHandler">忘记密码?</p>
    <div class="qq">
      <i class="iconfont">&#xf003c;</i>
      <i class="iconfont">&#xe659;</i>
      <i class="iconfont">&#xe699;</i>
    </div>
  </div>
</template>
<script>
import Storage from "../../utils/storage";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      tips: ""
    };
  },
  methods: {
    ...mapActions(["setTokenActions"]),
    loginHandler() {
      this.$api
        .getLogin({
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          this.setTokenActions(res.data.userInfo.token);
          Storage.setItem("token", res.data.userInfo.token);
          this.tips = res.data.msg;
          window.history.back();
        })
        .catch(res => {
          if (res.data) {
            this.tips = res.data.msg;
          }
        });
    },
    registeredHandler() {
      this.$router.push("/registered");
    },
    forgetHandler() {
      this.$router.push("/registered");
    }
  },
  watch:{
    tips(){
      this.loginHandler()
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  margin-top: 100px;
  img {
    width: 95px;
    height: 81px;
  }
}
.logoin {
  margin-top: 30px;
  input {
    width: 250px;
    border-color: transparent;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    font-size: 18px;
  }
  input::-webkit-input-placeholder {
    color: #ccc;
    text-align: left;
  }
  p {
    box-sizing: border-box;
    padding: 5px;
  }
}
.iconfont {
  color: #ccc;
  font-weight: 900;
  font-size: 18px;
}
.pswd {
  color: #ff406f;
}
.btn1 {
  color: black;
  background: #ffffff;
  width: 190px;
  border-radius: 50px;
  border: 2px solid #f56c6c;
  margin-top: 20px;
}
.btn2 {
  color: #ffffff;
  background: #ff406f;
  width: 190px;
  border-radius: 50px;
  border: 2px solid #f56c6c;
  margin-top: 20px;
}
.forget {
  box-sizing: border-box;
  margin-top: 10px;
  color: #ccc;
  font-size: 14px;
}
.qq {
  margin-top: 40px;
  i {
    font-size: 30px;
    padding: 30px;
  }
}
</style>

