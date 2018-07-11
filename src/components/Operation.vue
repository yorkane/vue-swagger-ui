<template>
  <el-card>
    <div slot="header">
      <h3>{{operation.summary}}</h3>
      <p>{{operation.description}}</p>
    </div>
  <el-tabs>
    <el-tab-pane label="Info" name="first">
          <div slot="header">
            {{operation.summary}}<span>{{operation.description}}</span>
          </div>
          <request-path :method="operation.method" :path="operation.path"></request-path>
          <request-parameter :parameters="parameters" :consumes="operation.consumes"></request-parameter>
      <!--<definition v-for="(definition, key) in definitions" :definition="definition" :name="key" :key="key"></definition>-->
  </el-tab-pane>
    <el-tab-pane label="response" name="fourth"><response-parameter :parameters="responses" :produces="operation.produces"></response-parameter></el-tab-pane>
    <el-tab-pane label="Test" name="third"><test :operation="operation"></test></el-tab-pane>
  </el-tabs>
  </el-card>
</template>

<script>
import RequestPath from './RequestPath'
import RequestParameter from './RequestParameters'
import ResponseParameter from './ResponseParameter'
// import Definition from './Definition'
import Test from './Test'
import { formatObject, forEachValue } from '../util'
import { mapGetters } from 'vuex'
export default {
  components: {
    RequestPath,
    RequestParameter,
    ResponseParameter,
    Test
    // Definition
  },
  props: {
  },
  data () {
    return {
      form: {},
      testResult: {}
    }
  },
  methods: {
    format (obj) {
      return formatObject(obj)
    },
    upperCase (method) {
      if (method) {
        return method.toUpperCase()
      }
      return ''
    },
    getOperation () {
      return this.$store.getters.getOperation(this.$route.query['operationId'])
    }
  },
  computed: {
    ...mapGetters({
      definitions: 'getDefinitions'
    }),
    operation: {
      get () {
        return this.getOperation()
      }
    },
    parameters: {
      get () {
        let operation = this.getOperation()
        if (operation && operation.parameters) {
          return operation.parameters
        }
        return []
      }
    },
    responses: {
      get () {
        let operation = this.getOperation()
        let arr = []
        if (operation && operation.responses) {
          let responses = operation.responses
          if (responses) {
            forEachValue(responses, (value, key) => {
              let obj = Object.assign({}, value)
              obj['status'] = key
              arr.push(obj)
            })
          }
        }
        return arr
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style>

</style>
