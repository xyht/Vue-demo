<template>
    <div class="m-header">
      <div class="mean">
        <ul>
          <li class="active li" @click="postData"><a class="mean-a" href="http://127.0.0.1:8080/login">首页</a></li>
          <li class="li"><a class="mean-a" href="javascript:" @mouseenter="enter(1)" @mouseleave="leave">云产品</a></li>
          <li class="li"><a class="mean-a" href="javascript:">微信建站</a></li>
          <li class="li"><a class="mean-a" href="javascript:" @mouseenter="enter(3)" @mouseleave="leave">行业解决方案</a></li>
          <li class="li"><a class="mean-a" href="javascript:" @mouseenter="enter(4)" @mouseleave="leave">合作护板</a></li>
          <li class="li"><a class="mean-a" href="javascript:" @mouseenter="enter(5)" @mouseleave="leave">帮助与支持</a></li>
        </ul>
      </div>
      <div class="mean-list">
        <transition name="fade">
          <div class="li-div" v-show="show===1" @mouseenter="enter(1)" @mouseleave="leave" style="height: 200px">
            <div class="wapper">
              <div class="one">
                <span>计算机与网络</span>
                <ol>
                  <li class="li-demo"><a href="javascript:" >云服务器</a></li>
                  <li class="li-demo"><a href="javascript:" >弹性web引擎</a></li>
                  <li class="li-demo"><a href="javascript:">负载均衡</a></li>
                </ol>
              </div>
              <div class="one">
                <span>存储与CDN</span>
                <ol>
                  <li class="li-demo"><a href="javascript:">云数据库</a></li>
                  <li class="li-demo"><a href="javascript:">NoSQL储存</a></li>
                  <li class="li-demo"><a href="javascript:">对象储存服务</a></li>
                  <li class="li-demo"><a href="javascript:">CDN</a></li>
                </ol>
              </div>
              <div class="one">
                <span>监控与安全</span>
                <ol>
                  <li class="li-demo"><a href="javascript:">云监控</a></li>
                  <li class="li-demo"><a href="javascript:">云安全</a></li>
                  <li class="li-demo"><a href="javascript:">云检测</a></li>
                </ol>
              </div>
              <div class="one">
                <span>数据分析</span>
                <ol>
                  <li class="li-demo"><a href="javascript:" >腾讯云分析</a></li>
                  <li class="li-demo"><a href="javascript:" >关键因子</a></li>
                </ol>
              </div>
              <div class="one">
                <span>开发者工具</span>
                <ol>
                  <li class="li-demo"><a href="javascript:" >移动加速</a></li>
                  <li class="li-demo"><a href="javascript:" >应用加固</a></li>
                  <li class="li-demo"><a href="javascript:">信鸽推送</a></li>
                </ol>
              </div>
              <div class="one">
                <span>开发者服务</span>
                <ol>
                  <li class="li-demo"><a href="javascript:" >安全认证服务</a></li>
                  <li class="li-demo"><a href="javascript:" >域名备案</a></li>
                </ol>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div class="li-div" v-show="show===2">
            <div></div>
          </div>
        </transition>
        <transition name="fadeshort">
          <div class="li-div" v-show="show===3" @mouseenter="enter(3)" @mouseleave="leave" style="height: 60px">
            <div class="wapper-two">
              <ol>
                <li><a class="two-a" href="javascript:">微信</a></li>
                <li><a class="two-a" href="javascript:">游戏</a></li>
                <li><a class="two-a" href="javascript:">移动应用</a></li>
              </ol>
            </div>
          </div>
        </transition>
        <transition name="fadeshort">
          <div class="li-div" v-show="show===4" @mouseenter="enter(4)" @mouseleave="leave" style="height: 60px">
            <div class="wapper-two">
              <ol>
                <li><a class="two-a" href="javascript:">代理商</a></li>
                <li><a class="two-a" href="javascript:">微信服务商</a></li>
                <li><a class="two-a" href="javascript:">创投机构</a></li>
              </ol>
            </div>
          </div>
        </transition>
        <transition name="fadeshort">
          <div class="li-div" v-show="show===5" @mouseenter="enter(5)" @mouseleave="leave" style="height: 60px">
            <div class="wapper-two">
              <ol>
                <li><a class="two-a" href="javascript:">资料库</a></li>
                <li><a class="two-a" href="javascript:">论坛</a></li>
                <li><a class="two-a" href="javascript:">亿元扶持</a></li>
              </ol>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import './header.css'
export default {
  data () {
    return {
      show: 0,
      msg: ''
    }
  },
  methods: {
    enter (num) {
      this.show = num
    },
    leave () {
      this.show = 0
    },
    postData: function () {
      this.$http.post('http://127.0.0.1/tp5/public/index.php/index/index/index', {
        userId: '101'
      }, {
        emulateJSON: true,
        Headers: 'asd'}
      ).then(res => {
        this.msg = res.data
        console.log(this.msg)
      })
    },
    getData: function () {
      this.$http.get('http://127.0.0.1/tp5/public/index.php/index/index/index', {
        params: {
          userId: '101'
        }
      }).then(res => {
        this.msg = res.data
        console.log(this.msg)
      })
    }
  },
  created () {
    // 所有程序运行前最先进行
    this.postData()
    // this.getData()
  }
}
</script>
