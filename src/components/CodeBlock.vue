<template>
    <codemirror
        ref="mycode"
        :value="curCode"
        :options="cmOptions">
    </codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import "codemirror/theme/material-darker.css";  // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
import "codemirror/mode/javascript/javascript"; // 这里引入的模式的js，根据设置的mode引入，一定要引入！！
export default {
    name:'CodeBlock',
    components:{
        codemirror
    },
    props:{
        curCode:{
            default:''
        },
        otherOpt:{
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            baseOpt: {
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'material-darker',
                lineNumbers: true,
                line: true,
                readOnly:true,
            }
        }
    },
    computed:{
        cmOptions(){
            return {
                ...this.baseOpt,
                ...this.otherOpt
            }
        }
    }
}
</script>

<style lang="scss">
.CodeMirror {
    height: auto !important;
    padding-bottom: 10px;
}
.CodeMirror-scroll {
	height: auto;
	overflow-y: hidden;
	overflow-x: auto;
}
.cm-s-material-darker.CodeMirror,
.cm-s-material-darker .CodeMirror-gutters{
    background-color: #21222e;
}
</style>
