<template>
  <el-container>
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import HeaderBar from './components/HeaderBar'
import SideMenu from './components/SideMenu'
export default {
  components: {
    HeaderBar, SideMenu
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted () {
  }
}
</script>
