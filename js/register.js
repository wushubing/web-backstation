$(function () {
 $('form').bootstrapValidator({
  message: 'This value is not valid',
  feedbackIcons: {
  valid: 'glyphicon glyphicon-ok',
  invalid: 'glyphicon glyphicon-remove',
  validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
  username: {
         message: '用户名验证失败',
         validators: {
         notEmpty: {
          message: '用户名不能为空'
         },
         stringLength: {
          min: 6,
          max: 18,
          message: '用户名长度必须在6到18位之间'
         },
         regexp: {
          regexp: /^[a-zA-Z0-9_]+$/,
          message: '用户名只能包含大写、小写、数字和下划线'
         }
         }
  },
  email: {
   validators: {
   notEmpty: {
    message: '邮箱不能为空'
   },
   emailAddress: {
    message: '邮箱地址格式有误'
   }
   }
  },
  phone: {
    validators: {
   notEmpty: {
    message: '电话号码不能为空'
   },
         regexp: {
          regexp: /^1[3|4|5|8|9]\d{9}$/,
          message: '电话号码格式错误'
        }
      }
  },
  password: {
                 message:'密码无效',
                 validators: {
                     notEmpty: {
                         message: '密码不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '密码长度必须在6到30之间'
                     },
                     identical: {//相同
                         field: 'password', //需要进行比较的input name值
                         message: '两次密码不一致'
                     },
                     different: {//不能和用户名相同
                         field: 'username',//需要进行比较的input name值
                         message: '不能和用户名相同'
                     },
                     regexp: {
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '密码由字母、数字、下划线组成'
                     }
                 }
             },
             repassword: {
                 message: '密码无效',
                 validators: {
                     notEmpty: {
                         message: '用户名不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '密码长度必须在6到30之间'
                     },
                     identical: {//相同
                         field: 'password',
                         message: '两次密码不一致'
                     },
                     different: {//不能和用户名相同
                         field: 'username',
                         message: '不能和用户名相同'
                     },
                     regexp: {//匹配规则
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '密码由字母、数字、下划线组成'
                     }
                 }
             },
  }
 });
 });