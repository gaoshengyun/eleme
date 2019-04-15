<template>
  <div>
    <div id="ajaxloader2">
      <div class="outer"></div>
      <div class="inner"></div>
    </div>  
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
#ajaxloader2 {
  margin: 30px auto 0;
}
#ajaxloader2 .outer {
  border: 5px solid rgba(0, 183, 229, 0.9);
  opacity: .9;
  width: 50px;
  height: 50px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  -moz-box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  -webkit-animation: spin-right 0.5s linear infinite normal;
  -moz-animation: spin-right 0.5s linear infinite normal;
  -ms-animation: spin-right 0.5s linear infinite normal;
  animation: spin-right 0.5s linear infinite normal;
  -webkit-animation-delay: 0;
  -moz-animation-delay: 0;
  -o-animation-delay: 0;
  animation-delay: 0;
  margin: 0 auto;
}
#ajaxloader2 .inner {
  display: block;
  width: 30px;
  height: 30px;
  border: 5px solid rgba(0, 183, 229, 0.9);
  opacity: .9;
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  -webkit-box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  -moz-box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  position: relative;
  top: -50px;
  margin: 0 auto;
  -webkit-animation: spin-left 0.5s linear infinite normal;
  -moz-animation: spin-left 0.5s linear infinite normal;
  -ms-animation: spin-left 0.5s linear infinite normal;
  animation: spin-left 0.5s linear infinite normal;
  -webkit-animation-delay: 0;
  -moz-animation-delay: 0;
  -o-animation-delay: 0;
  animation-delay: 0;
}
@keyframes spin-right {
  from {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1.0;
  }
  to {
    transform: rotate(360deg);
    opacity: 0.2;
  }
}
@-moz-keyframes spin-right {
  from {
    -moz-transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    -moz-transform: rotate(180deg);
    opacity: 1.0;
  }
  to {
    -moz-transform: rotate(360deg);
    opacity: 0.2;
  }
}
@-webkit-keyframes spin-right {
  from {
    -webkit-transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    -webkit-transform: rotate(180deg);
    opacity: 1.0;
  }
  to {
    -webkit-transform: rotate(360deg);
    opacity: 0.2;
  }
}
@keyframes spin-left {
  from {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(-180deg);
    opacity: 1.0;
  }
  to {
    transform: rotate(-360deg);
    opacity: 0.2;
  }
}
@-moz-keyframes spin-left {
  from {
    -moz-transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    -moz-transform: rotate(-180deg);
    opacity: 1.0;
  }
  to {
    -moz-transform: rotate(-360deg);
    opacity: 0.2;
  }
}
@-webkit-keyframes spin-left {
  from {
    -webkit-transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    -webkit-transform: rotate(-180deg);
    opacity: 1.0;
  }
  to {
    -webkit-transform: rotate(-360deg);
    opacity: 0.2;
  }
}
</style>
