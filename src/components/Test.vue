<template>
  <div>
    <h3>测试</h3>
    <div>
      <el-form ref="form">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">测一测</el-button>
        </el-form-item>
        <div v-if="headerParameters.length > 0">
          <el-form-item size="mini"  v-for="param in headerParameters"
                        :label="param.name"
                        :key="param.name"
                        :prop="'headerParam.' + param.name"
                        :rules="{
                                required: param.required,
                                message: param.name +'必填',
                                trigger: 'blur, change'
                        }">
            <el-input :value="param.default"></el-input>
          </el-form-item>
        </div>
        <div v-if="queryParameters.length > 0">
          <el-form-item size="mini"  v-for="param in queryParameters"
                        :label="param.name"
                        :key="param.name"
                        :prop="'queryParam.' + param.name"
                        :rules="{
                                required: param.required, message: param.name +'必填', trigger: 'blur, change'
                        }">
            <el-input :value="param.default"></el-input>
          </el-form-item>
        </div>
        <div v-if="bodyParameters.length > 0">
          <el-form-item v-for="param in bodyParameters"
                        :label="param.name"
                        :key="param.name"
                        :prop="'bodyParam.' + param.name">
            <el-input type="textarea" :value="format(param)" autosize></el-input>
          </el-form-item>
        </div>
      </el-form>
      <p>{{format(testResult)}}</p>
    </div>
  </div>
</template>

<script>
import { formatObject } from '../util'
import { test } from '../api'
import { mapGetters } from 'vuex'
export default {
  props: {
    operation: Object
  },

  data () {
    return {
      headerParam: {},
      queryParam: {},
      bodyParam: {},
      testResult: {}
    }
  },
  methods: {
    onSubmit () {
      console.log('headerParam', this.headerParam)
      console.log('queryParam', this.queryParam)
      console.log('bodyParam', this.bodyParam)
      test(this.operation.method, this.baseUrl + this.operation.path, {}).then(data => {
        this.testResult = data.data
      })
    },

    format (obj) {
      return formatObject(obj)
    }
  },
  computed: {
    ...mapGetters({
      baseUrl: 'getBaseUrl'
    }),
    headerParameters: {
      get () {
        if (this.operation && this.operation['parameters']) {
          return this.operation.parameters.filter(param => param.in === 'header')
        }
        return []
      }
    },
    queryParameters: {
      get () {
        if (this.operation && this.operation.parameters) {
          return this.operation.parameters.filter(param => param.in === 'query')
        }
        return []
      }
    },
    bodyParameters: {
      get () {
        if (this.operation && this.operation.parameters) {
          return this.operation.parameters.filter(param => param.in === 'body')
        }
        return []
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
