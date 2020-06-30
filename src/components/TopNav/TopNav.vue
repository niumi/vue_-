<template>
    <div class="top">
        <div class="top-nav">
            <div class="tabs">
                <tabs :currentIndex="currentIndex" @onIndexChange="getIndex">
                    <tab
                        v-for="(element,index) in tabs"
                        :index="index+1"
                        :key="index"
                        :tabName="element"
                        style="margin-right:0;"
                    ></tab>
                </tabs>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    /* 传参数title*/
    name: "TopNav",
    data() {
        return {
            currentIndex: 1,
            tabs: []
        };
    },
    props: ["title", "iconLeft"],
    methods: {
        getIndex(index) {
            this.currentIndex = index;
        }
    },

    beforeMount() {
        this.tabs.push(this.title);
        console.log(this.tabs);
    }
};
</script>
<style lang="less" scoped>
.top {
    width: 100%;
    height: 3.1rem;
    background-color: #f93f6c;
    // float: left;
    position: fixed;
    .top-nav-empty {
        width: 100%;
        height: 1.55rem;
    }
    .top-nav {
        background-color: #f93f6c;
        width: 100%;
        height: 0;
        padding-bottom: 1rem;
        display: flex;
        .top-nav-left {
            width: 50px;
        }
        .tabs {
            flex: 1;
            z-index: 999;
            padding-top: 0.4rem;
            li {
                float: left;
                color: #fff;
                font-size: 18px;
            }
        }
        .top-nav-right {
            width: 50px;
        }
    }
}
</style>

