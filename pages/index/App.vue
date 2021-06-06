<template>
  <section class="index">
    <!-- header -->
    <header class="index__header">
      <!-- search -->
      <div class="index__header-search">
        <div class="index__header-search-left">
          <span class="el-icon-search index__header-search-icon"></span>
          <input class="index__header-search-input" type="text" placeholder="全站优质资源尽在掌握中" />
        </div>
        <button class="index__header-search-button" @click="toUpload"></button>
      </div>

      <!-- banner -->
      <div class="index__header-banner">
        <img class="index__header-banner-image" :src="images.logo" alt="" />
      </div>

      <!-- classify -->
      <div class="index__header-classify">
        <div class="index__header-classify-box" v-for="(item,index) in classify" :key="index">
          <div class="index__header-classify-image-box">
            <img class="index__header-classify-image" :src="item.images">
          </div>
          <div class="index__header-classify-title">{{item.title}}</div>
        </div>
      </div>
    </header>

    <div class="index__list">
      <!-- title -->
      <div class="index__list-title">
        <span>达人榜</span>
        <span>top10</span>
      </div>

      <div class="index__list-container">
        <div class="index__list-container-lookall">
          <span>查看全部</span>
          <span class="el-icon-arrow-right"></span>
        </div>

        <div class="index__list-container-main">
          <div class="index__list-container-main-item" v-for="(item, index) in list" :key="index">
            <div class="index__list-item-ranking">
              {{item.ranking}}
            </div>
            <div class="index__list-item-avatar">
              <img  class="index__list-item-avatar-images" :src="item.avatar">
            </div>
            <div class="index__list-item-info">
              <p>{{item.name}}</p>
              <p><span class="el-icon-check"></span>{{item.job}}{{item.count}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <span>热门资源</span>
      <div>
        <ul>
          <li>
            <img :src="images.logo" alt="" />
            <span>网络与市场中的计算思维</span>
            <span>专业知识</span>
            <span>#计算思维#</span>
            <img :src="images.logo" alt="" />
            <span>张媛媛</span>
            <span class="el-icon-star-on"></span>
            <span>180</span>
          </li>
          <li>
            <img :src="images.logo" alt="" />
            <span>网络与市场中的计算思维</span>
            <span>专业知识</span>
            <span>#计算思维#</span>
            <img :src="images.logo" alt="" />
            <span>张媛媛</span>
            <span class="el-icon-star-on"></span>
            <span>180</span>
          </li>
          <li>
            <img :src="images.logo" alt="" />
            <span>网络与市场中的计算思维</span>
            <span>专业知识</span>
            <span>#计算思维#</span>
            <img :src="images.logo" alt="" />
            <span>张媛媛</span>
            <span class="el-icon-star-on"></span>
            <span>180</span>
          </li>
        </ul>
      </div>
      <span>热门资讯</span>
      <div class="message">
        <ul>
          <li>
            <img :src="images.logo" alt="" />
            <span>焊接工程师</span>
            <span>深圳</span>
            <img :src="images.logo" alt="" />
            <span>比亚迪股份有限公司</span>
            <span>学习资源</span>
          </li>
          <li>
            <img :src="images.logo" alt="" />
            <span>焊接工程师</span>
            <span>深圳</span>
            <img :src="images.logo" alt="" />
            <span>比亚迪股份有限公司</span>
            <span>学习资源</span>
          </li>
          <li>
            <img :src="images.logo" alt="" />
            <span>焊接工程师</span>
            <span>深圳</span>
            <img :src="images.logo" alt="" />
            <span>比亚迪股份有限公司</span>
            <span>学习资源</span>
          </li>
        </ul>
      </div>
      <span>热门问题</span>
      <div class="question">
        <ul>
          <li>
            <span>我想毕业后进入互联网大厂，需要那些经历和技能?</span>
            <span>304人回答</span>
          </li>
          <li>
            <span>我想毕业后进入互联网大厂，需要那些经历和技能?</span>
            <span>304人回答</span>
          </li>
          <li>
            <span>我想毕业后进入互联网大厂，需要那些经历和技能?</span>
            <span>304人回答</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <span>
        <router-link to="login">打卡</router-link>
      </span>
      <span>
        <router-link to="login">动态</router-link>
      </span>
      <span>
        <router-link to="login">发现</router-link>
      </span>
      <span>
        <router-link to="login">消息</router-link>
      </span>
      <span>
        <router-link to="login">我</router-link>
      </span>
    </div>
  </section>
</template>

<script>
import Logo from './assets/logo.png'

export default {
   data() {
    return {
      images: {
        logo: Logo
      },
      classify: [
        {
          images: Logo,
          title: '学习资源'
        }, {
          images: Logo,
          title: '职场资讯'
        }, {
          images: Logo,
          title: '问答专区'
        }, {
          images: Logo,
          title: '人生百态'
        }
      ],
      list: [
        {
          ranking: 1,
          avatar: Logo,
          name: 'xioama',
          job: '前端工程师',
          count: 324
        }, {
          ranking: 2,
          avatar: Logo,
          name: 'xioama',
          job: '前端工程师',
          count: 324
        }, {
          ranking: 3,
          avatar: Logo,
          name: 'xioama',
          job: '前端工程师',
          count: 324
        }, {
          ranking: 4,
          avatar: Logo,
          name: 'xioama',
          job: '前端工程师',
          count: 324
        }
      ]
    };
  },
  methods: {
    toUpload() {
      this.$router.push('/discover/upload')
    }
  },
};
</script>

<style lang="less" scoped>
.index {

}
.index__header {

  .index__header-search {
    padding: 0 0.2rem;
    display: flex;
    flex-direction: row;
    height: 0.9rem;
  }
  .index__header-search-left {
    position: relative;
    flex: 1;
  }
  .index__header-search-icon {
    position: absolute;
    font-size: 0.6rem;
    top: 0.1rem;
    left: 0.1rem;
    z-index: 1;
  }
  .index__header-search-input {
    border: none;
    width: 100%;
    border-radius: 1rem;
    box-sizing: border-box;
    flex: 1;
    // width: 7.3rem;
    height: 0.9rem;
    padding: 0 0.4rem 0 1rem;
    background-color: #f2f2f2;
    // margin: 1rem 0 0 -1.5rem;
  }
  .index__header-search-button {
    margin-left: 0.2rem;
    width: 0.9rem;
    height: 0.9rem;
    background-color: #599ad5;
    border: none;
    border-radius: 0.3rem;
  }

  .index__header-banner {
    margin: 0.2rem 0 0 0;
    width: 100%;
    height: 3rem;
    background-color: #b5dbe8;
  }
  .index__header-banner-image {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }

  .index__header-classify {
    // display: inline-block;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    width: 9rem;
    margin: 0.3rem auto;

    .index__header-classify-box {
      width: 1.7rem;
      height: 1.8rem;
      border: 0.05rem solid #f2f2f2;
      border-radius: 0.2rem;
      box-shadow: 0rem 0.01rem 0.01rem #f2f2f2;

      .index__header-classify-image-box {
        width: 1.7rem;
        height: 1.3rem;
      }
      .index__header-classify-image {
        width: 100%;
      }

      .index__header-classify-title {
        margin-top: 0.1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
      }
    }
  }
}
.index__list {
  position: relative;
  text-align: left;
  top: 0.3rem;
  // span:nth-child(1) {
  //   display: inline-block;
  //   font-size: 0.5rem;
  //   font-weight: 600;
  //   margin: 0 0.3rem 0 0.8rem;
  // }
  // span:nth-child(2) {
  //   font-size: 0.5rem;
  //   font-weight: 600;
  //   color: #ed8f72;
  // }

  .index__list-container {
    width: 9rem;
    // height: 4.7rem;
    // text-align: right;
    background-color: #5b9bd5;
    margin: 0.2rem auto;
    border-radius: 0.3rem;

    .index__list-container-lookall {
      text-align: right;
    }

    // span {
    //   color: #fff;
    //   font-size: 0.4rem;
    //   font-weight: 500;
    //   padding: 0.1rem 0.1rem 0.1rem 0rem;
    // }
    // span:nth-child(1) {
    //   margin-right: -0.05rem;
    // }

    .index__list-container-main {
      // text-align: left;
      .index__list-container-main-item {
        // display: inline-block;
        height: 1.1rem;
        display: flex;
        flex-direction: row;
        margin-bottom: 0.2rem;
        // span:nth-child(1) {
        // }
        .index__list-item-ranking {
          color: #ed8f72;
          vertical-align: 73%;
          margin: 0 0.5rem 0 0.4rem;
          line-height: 1.1rem;
          height: 1.1rem;
        }
        .index__list-item-avatar {
          width: 1.1rem;
          height: 1.1rem;
          box-sizing: border-box;
          border: 0.05rem solid #eee;
        }
        .index__list-item-avatar-images {
          width: 100%;
          // height: 0.9rem;
          border-radius: 50%;
        }

        .index__list-item-info {
          flex: 1;
        }
        // span:nth-child(3) {
        //   color: #fff;
        //   font-size: 0.4rem;
        //   vertical-align: 113%;
        //   margin: 0 0.5rem 0 0.4rem;
        // }
        // span:nth-child(4) {
        //   color: #fff;
        //   font-size: 0.25rem;
        //   vertical-align: -10%;
        //   margin: 0 -0.2rem 0 -1.7rem;
        //   width: 0.3rem;
        //   height: 0.2rem;
        //   background-color: #0080ea;
        //   border-radius: 50%;
        //   text-align: right;
        // }
        // span:nth-child(5) {
        //   color: #fff;
        //   font-size: 0.35rem;
        //   vertical-align: -10%;
        //   margin: 0 0.5rem 0 0.4rem;
        // }
        // span:nth-child(6) {
        //   color: #333;
        //   font-size: 0.35rem;
        //   vertical-align: -10%;
        //   margin: 0 0.3rem 0 -0.1rem;
        // }
      }
    }
  }
}
.foot {
  text-align: left;
  margin: 0.5rem 0rem 0.5rem 0.7rem;
  span {
    display: inline-block;
    font-size: 0.5rem;
    font-weight: 600;
    padding: 0.3rem 0;
  }
  div {
    height: 2.3rem;
    ul {
      white-space: nowrap;
      overflow: hidden;
      overflow-x: scroll;
      li {
        display: inline-block;
        height: 2.3rem;
        width: 7.5rem;
        background-color: #f2f2f2;
        border-radius: 0.3rem;
        margin: 0 0.5rem 0 0;
        img:nth-child(1) {
          float: left;
          margin: 0.3rem;
          width: 2.2rem;
          height: 1.7rem;
          border-radius: 0.3rem;
          background-color: #fff;
        }
        span:nth-child(2) {
          display: inline-block;
          font-size: 0.4rem;
          vertical-align: 420%;
        }
        span:nth-child(3) {
          color: #a3c4e3;
          display: inline-block;
          font-size: 0.3rem;
          vertical-align: 410%;
          margin-left: -4.4rem;
        }
        span:nth-child(4) {
          color: #a3c4e3;
          display: inline-block;
          font-size: 0.3rem;
          vertical-align: 410%;
          margin-left: 0.1rem;
        }
        img:nth-child(5) {
          margin: -0.1rem 0.3rem 0.3rem -2.8rem;
          width: 0.6rem;
          height: 0.6rem;
          background-color: #fff;
          border-radius: 50%;
          background-color: #fff;
          vertical-align: 90%;
        }
        span:nth-child(6) {
          display: inline-block;
          font-size: 0.3rem;
          vertical-align: 410%;
          margin-left: -0.2rem;
          vertical-align: 230%;
        }
        span:nth-child(7) {
          display: inline-block;
          color: #ffbe00;
          font-size: 0.5rem;
          vertical-align: 410%;
          margin-left: 1.65rem;
          vertical-align: 145%;
        }
        span:nth-child(8) {
          display: inline-block;
          font-size: 0.3rem;
          vertical-align: 410%;
          margin-left: 0rem;
          vertical-align: 230%;
        }
      }
    }
    ul::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  .message{
    img:nth-child(1){
      float: right;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-top: 0.5rem;
      margin-right: 0.6rem;
    }
    span:nth-child(6){
      display: inline-block;
      // padding: -0.3rem 0.3rem 0.3rem 0.5rem;
      margin: 0 0 0 1.58rem;
      vertical-align: 200%;
      font-size: 0.3rem;
      font-weight: 400;
      color: #aaa;
    }
    span:nth-child(2){
      padding: 0.3rem 0.3rem 0.3rem 0.5rem;
      font-size: 0.4rem;
      font-weight: 600;
    }
    span:nth-child(3){
      display: inline-block;
      // padding: -0.3rem 0.3rem 0.3rem 0.5rem;
      margin: 0 0 0 0.1rem;
      vertical-align: 558%;
      font-size: 0.3rem;
      font-weight: 400;
      color: #aaa;
    }
    img:nth-child(4){
      width: 0.7rem;
      height: 0.7rem;
      // float: left;
      // top: 2rem;
      margin: 0 0 0 -3rem;
      vertical-align: 162%;
    }
    span:nth-child(5){
      display: inline-block;
      margin: 0 0 0 0.3rem;
      vertical-align: 220%;
      font-size: 0.3rem;
      font-weight: 400;
    }
  }
  .question {
    margin-bottom: 2rem;
    height: 2rem;
    ul {
      li {
        display: inline-block;
        white-space: normal;
        padding: 0 0.3rem 0.2rem 0.3rem;
        width: 7rem;
        height: 2rem;
        span:nth-child(1) {
          display: inline-block;
          font-size: 0.4rem;
          vertical-align: 420%;
        }
        span:nth-child(2) {
          // position: absolute;
          // float: right;
          // display: inline-block;
          color: #ffbe00;
          font-size: 0.3rem;
          margin-left: -1.68rem;
        }
      }
    }
  }
}
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  background-color: #a5a5a5;
  display: flex;
  justify-content: space-around;
  span:nth-child(1) a {
    color: #555 !important;
  }
  span:nth-child(2) a {
    color: #555 !important;
  }
  span:nth-child(3) a {
    color: #000 !important;
    font-weight: 600;
  }
  span:nth-child(4) a {
    color: #555 !important;
  }
  span:nth-child(5) a {
    color: #555 !important;
  }
}
</style>